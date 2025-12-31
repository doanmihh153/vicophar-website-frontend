"use client";

import React, { useState } from "react";

export default function LegalForm({
    title,
    description,
    fields,
    onSubmit,
    submitLabel = "Gửi thông tin",
}) {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    const validate = () => {
        const newErrors = {};
        fields.forEach((field) => {
            if (field.required && !formData[field.name]) {
                newErrors[field.name] = "Vui lòng nhập thông tin này";
            }
            if (field.type === "email" && formData[field.name]) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData[field.name])) {
                    newErrors[field.name] = "Email không hợp lệ";
                }
            }
            if (field.type === "tel" && formData[field.name]) {
                const phoneRegex = /^[0-9]{10,11}$/;
                if (!phoneRegex.test(formData[field.name])) {
                    newErrors[field.name] = "Số điện thoại không hợp lệ";
                }
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <article className="max-w-3xl mx-auto">
            {/* Form Header matching ContactForm header style */}
            <header className="mb-4 tablet:mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-vico-green text-center">
                    {title}
                </h2>
                {description && (
                    <p className="text-base md:text-xl text-gray-600 text-center mt-2">
                        {description}
                    </p>
                )}
            </header>

            <form
                onSubmit={handleSubmit}
                className="space-y-3 tablet:space-y-4"
            >
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3 tablet:gap-4">
                    {fields.map((field) => (
                        <div
                            key={field.name}
                            className={`${
                                field.fullWidth ? "tablet:col-span-2" : ""
                            }`}
                        >
                            <label htmlFor={field.name} className="sr-only">
                                {field.label}
                            </label>

                            {field.type === "textarea" ? (
                                <textarea
                                    id={field.name}
                                    name={field.name}
                                    rows={field.rows || 4}
                                    className={`w-full px-4 py-3 tablet:px-5 tablet:py-3 border rounded-lg outline-none focus:border-vico-green bg-white text-gray-900 text-base md:text-xl font-medium placeholder:text-gray-400 placeholder:text-base md:placeholder:text-xl transition-all resize-none ${
                                        errors[field.name]
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    }`}
                                    placeholder={
                                        field.placeholder || field.label
                                    }
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                />
                            ) : (
                                <input
                                    type={field.type || "text"}
                                    id={field.name}
                                    name={field.name}
                                    className={`w-full px-4 py-3 tablet:px-5 tablet:py-3 border rounded-lg outline-none focus:border-vico-green bg-white text-gray-900 text-base md:text-xl font-medium placeholder:text-gray-400 placeholder:text-base md:placeholder:text-xl transition-all ${
                                        errors[field.name]
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    }`}
                                    placeholder={
                                        field.placeholder || field.label
                                    }
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                />
                            )}

                            {errors[field.name] && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors[field.name]}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full bg-vico-green text-white text-base md:text-xl font-bold py-3.5 tablet:py-4 rounded-full"
                    >
                        {submitLabel}
                    </button>
                </div>
            </form>
        </article>
    );
}
