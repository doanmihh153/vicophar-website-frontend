import { notFound } from "next/navigation";
import { LEGAL_POLICIES } from "@/data/legal-policies";

export default function PolicyViewer({ slug }) {
    const policy = LEGAL_POLICIES.find((p) => p.slug === slug);

    if (!policy) {
        return (
            <div className="text-center py-10">
                Nội dung đang được cập nhật...
            </div>
        );
    }

    return (
        <article className="prose prose-sm tablet:prose-base max-w-none">
            <h1 className="text-2xl tablet:text-3xl font-bold text-vico-primary mb-6 pb-4 border-b border-vico-gray-100">
                {policy.title}
            </h1>
            <div
                className="product-content"
                dangerouslySetInnerHTML={{ __html: policy.content }}
            />
        </article>
    );
}
