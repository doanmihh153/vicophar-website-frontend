/**
 * ============================================================================
 * PRODUCT ARTICLE RENDERER - Chuyển đổi TipTap content cho SEO sản phẩm
 * ============================================================================
 *
 * Component này dựa trên ArticleRenderer.jsx nhưng được tối ưu cho trang sản phẩm:
 * - Chuyển đổi ordered list (1. 2. 3.) thành các <section> semantic với <h2>/<h3>
 * - Giữ nguyên nội dung, chỉ thay đổi cấu trúc HTML cho SEO
 * - Hỗ trợ cả TipTap JSON và HTML string
 *
 * SỬ DỤNG:
 * --------
 * <ProductArticleRenderer content={tiptapJsonOrHtml} />
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Image from "next/image";

// ============================================================================
// HÀM CHUYỂN ĐỔI ORDERED LIST TRONG JSON THÀNH SECTION
// ============================================================================

/**
 * Chuyển đổi orderedList node thành các section semantic
 * Mỗi listItem sẽ trở thành một <section> với <h3> + <p>
 *
 * @param {Object} olNode - Node orderedList từ TipTap JSON
 * @param {number} startIndex - Index bắt đầu để tạo key unique
 * @returns {Array} - Mảng các section node đã chuyển đổi
 */
function transformOrderedListToSections(olNode, startIndex = 0) {
    const sections = [];

    olNode.content?.forEach((listItem, idx) => {
        // Lấy nội dung text từ listItem
        const paragraphs = listItem.content?.filter(
            (child) => child.type === "paragraph"
        );

        if (paragraphs && paragraphs.length > 0) {
            // Lấy paragraph đầu tiên làm heading
            const firstPara = paragraphs[0];
            const headingContent = firstPara.content || [];

            // Các paragraph còn lại là nội dung body
            const bodyParagraphs = paragraphs.slice(1);

            // Tạo section node mới
            const sectionNode = {
                type: "section",
                attrs: { index: startIndex + idx },
                heading: {
                    type: "heading",
                    attrs: { level: 3 }, // Dùng h3 cho các mục trong list
                    content: headingContent,
                },
                body: bodyParagraphs,
            };

            sections.push(sectionNode);
        }
    });

    return sections;
}

/**
 * Chuyển đổi toàn bộ TipTap JSON, thay thế orderedList bằng sections
 *
 * @param {Object} content - TipTap JSON content
 * @returns {Object} - JSON đã được transform
 */
function transformJsonContent(content) {
    if (!content || !content.content) return content;

    const transformedContent = [];

    content.content.forEach((node, index) => {
        if (node.type === "orderedList") {
            // Chuyển đổi orderedList thành các section
            const sections = transformOrderedListToSections(node, index * 100);
            transformedContent.push(...sections);
        } else {
            // Giữ nguyên các node khác
            transformedContent.push(node);
        }
    });

    return {
        ...content,
        content: transformedContent,
    };
}

// ============================================================================
// HÀM CHUYỂN ĐỔI HTML STRING
// ============================================================================

/**
 * Chuyển đổi HTML string, thay <ol><li> thành <section><h3><p>
 * Sử dụng regex để parse và transform (client-side safe)
 *
 * @param {string} html - HTML string cần chuyển đổi
 * @returns {string} - HTML đã được transform
 */
function transformHtmlContent(html) {
    if (!html || typeof html !== "string") return html;

    // Regex để tìm và thay thế <ol>...</ol>
    const olRegex = /<ol[^>]*>([\s\S]*?)<\/ol>/gi;

    return html.replace(olRegex, (match, olContent) => {
        // Tìm tất cả <li> trong <ol>
        const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
        let sections = "";
        let liMatch;

        while ((liMatch = liRegex.exec(olContent)) !== null) {
            const liContent = liMatch[1].trim();

            // Tách nội dung: dòng đầu làm heading, còn lại làm body
            const lines = liContent.split(/<br\s*\/?>/i);
            const heading = lines[0]?.replace(/<[^>]+>/g, "").trim() || "";
            const body = lines.slice(1).join(" ").trim();

            // Tạo section HTML
            sections += `
                <section class="product-section">
                    <h3>${heading}</h3>
                    ${body ? `<p>${body}</p>` : ""}
                </section>
            `;
        }

        return sections;
    });
}

// ============================================================================
// HÀM RENDER NODE - Dựa trên ArticleRenderer nhưng có thêm section
// ============================================================================

/**
 * Render một TipTap node thành React element
 * Hỗ trợ thêm type "section" từ quá trình transform
 *
 * @param {Object} node - TipTap node
 * @param {number} index - Index của node
 * @param {string} parentKey - Key của parent để tạo unique key
 * @returns {React.Element} - React element
 */
