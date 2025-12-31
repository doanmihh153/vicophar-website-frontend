/**
 * FEATURED COMMENTS COMPONENT
 * Displays highlighted user comments with "See More" functionality
 *
 * USAGE:
 * ------
 * <FeaturedComments articleId={articleId} />
 */

"use client";

import { useState } from "react";
import { featuredComments } from "@/data/commentsMockdata";
import { DoubleDownIcon } from "@/assets/icons";
import FeaturedCommentItem from "./FeaturedCommentItem";

export default function FeaturedComments({ articleId }) {
    const comments = featuredComments.filter((c) => c.articleId === articleId);
    const [isExpanded, setIsExpanded] = useState(false);

    if (comments.length === 0) {
        return null;
    }

    // Show only first 3 items if not expanded
    const displayedComments = isExpanded ? comments : comments.slice(0, 3);
    const hasMore = comments.length > 3;

    return (
        <div className="bg-white -mx-4 tablet:-mx-6 desktop:mx-0 p-4 tablet:p-6 rounded-none desktop:rounded-2xl">
            <h3 className="text-xl font-bold text-vico-gray-900 mb-4">
                Bình luận nổi bật
            </h3>

            <div className="space-y-6">
                {displayedComments.map((comment) => (
                    <FeaturedCommentItem key={comment.id} comment={comment} />
                ))}
            </div>

            {/* View More Button */}
            {hasMore && !isExpanded && (
                <button
                    onClick={() => setIsExpanded(true)}
                    className="w-full mt-6 flex flex-row items-center justify-center gap-1 text-vico-green transition-colors group"
                >
                    <DoubleDownIcon
                        size={28}
                        className="animate-bounce group-hover:translate-y-1 transition-transform"
                    />
                    <span className="font-semibold text-lg">Xem thêm</span>
                </button>
            )}
        </div>
    );
}
