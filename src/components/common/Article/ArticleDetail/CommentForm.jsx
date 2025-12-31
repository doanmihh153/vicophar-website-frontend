/**
 * COMMENT FORM COMPONENT
 * Form for users to leave comments on articles
 *
 * USAGE:
 * ------
 * <CommentForm articleId={articleId} />
 */

"use client";

import { useState } from "react";

export default function CommentForm({ articleId }) {
    const [formData, setFormData] = useState({
        content: "",
        name: "",
        phone: "",
        email: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Send to API
        console.log("Comment submitted:", { articleId, ...formData });

        // Reset form
        setFormData({ content: "", name: "", phone: "", email: "" });
        setSubmitted(true);

        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="bg-white mb-6 -mx-4 tablet:-mx-6 desktop:mx-0 p-4 tablet:p-6 rounded-none desktop:rounded-2xl">
            <h3 className="text-xl font-bold text-vico-gray-900 mb-4">
                Để lại bình luận của bạn
            </h3>

            {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Bình luận của bạn đã được gửi và đang chờ duyệt!
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <textarea
                        className="w-full border border-vico-gray-300 rounded-lg p-3 min-h-[120px] focus:outline-none focus:ring-1 focus:ring-vico-green"
                        placeholder="Nội dung bình luận..."
                        value={formData.content}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                content: e.target.value,
                            })
                        }
                        required
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="w-full border border-vico-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-vico-green"
                        placeholder="Tên của bạn *"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        required
                    />
                </div>

                <div>
                    <input
                        type="tel"
                        className="w-full border border-vico-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-vico-green"
                        placeholder="Số điện thoại *"
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                    />
                </div>

                <div>
                    <input
                        type="email"
                        className="w-full border border-vico-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-vico-green"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-vico-green text-white py-3 px-6 rounded-2xl font-semibold mt-4 transition-colors"
                >
                    Gửi bình luận
                </button>
            </form>
        </div>
    );
}
