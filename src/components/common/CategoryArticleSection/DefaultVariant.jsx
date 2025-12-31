/**
 * DEFAULT VARIANT - CategoryArticleSection
 * Complex layout: Featured + Text + Title Links
 */

import Link from "next/link";
import Image from "next/image";

export default function DefaultVariant({
    title,
    slug,
    articles,
    className = "",
}) {
    // Đảm bảo có đủ 5 articles cho layout mặc định
    const [featured, textOnly, ...titleLinks] = articles;

    return (
        <section
            className={`category-article-section bg-vico-white -mx-4 tablet:-mx-6 desktop:mx-0 rounded-none desktop:rounded-2xl ${className}`}
        >
            {/* HEADER: Title + Xem tất cả (Desktop Only) */}
            <div className="flex items-center justify-between p-4">
                <h2 className="text-h2 font-bold text-vico-green">{title}</h2>
                <Link
                    href={`/goc-suc-khoe/${slug}`}
                    className="hidden desktop:flex group items-center gap-1 text-vico-red font-medium hover:text-vico-red-dark transition-colors whitespace-nowrap"
                >
                    Xem tất cả
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform -translate-0.5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </Link>
            </div>

            {/* UNIFIED GRID: 12 Columns Base */}
            <div className="grid grid-cols-1 desktop:grid-cols-12 gap-6 p-4 pt-0">
                {/* --- ROW 1 --- */}

                {/* COL 1: Featured (Span 8) - Horizontal Layout */}
                {featured && (
                    <div className="desktop:col-span-8 desktop:border-r desktop:border-vico-gray-200 desktop:pr-6 border-b border-vico-gray-200 desktop:border-b-0 pb-4 desktop:pb-0">
                        <Link
                            href={`/goc-suc-khoe/${slug}/${featured.slug}`}
                            className="group flex flex-col desktop:flex-row gap-4 h-full"
                        >
                            {/* Image - Left Side (Desktop) / Top (Mobile/Tablet) */}
                            <div className="w-full desktop:w-5/12 relative aspect-4/3 rounded-xl overflow-hidden shrink-0">
                                <Image
                                    src={featured.image}
                                    alt={featured.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 25vw"
                                />
                            </div>

                            {/* Content - Right Side (Desktop) / Bottom (Mobile/Tablet) */}
                            <div className="flex-1 py-1">
                                <h3 className="text-h4 font-bold text-vico-gray-900 mb-2 line-clamp-2">
                                    {featured.title}
                                </h3>
                                {/* Description: Hidden on mobile/tablet */}
                                <p className="hidden desktop:block text-body text-vico-gray-600 line-clamp-3">
                                    {featured.description}
                                </p>
                            </div>
                        </Link>
                    </div>
                )}

                {/* COL 2: Text Only (Span 4) */}
                {textOnly && (
                    <div className="desktop:col-span-4 border-b border-vico-gray-200 desktop:border-none pb-4 desktop:pb-0">
                        <Link
                            href={`/goc-suc-khoe/${slug}/${textOnly.slug}`}
                            className="group block h-full"
                        >
                            <h3 className="text-h4 font-bold text-vico-gray-900 mb-2 line-clamp-2">
                                {textOnly.title}
                            </h3>
                            {/* Description: Hidden on mobile/tablet */}
                            <p className="hidden desktop:block text-body text-vico-gray-600 line-clamp-3">
                                {textOnly.description}
                            </p>
                        </Link>
                    </div>
                )}

                {/* --- SEPARATOR (Span Full) - Desktop Only --- */}
                <div className="hidden desktop:block col-span-full h-px bg-vico-gray-200 my-2"></div>

                {/* --- ROW 2: 3 Title Links (Span 4 each) --- */}
                {titleLinks.slice(0, 3).map((article, index) => (
                    <Link
                        key={article.id}
                        href={`/goc-suc-khoe/${slug}/${article.slug}`}
                        className={`group desktop:col-span-4 ${
                            index !== 2
                                ? "border-b border-vico-gray-200 desktop:border-none pb-4 desktop:pb-0"
                                : ""
                        }`}
                    >
                        <h4 className="text-body font-semibold! leading-[1.2]! text-vico-gray-900 line-clamp-2">
                            {article.title}
                        </h4>
                    </Link>
                ))}
            </div>

            {/* FOOTER: Xem tất cả (Mobile Only) */}
            <div className="desktop:hidden px-4 pb-4">
                <Link
                    href={`/goc-suc-khoe/${slug}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-vico-gray-100 rounded-lg text-vico-green font-semibold transition-colors"
                >
                    Xem tất cả
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform -translate-0.5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
