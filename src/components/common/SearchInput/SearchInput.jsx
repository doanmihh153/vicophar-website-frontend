"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";

export default function SearchInput({
    placeholder = "Tìm kiếm...",
    className = "",
}) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // 1. Init state từ URL (Sync URL -> State)
    // Để khi reload trang, input vẫn giữ giá trị
    const initialQuery = searchParams.get("q") || "";
    const [keyword, setKeyword] = useState(initialQuery);

    // 2. Debounce keyword (State -> Debounced State)
    // Delay 500ms để tránh search liên tục
    const debouncedKeyword = useDebounce(keyword, 500);

    // 3. Effect handle search logic
    useEffect(() => {
        // Chuẩn hoá keyword: trim khoảng trắng thừa, lowercase
        const normalizedKeyword = debouncedKeyword.trim().toLowerCase();
        const currentQuery = (searchParams.get("q") || "").trim().toLowerCase();

        // Check 1: Nếu keyword không thay đổi so với URL hiện tại -> Bỏ qua
        if (normalizedKeyword === currentQuery) return;

        // Check 2: Chỉ search khi keyword hợp lệ (có nội dung) hoặc user xoá hết (về rỗng)
        // Nếu muốn chặn search rỗng hoàn toàn thì thêm điều kiện check length > 0
        const params = new URLSearchParams(searchParams.toString());

        if (normalizedKeyword) {
            params.set("q", normalizedKeyword);
        } else {
            params.delete("q");
        }

        // 4. Update URL (Sync State -> URL)
        // Dùng replace nếu không muốn lưu history quá nhiều, hoặc push để back được
        router.push(`/tim-kiem?${params.toString()}`);
    }, [debouncedKeyword, router, searchParams]);

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <div className={`relative ${className}`}>
            <input
                type="text"
                value={keyword}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-vico-green focus:ring-1 focus:ring-vico-green transition-all"
            />
            {/* UI hiển thị trạng thái normalization (theo yêu cầu) */}
            {keyword !== debouncedKeyword && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    Typing...
                </span>
            )}
        </div>
    );
}
