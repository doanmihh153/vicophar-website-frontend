"use client";

import LegalForm from "@/components/legal/LegalForm";
import LegalPage from "@/components/legal/LegalPage";

export default function PartnershipPage() {
    const handleSubmit = (data) => {
        console.log("Partnership Data:", data);
        alert("Yêu cầu của bạn đã được gửi! Chúng tôi sẽ liên hệ sớm nhất.");
    };

    const fields = [
        {
            name: "company",
            label: "Tên công ty/Tổ chức",
            type: "text",
            required: true,
            fullWidth: true,
        },
        {
            name: "representative",
            label: "Người đại diện",
            type: "text",
            required: true,
            fullWidth: true,
        },
        { name: "phone", label: "Số điện thoại", type: "tel", required: true },
        {
            name: "email",
            label: "Email liên hệ",
            type: "email",
            required: true,
        },
        {
            name: "role",
            label: "Chức vụ",
            type: "text",
            required: false,
            fullWidth: true,
        },
        {
            name: "proposal",
            label: "Nội dung hợp tác",
            type: "textarea",
            rows: 6,
            placeholder: "Mô tả ngắn gọn về đề xuất hợp tác của bạn...",
            required: true,
            fullWidth: true,
        },
    ];

    return (
        <LegalPage>
            <LegalForm
                title="Yêu cầu hợp tác"
                description="Vicophar luôn chào đón các cơ hội hợp tác cùng phát triển. Hãy để lại thông tin, chúng tôi sẽ liên hệ lại ngay."
                fields={fields}
                onSubmit={handleSubmit}
                submitLabel="Gửi yêu cầu"
            />
        </LegalPage>
    );
}
