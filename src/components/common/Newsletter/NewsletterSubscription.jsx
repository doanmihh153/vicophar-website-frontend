/**
 * ============================================================================
 * NEWSLETTER SUBSCRIPTION - REUSABLE COMPONENT
 * ============================================================================
 *
 * Component form đăng ký nhận tin tức qua email - Có thể tái sử dụng
 *
 * FEATURES:
 * ---------
 * ✅ Validation khi submit
 * ✅ Loading state
 * ✅ Success/error notifications (cùng 1 vị trí, đổi màu)
 * ✅ Responsive design
 *
 * ============================================================================
 */

"use client";

import React, { useState } from "react";

export default function NewsletterSubscription({
    title = "Theo dõi và cập nhật tin tức mới nhất",
    description = (
        <>
            Chúng tôi luôn nỗ lực mang đến các sản phẩm{" "}
            <span className="font-bold">
                an toàn - hiệu quả - nguồn gốc rõ ràng
            </span>
            .
            <br />
            Để mỗi khách hàng đều an tâm và hài lòng khi sử dụng những sản phẩm
            của Vicophar.
        </>
    ),
    className = "",
}) {
    // ========================================
    // STATE MANAGEMENT
    // ========================================

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // type: "error" | "success" | ""
    const [message, setMessage] = useState({ type: "", text: "" });

    // ========================================
    // VALIDATION
    // ========================================

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // ========================================
    // HANDLERS
    // ========================================

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // Clear message khi user bắt đầu nhập lại
        if (message.text) {
            setMessage({ type: "", text: "" });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ type: "", text: "" });

        // Validation khi submit
        if (!email.trim()) {
            setMessage({
                type: "error",
                text: "Vui lòng nhập địa chỉ email",
            });
            return;
        }

        if (!isValidEmail(email)) {
            setMessage({
                type: "error",
                text: "Email không hợp lệ (ví dụ: example@gmail.com)",
            });
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email.trim().toLowerCase(),
                    consent: true,
                    source: "homepage_newsletter",
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setMessage({
                    type: "success",
                    text:
                        data.message ||
                        "Đăng ký thành công! Vui lòng kiểm tra email.",
                });
                setEmail("");
            } else {
                setMessage({
                    type: "error",
                    text: data.message || "Đã có lỗi xảy ra. Vui lòng thử lại.",
                });
            }
        } catch (error) {
            console.error("Newsletter subscription error:", error);
            setMessage({
                type: "error",
                text: "Không thể kết nối đến máy chủ. Vui lòng thử lại sau.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    // ========================================
    // RENDER
    // ========================================

    // Dynamic styles based on message type
    const getMessageStyles = () => {
        if (message.type === "success") {
            return "text-green-300"; // Màu xanh lá khi thành công
        }
        if (message.type === "error") {
            return "text-yellow-200"; // Màu vàng khi lỗi
        }
        return "";
    };

    const getIcon = () => {
        if (message.type === "success") {
            // Checkmark icon
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 shrink-0"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            );
        }
        // Warning icon
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 shrink-0"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
            </svg>
        );
    };

    return (
        <section className={className}>
            <div className="vico-container">
                <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-vico-green to-vico-green-dark px-4 py-8 md:px-16 md:py-16">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        {/* Title */}
                        <h2 className="text-h2 font-bold text-white mb-4 uppercase">
                            {title}
                        </h2>

                        {/* Description */}
                        <p className="max-md:text-base text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                            {description}
                        </p>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="max-w-3xl mx-auto"
                            noValidate
                        >
                            <div className="relative md:bg-white md:rounded-full md:p-2">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-2 items-center">
                                    {/* Email Input */}
                                    <div className="md:col-span-9 h-full">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            placeholder="Nhập email của bạn"
                                            disabled={isLoading}
                                            className="w-full h-[54px] md:h-full border-0! rounded-full px-6 outline-none! focus:outline-none! focus:ring-0! focus:border-0! bg-white md:bg-transparent max-md:text-base! text-primary placeholder:text-gray-400 placeholder:text-lg text-xl! font-medium placeholder:leading-7! shadow-none!"
                                            aria-label="Email đăng ký nhận tin"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="md:col-span-3">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full py-2 md:py-3 bg-vico-green text-white font-bold rounded-full tracking-wide active:bg-vico-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-base md:text-lg"
                                            aria-label="Đăng ký nhận tin"
                                        >
                                            {isLoading
                                                ? "Đang xử lý..."
                                                : "Theo dõi"}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Message - Error hoặc Success (cùng vị trí, đổi màu) */}
                            {message.text && (
                                <div
                                    className={`mt-4 flex items-center justify-center gap-2 text-base font-medium ${getMessageStyles()}`}
                                    role="alert"
                                >
                                    {getIcon()}
                                    {message.text}
                                </div>
                            )}
                        </form>

                        {/* Privacy Note */}
                        <p className="mt-6 max-md:text-sm text-base text-white/70">
                            (Các thông tin cung cấp đều được bảo mật)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
