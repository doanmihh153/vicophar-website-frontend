/**
 * ============================================================================
 * ARTICLE RATING - ĐÁNH GIÁ BÀI VIẾT
 * ============================================================================
 *
 * Component cho phép người dùng đánh giá mức độ hữu ích của bài viết
 * - 2 options: Hữu ích / Chưa hữu ích
 * - Lưu state locally (có thể integrate API sau)
 * - Hiển thị feedback sau khi đánh giá
 *
 * USAGE:
 * ------
 * <ArticleRating articleId={articleId} />
 *
 * ============================================================================
 */

"use client";

import { useState } from "react";
import { HappyIcon, SadIcon } from "@/assets/icons";

export default function ArticleRating({ articleId }) {
    const [rating, setRating] = useState(null); // null, 'helpful', 'not-helpful'

    const handleRating = (value) => {
        setRating(value);
        // TODO: Gửi rating lên API
        console.log(`Article ${articleId} rated:`, value);
    };

    return (
        <div className="bg-vico-green/8 p-4 tablet:p-6 rounded-xl mb-6">
            <h3 className="text-base tablet:text-lg font-bold text-vico-gray-900 mb-3 tablet:mb-4">
                Đánh giá độ hữu ích của bài viết
            </h3>

            <div className="flex flex-col tablet:flex-row gap-3 tablet:gap-4">
                <button
                    onClick={() => handleRating("helpful")}
                    className={`flex-1 flex items-center justify-center py-2 px-4 tablet:py-3 tablet:px-6 rounded-2xl font-semibold transition-all text-sm tablet:text-base border! border-vico-gray-200!  ${
                        rating === "helpful"
                            ? "bg-vico-green text-white border-none!"
                            : " text-vico-gray-700 hover:border-vico-green hover:text-vico-green"
                    }`}
                    disabled={rating !== null}
                >
                    <HappyIcon className="mr-2 w-6 h-6 tablet:w-8 tablet:h-8 -translate-0.5" />
                    Hữu ích
                </button>

                <button
                    onClick={() => handleRating("not-helpful")}
                    className={`flex-1 flex items-center justify-center py-2 px-4 tablet:py-3 tablet:px-6 rounded-2xl font-semibold transition-all text-sm tablet:text-base border! border-vico-gray-200! ${
                        rating === "not-helpful"
                            ? "bg-red-500 text-white border-none!"
                            : "text-vico-gray-700 hover:border-red-500 hover:text-red-500"
                    }`}
                    disabled={rating !== null}
                >
                    <SadIcon className="mr-2 w-6 h-6 tablet:w-8 tablet:h-8 -translate-0.5" />
                    Chưa hữu ích
                </button>
            </div>

            {rating && (
                <p className="text-center text-vico-gray-600 mt-4 tablet:mt-6 text-sm tablet:text-base">
                    Cảm ơn bạn đã đánh giá!
                </p>
            )}
        </div>
    );
}
