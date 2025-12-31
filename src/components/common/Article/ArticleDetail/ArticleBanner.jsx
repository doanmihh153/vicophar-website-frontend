/**
 * ============================================================================
 * ARTICLE BANNER - ẢNH CHÍNH BÀI VIẾT
 * ============================================================================
 *
 * Component hiển thị ảnh banner chính của bài viết
 * - Sử dụng Next.js Image để optimize
 * - Aspect ratio 16:9 (aspect-video)
 * - Priority loading cho ảnh hiển thị sớm
 *
 * USAGE:
 * ------
 * <ArticleBanner image={imageUrl} alt={altText} title={title} caption={caption} />
 *
 * ============================================================================
 */

import React from "react";
import Image from "next/image";

export default function ArticleBanner({ image, alt, title, caption }) {
    return (
        <figure className="mb-8">
            <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                    src={image}
                    alt={alt || title || "Ảnh bài viết"}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                />
            </div>
            {(caption || alt || title) && (
                <figcaption className="text-base text-gray-600 italic mt-3 text-center">
                    {caption || alt || title}
                </figcaption>
            )}
        </figure>
    );
}
