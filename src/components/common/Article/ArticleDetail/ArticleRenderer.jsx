/**
 * ============================================================================
 * ARTICLE RENDERER - Renders Tiptap JSON to HTML
 * ============================================================================
 *
 * Extracted from SlugUI for better modularity
 *
 * CHÚ Ý QUAN TRỌNG:
 * - KHÔNG render H1 tag (H1 đã có ở ArticleHeader)
 * - Chỉ render H2-H6 để đảm bảo SEO đúng chuẩn
 * - Thêm ID cho H2 và H3 để TOC scroll được
 *
 * USAGE:
 * ------
 * <ArticleRenderer content={tiptapContent} />
 *
 * ============================================================================
 */

"use client";

import React from "react";
import Image from "next/image";

/**
 * Render Tiptap JSON node to HTML with unique keys and IDs for headings
 */
function renderNode(node, index, parentKey = "") {
    const { type, content, attrs } = node;
    const nodeKey = parentKey ? `${parentKey}-${index}` : `node-${index}`;

    switch (type) {
        case "heading":
            const HeadingTag = `h${attrs.level}`;

            // ⚠️ QUAN TRỌNG: SKIP H1 - chỉ render H2-H6
            // H1 đã có ở ArticleHeader (duy nhất 1 H1 cho SEO)
            if (attrs.level === 1) {
                return null;
            }

            // Add ID to H2 and H3 for TOC scrolling
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

            // Apply marks (bold, italic, link)
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
            return (
                <ul key={nodeKey}>
                    {content?.map((child, i) => renderNode(child, i, nodeKey))}
                </ul>
            );

        case "orderedList":
            return (
                <ol key={nodeKey}>
                    {content?.map((child, i) => renderNode(child, i, nodeKey))}
                </ol>
            );

        case "listItem":
            return (
                <li key={nodeKey}>
                    {content?.map((child, i) => renderNode(child, i, nodeKey))}
                </li>
            );

        case "blockquote":
            return (
                <blockquote key={nodeKey}>
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

export default function ArticleRenderer({ content }) {
    return (
        <div className="article-content">
            {content?.content?.map((node, index) => renderNode(node, index))}
        </div>
    );
}
