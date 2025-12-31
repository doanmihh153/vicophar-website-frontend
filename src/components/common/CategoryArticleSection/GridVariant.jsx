/**
 * GRID VARIANT - CategoryArticleSection
 * Layout 4 columns for related articles
 */

import Link from "next/link";
import Image from "next/image";

export default function GridVariant({
    title,
    articles,
    seeMoreLink,
    className = "",
}) {
    return (
        <section
            className={`category-article-section py-6 tablet:py-8 ${className}`}
        >
            <div className="vico-container">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 tablet:mb-6">
                    <h2 className="text-xl tablet:text-2xl font-bold text-vico-gray-900">
                        {title}
                    </h2>
                    {seeMoreLink && (
                        <Link
                            href={seeMoreLink}
                            className="text-vico-green font-semibold hover:underline flex items-center gap-1"
                        >
                            Xem thêm
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
                    )}
                </div>

                {/* Grid 4 columns */}
                <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-2 tablet:gap-4">
                    {articles.slice(0, 4).map((article) => (
                        <Link
                            key={article.id}
                            href={article.link}
                            className="group flex flex-col h-full bg-white rounded-2xl border border-vico-gray-200 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                />
                                {/* Category Tag Overlay */}
                                {article.category && (
                                    <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold text-vico-gray-700 rounded-md">
                                        {article.category}
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col grow">
                                <h3 className="font-bold text-vico-gray-900 mb-2 line-clamp-2 transition-colors">
                                    {article.title}
                                </h3>

                                <div className="mt-auto pt-2 flex items-center justify-between text-base text-vico-gray-500">
                                    <span>{article.date}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
