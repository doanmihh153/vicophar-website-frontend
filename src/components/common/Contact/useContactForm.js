/**
 * ============================================================================
 * USE CONTACT FORM HOOK - SHARED
 * ============================================================================
 *
 * Centralized hook for contact form state and submission logic
 * Used by both ContactPage and HomePage
 *
 * FEATURES:
 * - Form state management
 * - Comprehensive validation (phone, email, length)
 * - Honeypot spam prevention
 * - API submission (ready for integration)
 * - Loading and error states
 *
 * ============================================================================
 */

"use client";

import { useState } from "react";

export default function useContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        honeypot: "", // Spam prevention field (invisible to users)
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });
    const [fieldErrors, setFieldErrors] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear field error when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    // handleBlur - không validate onBlur, chỉ validate khi submit
    // Giữ function này để không break code cũ đang gọi onBlur
    const handleBlur = () => {
        // Không làm gì - validation sẽ chạy khi submit
    };

    // Validate Vietnamese phone number
    const isValidVietnamesePhone = (phone) => {
        // Remove spaces and special characters
        const cleanPhone = phone.replace(/[\s\-().]/g, "");

        // Vietnamese phone patterns:
        // - Mobile: 10 digits starting with 03, 05, 07, 08, 09
        // - Landline: 10 digits starting with 02
        const mobileRegex = /^(03|05|07|08|09)[0-9]{8}$/;
        const landlineRegex = /^(02)[0-9]{8,9}$/;

        return mobileRegex.test(cleanPhone) || landlineRegex.test(cleanPhone);
    };

    // Validate email format
    const isValidEmail = (email) => {
        if (!email) return true; // Email is optional
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Check for spam patterns
    const containsSpam = (text) => {
        const spamPatterns = [
            /http[s]?:\/\//i, // URLs
            /www\./i, // WWW links
            /<script/i, // Script tags
            /<iframe/i, // Iframe injection
            /viagra|casino|lottery|prize/i, // Common spam words
        ];

        return spamPatterns.some((pattern) => pattern.test(text));
    };

    // Validate form - hiển thị lỗi từng field khi submit
    const validateForm = () => {
        // HONEYPOT CHECK - if filled, it's a bot
        if (formData.honeypot) {
            setSubmitMessage({
                type: "error",
                text: "Yêu cầu không hợp lệ. Vui lòng thử lại.",
            });
            return false;
        }

        // Reset field errors
        const errors = {
            name: "",
            phone: "",
            email: "",
            message: "",
        };

        let hasError = false;

        // Name validation
        if (!formData.name.trim()) {
            errors.name = "Vui lòng nhập tên của bạn";
            hasError = true;
        } else if (formData.name.trim().length < 2) {
            errors.name = "Tên phải có ít nhất 2 ký tự";
            hasError = true;
        } else if (formData.name.trim().length > 100) {
            errors.name = "Tên không được vượt quá 100 ký tự";
            hasError = true;
        } else if (containsSpam(formData.name)) {
            errors.name = "Tên chứa thông tin không hợp lệ";
            hasError = true;
        }

        // Phone validation
        if (!formData.phone.trim()) {
            errors.phone = "Vui lòng nhập số điện thoại";
            hasError = true;
        } else if (!isValidVietnamesePhone(formData.phone)) {
            errors.phone = "Số điện thoại không hợp lệ (VD: 0912345678)";
            hasError = true;
        }

        // Email validation (if provided)
        if (formData.email && !isValidEmail(formData.email)) {
            errors.email = "Địa chỉ email không hợp lệ";
            hasError = true;
        }

        // Message validation (if provided)
        if (formData.message && formData.message.trim().length > 1000) {
            errors.message = "Nội dung không được vượt quá 1000 ký tự";
            hasError = true;
        } else if (formData.message && containsSpam(formData.message)) {
            errors.message = "Nội dung chứa thông tin không được phép";
            hasError = true;
        }

        // Set field errors
        setFieldErrors(errors);

        if (hasError) {
            setSubmitMessage({
                type: "error",
                text: "Vui lòng kiểm tra lại các thông tin đã nhập",
            });
            return false;
        }

        return true;
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitMessage({ type: "", text: "" });

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            // TODO: Replace with actual API call
            console.log("Contact form submitted:", {
                name: formData.name.trim(),
                phone: formData.phone.replace(/[\s\-().]/g, ""),
                email: formData.email.trim(),
                message: formData.message.trim(),
            });

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setSubmitMessage({
                type: "success",
                text: "Gửi thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.",
            });

            // Reset form
            setFormData({
                name: "",
                phone: "",
                email: "",
                message: "",
                honeypot: "",
            });
        } catch (error) {
            console.error("Contact form error:", error);
            setSubmitMessage({
                type: "error",
                text: "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        isLoading,
        submitMessage,
        fieldErrors,
        handleInputChange,
        handleBlur,
        handleSubmit,
    };
}
