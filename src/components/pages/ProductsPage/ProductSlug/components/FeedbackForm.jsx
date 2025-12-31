"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { StarIcon, CloseIcon } from "@/assets/icons";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";

/**
 * ============================================================================
 * PRODUCT REVIEW FORM MODAL
 * ============================================================================
 *
 * Modal form cho phép người dùng viết đánh giá sản phẩm.
 * Bao gồm:
 * - Chọn số sao (1-5)
 * - Nhập Họ tên, Số điện thoại (Validate regex)
 * - Nhập Nội dung đánh giá
 * - Xử lý Submit (mô phỏng API)
 */
export default function FeedbackForm({
    isOpen,
    onClose,
    productTitle,
    mode = "review", // 'review' | 'question'
}) {
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        rating: 0,
        comment: "",
    });

    const [errors, setErrors] = useState({});

    const isQuestion = mode === "question";
    const title = isQuestion ? "Đặt câu hỏi" : "Viết đánh giá";
    const submitText = isQuestion ? "Gửi câu hỏi" : "Gửi đánh giá";

    // ... (Lifecycle Effects remain same) ...

    // ========================================
    // LIFECYCLE & ANIMATION
    // ========================================
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useBodyScrollLock(isOpen || isVisible);

    // ========================================
    // HANDLERS
    // ========================================
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleRating = (rating) => {
        setFormData((prev) => ({ ...prev, rating }));
        if (errors.rating) {
            setErrors((prev) => ({ ...prev, rating: "" }));
        }
    };

    const validate = () => {
        const newErrors = {};
        const phoneRegex = /^[0-9]{10}$/;

        if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ tên";
        if (!formData.phone.trim()) {
            newErrors.phone = "Vui lòng nhập số điện thoại";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Số điện thoại không hợp lệ (10 số)";
        }

        // Only validate rating if in review mode
        if (!isQuestion && formData.rating === 0) {
            newErrors.rating = "Vui lòng chọn số sao";
        }

        if (!formData.comment.trim())
            newErrors.comment = isQuestion
                ? "Vui lòng nhập câu hỏi"
                : "Vui lòng nhập nội dung đánh giá";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API Call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const successMsg = isQuestion
            ? "Đã gửi câu hỏi! Chúng tôi sẽ phản hồi sớm nhất."
            : "Cảm ơn bạn đã đánh giá! Chúng tôi sẽ duyệt sớm nhất.";
        alert(successMsg);

        setIsSubmitting(false);
        setFormData({ name: "", phone: "", rating: 0, comment: "" });
        onClose();
    };

    // ========================================
    // RENDER
    // ========================================
    if (!mounted) return null;
    if (!isOpen && !isVisible) return null;

    return createPortal(
        <div
            className={`fixed inset-0 z-9999 flex items-center justify-center p-0 md:p-4 transition-all duration-300 ${
                isOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
            }`}
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`}
                onClick={onClose}
            />

            {/* Modal Container */}
            <div
                className={`relative w-full h-full md:h-auto max-w-2xl bg-white rounded-none md:rounded-2xl shadow-xl transform transition-all duration-300 ease-out flex flex-col ${
                    isOpen
                        ? "scale-100 translate-y-0"
                        : "scale-95 translate-y-4"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Đóng biểu mẫu"
                    >
                        <CloseIcon size={24} />
                    </button>
                </div>

                {/* Form Body */}
                <div className="p-6 overflow-y-auto flex-1 min-h-0">
                    <p className="text-gray-600 text-sm mb-6">
                        {isQuestion
                            ? "Bạn có thắc mắc gì về sản phẩm này? Đặt câu hỏi để chúng tôi giải đáp ngay nhé!"
                            : `Chia sẻ trải nghiệm của bạn về sản phẩm `}
                        {!isQuestion && (
                            <strong className="text-gray-900">
                                {productTitle}
                            </strong>
                        )}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Rating Input (Only for Review) */}
                        {!isQuestion && (
                            <fieldset className="flex flex-col items-center gap-2 mb-2 border-none p-0">
                                <legend className="text-base font-semibold text-gray-700 mb-2">
                                    Bạn chấm sản phẩm này bao nhiêu sao?
                                </legend>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => handleRating(star)}
                                            className="transition-transform hover:scale-110 focus:outline-none"
                                            aria-label={`Chấm ${star} sao`}
                                        >
                                            <StarIcon
                                                size={32}
                                                className={
                                                    star <= formData.rating
                                                        ? "text-vico-yellow"
                                                        : "text-gray-200"
                                                }
                                            />
                                        </button>
                                    ))}
                                </div>
                                {errors.rating && (
                                    <span className="text-red-500 text-xs">
                                        {errors.rating}
                                    </span>
                                )}
                            </fieldset>
                        )}

                        {/* Name & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label
                                    htmlFor="review-name"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Họ và tên{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="review-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nhập họ tên của bạn"
                                    className={`w-full px-4 py-3 rounded-xl border ${
                                        errors.name
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-gray-200 focus:border-vico-green"
                                    } outline-none transition-colors text-base`}
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-xs">
                                        {errors.name}
                                    </span>
                                )}
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="review-phone"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Số điện thoại{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="review-phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Nhập số điện thoại"
                                    className={`w-full px-4 py-3 rounded-xl border ${
                                        errors.phone
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-gray-200 focus:border-vico-green"
                                    } outline-none transition-colors text-base`}
                                />
                                {errors.phone && (
                                    <span className="text-red-500 text-xs">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Comment */}
                        <div className="space-y-1">
                            <label
                                htmlFor="review-comment"
                                className="text-sm font-medium text-gray-700"
                            >
                                {isQuestion
                                    ? "Nội dung câu hỏi"
                                    : "Nội dung đánh giá"}{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="review-comment"
                                name="comment"
                                rows={4}
                                value={formData.comment}
                                onChange={handleChange}
                                placeholder={
                                    isQuestion
                                        ? "Nhập câu hỏi của bạn..."
                                        : "Hãy chia sẻ cảm nhận của bạn về sản phẩm..."
                                }
                                className={`w-full px-4 py-3 rounded-xl border ${
                                    errors.comment
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-gray-200 focus:border-vico-green"
                                } outline-none transition-colors text-base resize-none`}
                            />
                            {errors.comment && (
                                <span className="text-red-500 text-xs">
                                    {errors.comment}
                                </span>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3.5 rounded-full font-bold text-white transition-all bg-vico-green ${
                                isSubmitting ? "opacity-70 cursor-wait" : ""
                            }`}
                        >
                            {isSubmitting ? "Đang gửi..." : submitText}
                        </button>
                    </form>
                </div>
            </div>
        </div>,
        document.body
    );
}