function renderNode(node, index, parentKey = "") {
    const { type, content, attrs } = node;
    const nodeKey = parentKey ? `${parentKey}-${index}` : `node-${index}`;

    switch (type) {
        // Section được tạo từ orderedList transform
        case "section":
            return (
                <section key={nodeKey} className="product-section">
                    {/* Render heading của section */}
                    {node.heading && (
                        <h3
                            id={`section-${attrs?.index || index}`}
                            className="product-section-heading"
                        >
                            {node.heading.content?.map((child, i) =>
                                renderNode(child, i, `${nodeKey}-heading`)
                            )}
                        </h3>
                    )}
                    {/* Render body paragraphs */}
                    {node.body?.map((para, i) =>
                        renderNode(para, i, `${nodeKey}-body`)
                    )}
                </section>
            );

        case "heading":
            const HeadingTag = `h${attrs.level}`;

            // Bỏ qua H1 - đã có ở nơi khác
            if (attrs.level === 1) {
                return null;
            }

            // Thêm ID cho H2 và H3 để TOC hoạt động
            const headingId = [2, 3].includes(attrs.level)
                ? `heading-${index}`
                : undefined;

            return React.createElement(
                HeadingTag,
                { key: nodeKey, id: headingId },
                content?.map((child, i) => renderNode(child, i, nodeKey))
            );

        case "paragraph":
            return (
                <p key={nodeKey}>
                    {content?.map((child, i) => renderNode(child, i, nodeKey))}
                </p>
            );

        case "text":
            const { text, marks } = node;
            let renderedText = text;

            // Áp dụng các marks (bold, italic, link)
            if (marks) {
                marks.forEach((mark) => {
                    if (mark.type === "bold") {
                        renderedText = <strong>{renderedText}</strong>;
                    } else if (mark.type === "italic") {
                        renderedText = <em>{renderedText}</em>;
                    } else if (mark.type === "link") {
                        renderedText = (
                            <a
                                href={mark.attrs.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {renderedText}
                            </a>
                        );
                    }
                });
            }

            return <span key={nodeKey}>{renderedText}</span>;

        case "bulletList":
            // Giữ nguyên bullet list (không phải ordered list)
            return (
                <ul key={nodeKey}>
                    {content?.map((child, i) => renderNode(child, i, nodeKey))}
                </ul>
            );

        case "orderedList":
            // Nếu còn orderedList chưa transform -> chuyển thành sections inline
            const inlineSections = transformOrderedListToSections(node, index);
            return (
                <div key={nodeKey}>
                    {inlineSections.map((sec, i) =>
                        renderNode(sec, i, `${nodeKey}-inline`)
                    )}
                </div>
            );

        case "listItem":
            return (
                <li key={nodeKey}>
                    {content?.map((child, i) => renderNode(child, i, nodeKey))}
                </li>
            );

        case "blockquote":
            // Lấy class từ attrs (vd: blockquote-warn, blockquote-error, blockquote-success)
            const blockquoteClass =
                attrs?.class ||
                (attrs?.variant ? `blockquote-${attrs.variant}` : "");
            return (
                <blockquote
                    key={nodeKey}
                    className={blockquoteClass}
                    data-variant={attrs?.variant}
                >
                    {content?.map((child, i) => renderNode(child, i, nodeKey))}
                </blockquote>
            );

        case "image":
            return (
                <figure key={nodeKey}>
                    <Image
                        src={attrs.src}
                        alt={attrs.alt || ""}
                        width={800}
                        height={500}
                        className="rounded-xl"
                    />
                    {attrs.title && <figcaption>{attrs.title}</figcaption>}
                </figure>
            );

        case "table":
            // Tách header và body rows
            const headerRows = [];
            const bodyRows = [];

            content?.forEach((row) => {
                const isHeader = row.content?.some(
                    (cell) => cell.type === "tableHeader"
                );
                if (isHeader) {
                    headerRows.push(row);
                } else {
                    bodyRows.push(row);
                }
            });

            return (
                <div className="table-wrapper" key={nodeKey}>
                    <table>
                        {headerRows.length > 0 && (
                            <thead>
                                {headerRows.map((child, i) =>
                                    renderNode(child, i, `${nodeKey}-head`)
                                )}
                            </thead>
                        )}
                        <tbody>
                            {bodyRows.map((child, i) =>
                                renderNode(child, i, `${nodeKey}-body`)
                            )}
                        </tbody>
                    </table>
                </div>
            );

        case "tableRow":
            return (
                <tr key={nodeKey}>
                    {content?.map((child, i) => renderNode(child, i, nodeKey))}
                </tr>
            );

        case "tableHeader":
            return (
                <th key={nodeKey} scope="col">
                    {content?.map((child, i) => renderNode(child, i, nodeKey))}
                </th>
            );

        case "tableCell":
            return (
                <td key={nodeKey}>
                    {content?.map((child, i) => renderNode(child, i, nodeKey))}
                </td>
            );

        case "codeBlock":
            return (
                <pre key={nodeKey}>
                    <code>
                        {content?.map((child, i) =>
                            renderNode(child, i, nodeKey)
                        )}
                    </code>
                </pre>
            );

        case "horizontalRule":
            return <hr key={nodeKey} />;

        case "hardBreak":
            return <br key={nodeKey} />;

        default:
            return null;
    }
}

// ============================================================================
// COMPONENT CHÍNH
// ============================================================================

/**
 * ProductArticleRenderer - Render TipTap content cho trang sản phẩm
 *
 * @param {Object|string} content - TipTap JSON object hoặc HTML string
 * @returns {React.Element}
 */
export default function ProductArticleRenderer({ content }) {
    // Xử lý trường hợp không có content
    if (!content) return null;

    // Kiểm tra loại content: JSON hay HTML string
    const isHtmlString = typeof content === "string";

    if (isHtmlString) {
        // Nếu là HTML string -> transform và render qua dangerouslySetInnerHTML
        const transformedHtml = transformHtmlContent(content);
        return (
            <div
                className="product-content"
                dangerouslySetInnerHTML={{ __html: transformedHtml }}
            />
        );
    }

    // Nếu là JSON -> transform orderedList thành sections rồi render
    const transformedContent = transformJsonContent(content);

    return (
        <div className="product-content">
            {transformedContent?.content?.map((node, index) =>
                renderNode(node, index)
            )}
        </div>
    );
}
