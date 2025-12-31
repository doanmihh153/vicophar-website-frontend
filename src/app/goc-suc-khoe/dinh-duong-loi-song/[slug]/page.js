import { notFound } from "next/navigation";
import SlugUI from "@/components/pages/HealthCornerPage/ViewMoreHealthList/SlugUI";
import { healthArticles } from "@/data/healthCorner";

export default async function ArticlePage({ params }) {
    // Next.js 15: params is a Promise, must await
    const { slug } = await params;

    // Tìm article dựa trên slug từ params
    const article = healthArticles.find((a) => a.slug === slug);

    // Nếu không tìm thấy article → 404
    if (!article) {
        notFound();
    }

    // Load JSON content dựa trên article.contentFile
    let content = null;
    if (article.contentFile) {
        try {
            // Dynamic import JSON file
            content = await import(`@/data/articles/${article.contentFile}`);
        } catch (error) {
            console.error(
                `Failed to load content: ${article.contentFile}`,
                error
            );
        }
    }

    return (
        <SlugUI
            article={{
                ...article,
                content: content?.default || content,
                readTime: "5 phút đọc",
            }}
        />
    );
}

// Static generation cho tất cả articles trong category này
export async function generateStaticParams() {
    // Filter articles thuộc category "dinh-duong-loi-song"
    const categoryArticles = healthArticles.filter((article) =>
        article.link.includes("/dinh-duong-loi-song/")
    );

    return categoryArticles.map((article) => ({
        slug: article.slug,
    }));
}
