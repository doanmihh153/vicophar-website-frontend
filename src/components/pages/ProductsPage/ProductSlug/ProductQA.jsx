"use client";

import React, { useState, useMemo } from "react";
import FeedbackCard from "./components/FeedbackCard";
import FeedbackForm from "./components/FeedbackForm";
import { QuestionIcon, DoubleDownIcon } from "@/assets/icons";

// Mock Data for Q&A
const MOCK_QA = [
    {
        id: 1,
        user: "Nguyen Van A",
        date: "01-08-2025 10:30",
        rating: 0, // No rating for Q&A
        comment: "Sản phẩm này người tiểu đường dùng được không ạ?",
        reply: "Dạ được ạ, sản phẩm không chứa đường kính nên người tiểu đường dùng tốt ạ.",
    },
    {
        id: 2,
        user: "Tran Thi B",
        date: "02-08-2025 14:15",
        rating: 0,
        comment: "Có ship hỏa tốc nội thành Hà Nội không shop?",
        reply: "Dạ có ạ, anh/chị chọn phương thức vận chuyển Hỏa Tốc khi thanh toán nhé.",
    },
];

export default function ProductQA() {
    const [visibleCount, setVisibleCount] = useState(4);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const displayQA = MOCK_QA.slice(0, visibleCount);
    const hasMore = visibleCount < MOCK_QA.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 5);
    };

    return (
        <section className="product-qa" id="product-qa">
            {/* Header */}
            <div className="border-b border-gray-100 pb-4 mb-6 flex flex-col md:items-start justify-between gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-1 flex items-center gap-2">
                    Hỏi đáp sản phẩm
                    <span className="text-gray-500 text-lg font-normal">
                        ({MOCK_QA.length} câu hỏi)
                    </span>
                </h2>

                <button
                    onClick={() => setIsFormOpen(true)}
                    className="bg-vico-green text-white font-semibold py-2 px-6 rounded-full transition-colors w-full md:w-auto"
                >
                    Gửi bình luận
                </button>
            </div>

            <FeedbackForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                productTitle="Sản phẩm này"
                mode="question"
            />

            {/* Q&A List */}
            <div className="space-y-2">
                {displayQA.length > 0 ? (
                    displayQA.map((qa) => (
                        <FeedbackCard key={qa.id} review={qa} type="question" />
                    ))
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        Chưa có câu hỏi nào.
                    </div>
                )}
            </div>

            {/* Load More */}
            {hasMore && (
                <div className="text-center mt-8 pt-4 border-t border-gray-100 ">
                    <button
                        onClick={handleLoadMore}
                        className="inline-flex items-center gap-2 text-vico-green  font-medium px-6 py-2 rounded-full border border-gray-200 transition-all"
                    >
                        <DoubleDownIcon
                            size={28}
                            className="animate-bounce group-hover:translate-y-1 transition-transform"
                        />
                        <span className="font-semibold text-lg">
                            Xem thêm {MOCK_QA.length - visibleCount} câu hỏi
                        </span>
                    </button>
                </div>
            )}
        </section>
    );
}
