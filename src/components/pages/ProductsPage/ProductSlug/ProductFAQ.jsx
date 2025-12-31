"use client";

import React, { useState } from "react";
import { PlusIcon, QuestionIcon } from "@/assets/icons";

const faqs = [
    {
        question: "Sản phẩm dùng cho đối tượng nào?",
        answer: "Sản phẩm phù hợp cho người trưởng thành, người có chức năng gan kém, thường xuyên sử dụng rượu bia.",
    },
    {
        question: "Phụ nữ mang thai có dùng được không?",
        answer: "Phụ nữ mang thai và cho con bú nên tham khảo ý kiến bác sĩ trước khi sử dụng.",
    },
    {
        question: "Dùng bao lâu thì có hiệu quả?",
        answer: "Hiệu quả sản phẩm tùy thuộc vào cơ địa. Thông thường nên sử dụng liệu trình 1-3 tháng để đạt kết quả tốt nhất.",
    },
    {
        question: "Sản phẩm có tác dụng phụ không?",
        answer: "Sản phẩm được chiết xuất từ thảo dược thiên nhiên, an toàn và lành tính, ít gây tác dụng phụ.",
    },
    {
        question: "Mua hàng chính hãng ở đâu?",
        answer: "Bạn có thể mua trực tiếp tại website Vicophar hoặc các nhà thuốc phân phối chính hãng trên toàn quốc.",
    },
];

function FAQItem({ item }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="group">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-4 text-left hover:text-green-main transition-colors group/btn"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-3 pr-4 flex-1">
                    <QuestionIcon
                        size={24}
                        className="text-gray-500 shrink-0 opacity-80 transition-opacity"
                    />
                    <span className="font-semibold text-vico-text text-base md:text-xl">
                        {item.question}
                    </span>
                </div>
                <PlusIcon
                    size={20}
                    className={`transition-all duration-300 ease-in-out ${
                        isOpen ? "rotate-45 text-green-main" : "text-gray-400"
                    }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
                }`}
            >
                <p className="text-gray-600 text-base desktop:text-xl leading-relaxed">
                    {item.answer}
                </p>
            </div>
        </div>
    );
}

export default function ProductFAQ() {
    return (
        <section className="product-faq">
            <div className="text-left mb-6">
                <h2 className="text-xl desktop:text-2xl font-bold text-gray-900">
                    Câu hỏi thường gặp
                </h2>
            </div>
            <div className="divide-y divide-gray-100">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} item={faq} />
                ))}
            </div>
        </section>
    );
}
