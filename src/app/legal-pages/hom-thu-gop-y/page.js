"use client";

import LegalForm from "@/components/legal/LegalForm";
import LegalPage from "@/components/legal/LegalPage";

export default function FeedbackPage() {
    const handleSubmit = (data) => {
        console.log("Feedback Data:", data);
        alert("Cảm ơn bạn đã đóng góp ý kiến! Chúng tôi sẽ ghi nhận.");
    };

    const fields = [
        {
            name: "name",
            label: "Họ và tên",
            type: "text",
            required: true,
            fullWidth: true,
        },
        { name: "phone", label: "Số điện thoại", type: "tel", required: false },
        { name: "email", label: "Email", type: "email", required: true },
        {
            name: "content",
            label: "Nội dung góp ý",
            type: "textarea",
            rows: 6,
            placeholder:
                "Hãy chia sẻ ý kiến của bạn để giúp chúng tôi cải thiện...",
            required: true,
            fullWidth: true,
        },
    ];

    return (
        <LegalPage>
            <LegalForm
                title="Hộp thư góp ý"
                description="Chúng tôi luôn trân trọng mọi ý kiến đóng góp của quý khách giúp nâng cao chất lượng dịch vụ."
                fields={fields}
                onSubmit={handleSubmit}
                submitLabel="Gửi góp ý"
            />
        </LegalPage>
    );
}
