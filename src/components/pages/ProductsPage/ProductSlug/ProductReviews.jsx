"use client";

import React, { useState, useMemo } from "react";
import FeedbackCard from "./components/FeedbackCard";
import FeedbackForm from "./components/FeedbackForm";
import { StarIcon, DoubleDownIcon } from "@/assets/icons";

const MOCK_REVIEWS = [
    {
        id: 1,
        user: "Duyen Vu",
        rating: 5,
        date: "01-07-2025 15:30",
        comment:
            "Mới nhận được hàng, shop giao hàng nhanh. Bé uống vào ăn ngon mà nhiều hơn nha. Shop tư vấn nhiệt tình nữa chứ, sẽ ủng hộ shop lần sau nhaaaa shoppp.",
        reply: "Cảm ơn bạn vì sự tin tưởng mà bạn đã đặt vào sản phẩm của shop! Chúc bạn có một ngày tuyệt vời.",
    },
    {
        id: 2,
        user: "Minh Hoang",
        rating: 5,
        date: "02-07-2025 09:15",
        comment:
            "Sản phẩm rất tốt, đóng gói cẩn thận. Mình đã mua lần thứ 2 rồi, rất hài lòng về chất lượng.",
        reply: "Dạ Vicophar cảm ơn anh Minh đã tin dùng sản phẩm ạ. Mong anh sẽ tiếp tục ủng hộ shop nhé!",
    },
    {
        id: 3,
        user: "Thu Ha",
        rating: 4,
        date: "28-06-2025 10:20",
        comment:
            "Giao hàng hơi chậm một chút do bên vận chuyển, nhưng sản phẩm thì oke, giống mô tả. Date xa, tem mác đầy đủ.",
        reply: null,
    },
    {
        id: 4,
        user: "Linh Nguyen",
        rating: 5,
        date: "25-06-2025 14:45",
        comment:
            "Sản phẩm chính hãng, check mã vạch oke. Bé nhà mình trộm vía hợp thuốc, ăn ngủ tốt hơn hẳn.",
        reply: "Vicophar rất vui khi bé hợp sản phẩm ạ. Chúc bé hay ăn chóng lớn nhé!",
    },
    {
        id: 5,
        user: "Tuan Anh",
        rating: 3,
        date: "20-06-2025 11:30",
        comment:
            "Sản phẩm cũng bình thường, chưa thấy hiệu quả rõ rệt lắm chắc phải dùng thêm thời gian nữa.",
        reply: "Dạ hiệu quả sản phẩm còn tùy thuộc vào cơ địa mỗi người ạ. Anh kiên trì sử dụng đúng liệu trình để đạt kết quả tốt nhất nhé!",
    },
    {
        id: 6,
        user: "Mai Anh",
        rating: 5,
        date: "15-06-2025 08:30",
        comment: "Tuyệt vời, shop uy tín!",
        reply: null,
    },
    {
        id: 7,
        user: "Hoang Nam",
        rating: 1,
        date: "10-06-2025 12:00",
        comment:
            "Giao sai hàng, đặt loại này giao loại kia. Shop làm ăn chán quá.",
        reply: "Dạ shop xin lỗi anh Nam rất nhiều về sự cố này ạ. Nhân viên bên em đã liên hệ để đổi trả hàng cho anh ngay lập tức rồi ạ.",
    },
    {
        id: 8,
        user: "Phuong Thao",
        rating: 5,
        date: "05-06-2025 16:20",
        comment:
            "Hàng chuẩn, giá tốt hơn các chỗ khác. Sẽ giới thiệu cho bạn bè.",
        reply: null,
    },
];

