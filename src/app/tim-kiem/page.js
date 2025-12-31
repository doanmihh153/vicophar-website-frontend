import SearchPage from "@/components/pages/SearchPage/SearchPage";
import { Suspense } from "react";

export const metadata = {
    title: "Tìm kiếm - Vicophar Việt Nam",
    description: "Kết quả tìm kiếm sản phẩm và tin tức tại Vicophar Việt Nam",
};

export default async function Page({ searchParams }) {
    const resolvedParams = await searchParams;
    const query = resolvedParams?.q || "";

    return (
        <Suspense
            fallback={
                <div className="vico-container py-10 text-center">
                    Đang tải...
                </div>
            }
        >
            <SearchPage initialQuery={query} />
        </Suspense>
    );
}
