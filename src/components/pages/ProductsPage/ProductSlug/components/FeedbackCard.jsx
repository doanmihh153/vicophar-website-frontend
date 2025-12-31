import React from "react";
import { UserIcon, StarIcon } from "@/assets/icons";

/**
 * ============================================================================
 * REVIEW CARD COMPONENT
 * ============================================================================
 *
 * Hiển thị chi tiết 1 đánh giá của khách hàng.
 * Bao gồm: Avatar, Tên, Số sao, Ngày, Nội dung, Phản hồi của shop (nếu có).
 */
export default function FeedbackCard({ review, type = "review" }) {
    return (
        <div className="py-6! border-b border-gray-100 last:border-0 last:pb-0">
            <div className="grid grid-cols-[auto_1fr] gap-4">
                {/* Column 1: Avatar */}
                <div className="w-12 h-12 rounded-full bg-vico-green/10 flex items-center justify-center text-vico-green shrink-0">
                    <UserIcon size={24} />
                </div>

                {/* Column 2: Content */}
                <div className="flex flex-col gap-2">
                    {/* Header: Name & Date */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="font-semibold text-gray-900 text-base md:text-xl">
                            {review.user}
                        </h4>
                        <span className="text-sm text-gray-400">
                            {review.date}
                        </span>
                    </div>

                    {/* Rating (Only for Reviews) */}
                    {type === "review" && (
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <StarIcon
                                    key={star}
                                    size={16}
                                    className={
                                        star <= review.rating
                                            ? "text-vico-yellow"
                                            : "text-gray-200"
                                    }
                                />
                            ))}
                        </div>
                    )}

                    {/* Comment Body */}
                    <p className="text-gray-700 text-base md:text-xl leading-relaxed">
                        {review.comment}
                    </p>

                    {/* Seller Response (Conditional) */}
                    {review.reply && (
                        <div className="bg-gray-50 rounded-lg p-4 mt-2">
                            <div className="font-semibold text-gray-900 text-base md:text-xl mb-1">
                                Phản hồi từ Vicophar Việt Nam
                            </div>
                            <p className="text-gray-600 text-base md:text-xl leading-relaxed">
                                {review.reply}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