export default function ProductReviews() {
    const [filterRating, setFilterRating] = useState(null); // null = All
    const [visibleCount, setVisibleCount] = useState(4);
    const [isFormOpen, setIsFormOpen] = useState(false); // Default show 4

    // 1. Calculate Statistics
    const stats = useMemo(() => {
        const total = MOCK_REVIEWS.length;
        const sum = MOCK_REVIEWS.reduce((acc, r) => acc + r.rating, 0);
        const average = total > 0 ? (sum / total).toFixed(1) : "0.0";

        const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        MOCK_REVIEWS.forEach((r) => {
            if (counts[r.rating] !== undefined) counts[r.rating]++;
        });

        return { total, average, counts };
    }, []);

    // 2. Filter & Slice Data
    const filteredReviews = useMemo(() => {
        if (!filterRating) return MOCK_REVIEWS;
        return MOCK_REVIEWS.filter((r) => r.rating === filterRating);
    }, [filterRating]);

    const displayReviews = filteredReviews.slice(0, visibleCount);
    const hasMore = visibleCount < filteredReviews.length;

    // Helpers
    const handleFilter = (star) => {
        setFilterRating(star);
        setVisibleCount(4); // Reset pagination on filter change
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 5);
    };

    return (
        <section className="product-reviews" id="product-reviews">
            {/* Header */}
            <div className="border-b border-gray-100 pb-4 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-1">
                    Đánh giá sản phẩm{" "}
                    <span className="text-gray-500 text-lg font-normal">
                        ({stats.total} đánh giá)
                    </span>
                </h2>
            </div>

            {/* 1. Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8 border-b border-gray-100 pb-8">
                {/* Left: Score & CTA (4 cols) */}
                <div className="md:col-span-4 flex flex-col items-start justify-center text-left">
                    <div className="w-full h-full rounded-xl flex flex-col items-center justify-center">
                        <div className="text-4xl font-bold text-vico-green mb-2">
                            {stats.average}
                            <span className="text-xl text-gray-400 font-normal ml-1">
                                {" "}
                                trên 5
                            </span>
                        </div>
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <StarIcon
                                    key={s}
                                    size={24}
                                    className={
                                        s <= Math.round(Number(stats.average))
                                            ? "text-vico-yellow"
                                            : "text-gray-200"
                                    }
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="bg-vico-green text-white font-semibold py-2 px-6 rounded-full transition-colors w-full md:w-auto"
                        >
                            Viết đánh giá
                        </button>
                    </div>
                </div>

                {/* Right: Progress Bars (8 cols) */}
                <div className="md:col-span-8 w-full flex flex-col justify-center gap-3">
                    {[5, 4, 3, 2, 1].map((star) => {
                        const count = stats.counts[star];
                        const percent =
                            stats.total > 0
                                ? ((count / stats.total) * 100).toFixed(0)
                                : 0;
                        return (
                            <div
                                key={star}
                                className="flex items-center gap-4 text-base"
                            >
                                {/* Star Icons Label - 5 stars for 5, 4 stars for 4... */}
                                <div className="flex items-center gap-0.5 w-24 shrink-0 justify-end">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            size={20}
                                            className={
                                                i < star
                                                    ? "text-vico-yellow" // Use CSS variable
                                                    : "text-gray-200"
                                            }
                                        />
                                    ))}
                                </div>

                                <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-vico-green rounded-full transition-all duration-500"
                                        style={{ width: `${percent}%` }}
                                    />
                                </div>
                                <span className="text-gray-500 w-10 text-right shrink-0">
                                    {count}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <FeedbackForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                productTitle="Sản phẩm này"
                mode="review"
            />

            {/* 2. Filter Section */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="text-gray-900 font-semibold mr-2">
                    Lọc theo:
                </span>
                <button
                    onClick={() => handleFilter(null)}
                    className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all ${
                        filterRating === null
                            ? "border-vico-green bg-vico-green text-white"
                            : "border-gray-200 bg-white text-gray-600 hover:border-vico-green hover:text-vico-green"
                    }`}
                >
                    Tất cả
                </button>
                {[5, 4, 3, 2, 1].map((star) => (
                    <button
                        key={star}
                        onClick={() => handleFilter(star)}
                        className={`px-4 py-1.5 rounded-full border text-sm md:text-base font-medium transition-all ${
                            filterRating === star
                                ? "border-vico-green bg-vico-green text-white"
                                : "border-gray-200 bg-white text-gray-600 hover:border-vico-green hover:text-vico-green"
                        }`}
                    >
                        {star} Sao
                    </button>
                ))}
            </div>

            {/* 3. Review List */}
            <div className="space-y-2">
                {displayReviews.length > 0 ? (
                    displayReviews.map((review) => (
                        <FeedbackCard
                            key={review.id}
                            review={review}
                            type="review"
                        />
                    ))
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        Chưa có đánh giá nào cho mức này.
                    </div>
                )}
            </div>

            {/* 4. Load More */}
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
                            Xem thêm {filteredReviews.length - visibleCount}{" "}
                            đánh giá
                        </span>
                    </button>
                </div>
            )}
        </section>
    );
}
