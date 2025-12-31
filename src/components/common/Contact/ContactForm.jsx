/**
 * ============================================================================
 * SHARED CONTACT FORM COMPONENT
 * ============================================================================
 *
 * Reusable contact form used by both ContactPage and HomePage
 *
 * VARIANTS:
 * - "default": ContactPage style (no wrapper bg, centered header)
 * - "homepage": HomePage style (white wrapper with shadow, left-aligned header)
 *
 * ============================================================================
 */

"use client";

import React from "react";
import useContactForm from "./useContactForm";

export default function ContactForm({
    variant = "default",
    idPrefix = "contact",
}) {
    const {
        formData,
        isLoading,
        submitMessage,
        fieldErrors,
        handleInputChange,
        handleBlur,
        handleSubmit,
    } = useContactForm();

    // Variant-based styling
    const isHomepage = variant === "homepage";

    const wrapperClass = isHomepage
        ? "bg-white rounded-xl tablet:rounded-2xl p-5 tablet:p-6 desktop:p-8 shadow-lg h-full"
        : "";

    const headerTitleClass = isHomepage
        ? "text-h2 font-bold text-vico-green"
        : "text-2xl md:text-3xl font-bold text-vico-green text-center";

    const headerDescClass = isHomepage
        ? "text-body font-normal text-vico-text"
        : "text-base md:text-xl text-gray-600 text-center mt-2";

    const inputClass = isHomepage
        ? "w-full px-4 py-3 tablet:px-5 tablet:py-3 border rounded-lg outline-none! focus:outline-none! focus:border-vico-green! bg-white text-primary text-input font-medium placeholder:text-gray-400 placeholder:text-body shadow-none! transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        : "w-full px-4 py-3 tablet:px-5 tablet:py-3 border rounded-lg outline-none focus:border-vico-green bg-white text-gray-900 text-base md:text-xl font-medium placeholder:text-gray-400 placeholder:text-base md:placeholder:text-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed";

    const textareaClass = isHomepage
        ? "w-full px-4 py-3 tablet:px-5 tablet:py-3 border rounded-lg outline-none! focus:outline-none! focus:border-vico-green! bg-white text-primary text-[1rem] tablet:text-[1.25rem] desktop:text-[1.25rem] font-medium placeholder:text-gray-400 placeholder:text-[1rem] tablet:placeholder:text-[1rem] desktop:placeholder:text-[1.25rem] shadow-none! transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
        : "w-full px-4 py-3 tablet:px-5 tablet:py-3 border rounded-lg outline-none focus:border-vico-green bg-white text-gray-900 text-base md:text-xl font-medium placeholder:text-gray-400 placeholder:text-base md:placeholder:text-xl transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed";

    const buttonClass = isHomepage
        ? "w-full bg-vico-green text-white text-button font-bold py-3.5 tablet:py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        : "w-full bg-vico-green text-white text-base md:text-xl font-bold py-3.5 tablet:py-4 rounded-lg hover:bg-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const privacyClass = isHomepage
        ? "text-base text-vico-gray-500 text-center mt-2"
        : "text-sm text-gray-500 text-center";

    const messageClass = isHomepage
        ? "p-3 rounded-lg text-sm tablet:text-base text-center"
        : "p-3 rounded-lg text-base md:text-xl text-center";

    const borderClass = isHomepage ? "border-vico-gray-300" : "border-gray-300";

    const headerTitle = isHomepage ? "Tư vấn sức khỏe" : "TƯ VẤN SỨC KHỎE";
    const headerDesc = isHomepage
        ? "Liên hệ ngay để được tư vấn miễn phí từ đội ngũ dược sĩ chuyên nghiệp của Vicophar"
        : "Chúng tôi luôn sẵn sàng tư vấn các vấn đề sức khỏe mà bạn cần. Hãy để lại lời nhắn, chúng tôi sẽ phản hồi ngay!";

    return (
        <article
            className={wrapperClass}
            itemScope
            itemType="https://schema.org/ContactPoint"
        >
            {/* Form Header */}
            <header className="mb-4 tablet:mb-6">
                <h2 className={headerTitleClass} itemProp="name">
                    {headerTitle}
                </h2>
                <p className={headerDescClass} itemProp="description">
                    {headerDesc}
                </p>
            </header>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="space-y-3 tablet:space-y-4"
                aria-label="Form tư vấn sức khỏe"
            >
                {/* Name Input */}
                <div>
                    <label htmlFor={`${idPrefix}-name`} className="sr-only">
                        Tên của bạn
                    </label>
                    <input
                        id={`${idPrefix}-name`}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("name")}
                        placeholder="Tên của bạn"
                        required
                        disabled={isLoading}
                        autoComplete="name"
                        className={`${inputClass} ${
                            fieldErrors.name ? "border-red-500" : borderClass
                        }`}
                        aria-required="true"
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={
                            fieldErrors.name
                                ? `${idPrefix}-name-error`
                                : undefined
                        }
                    />
                    {fieldErrors.name && (
                        <p
                            id={`${idPrefix}-name-error`}
                            className="mt-1 text-sm text-red-600"
                        >
                            {fieldErrors.name}
                        </p>
                    )}
                </div>

                {/* Phone Input */}
                <div>
                    <label htmlFor={`${idPrefix}-phone`} className="sr-only">
                        Số điện thoại
                    </label>
                    <input
                        id={`${idPrefix}-phone`}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("phone")}
                        placeholder="Số điện thoại"
                        required
                        disabled={isLoading}
                        autoComplete="tel"
                        className={`${inputClass} ${
                            fieldErrors.phone ? "border-red-500" : borderClass
                        }`}
                        aria-required="true"
                        aria-invalid={!!fieldErrors.phone}
                        aria-describedby={
                            fieldErrors.phone
                                ? `${idPrefix}-phone-error`
                                : undefined
                        }
                    />
                    {fieldErrors.phone && (
                        <p
                            id={`${idPrefix}-phone-error`}
                            className="mt-1 text-sm text-red-600"
                        >
                            {fieldErrors.phone}
                        </p>
                    )}
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor={`${idPrefix}-email`} className="sr-only">
                        Email (Tuỳ chọn)
                    </label>
                    <input
                        id={`${idPrefix}-email`}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("email")}
                        placeholder="Email (Tuỳ chọn)"
                        disabled={isLoading}
                        autoComplete="email"
                        className={`${inputClass} ${
                            fieldErrors.email ? "border-red-500" : borderClass
                        }`}
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={
                            fieldErrors.email
                                ? `${idPrefix}-email-error`
                                : undefined
                        }
                    />
                    {fieldErrors.email && (
                        <p
                            id={`${idPrefix}-email-error`}
                            className="mt-1 text-sm text-red-600"
                        >
                            {fieldErrors.email}
                        </p>
                    )}
                </div>

                {/* Message Textarea */}
                <div>
                    <label htmlFor={`${idPrefix}-message`} className="sr-only">
                        Lời nhắn của bạn
                    </label>
                    <textarea
                        id={`${idPrefix}-message`}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("message")}
                        placeholder="Bạn đang gặp vấn đề gì? Hãy cho Vicophar Việt Nam biết nhé! Chúng tôi sẵn sàng giải đáp thắc mắc của bạn."
                        rows={4}
                        disabled={isLoading}
                        className={`${textareaClass} ${
                            fieldErrors.message ? "border-red-500" : borderClass
                        }`}
                        aria-invalid={!!fieldErrors.message}
                        aria-describedby={
                            fieldErrors.message
                                ? `${idPrefix}-message-error`
                                : undefined
                        }
                    />
                    {fieldErrors.message && (
                        <p
                            id={`${idPrefix}-message-error`}
                            className="mt-1 text-sm text-red-600"
                        >
                            {fieldErrors.message}
                        </p>
                    )}
                </div>

                {/* Honeypot field - invisible to users, catches bots */}
                <div className="hidden" aria-hidden="true">
                    <label htmlFor={`${idPrefix}-website`}>Website</label>
                    <input
                        id={`${idPrefix}-website`}
                        type="text"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleInputChange}
                        tabIndex="-1"
                        autoComplete="off"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={buttonClass}
                    aria-label="Gửi form tư vấn sức khỏe"
                >
                    {isLoading ? "Đang gửi..." : "Tư vấn ngay"}
                </button>

                {/* Privacy Note */}
                <p className={privacyClass}>
                    (Các thông tin cung cấp đều được bảo mật)
                </p>

                {/* Message Display */}
                {submitMessage.text && (
                    <div
                        className={`${messageClass} ${
                            submitMessage.type === "success"
                                ? "bg-green-50 text-green-700"
                                : "bg-red-50 text-red-700"
                        }`}
                        role="alert"
                        aria-live="polite"
                    >
                        {submitMessage.text}
                    </div>
                )}
            </form>
        </article>
    );
}
