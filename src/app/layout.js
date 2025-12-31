// "use client";
import "@/styles/globals.css";
import { googleSans } from "@/app/fonts/font-sans";
import { HeaderLayouts } from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import ConsoleBranding from "./_components/ConsoleBranding";
import FloatingActions from "@/components/common/FloatingActions";
import SmoothScroll from "@/components/common/SmoothScroll/SmoothScroll";

export const metadata = {
    title: {
        default:
            "Vicophar - Dược Mỹ Phẩm Thiên Nhiên Việt Nam | Chăm Sóc Sức Khỏe Toàn Diện",
        template: "%s | Vicophar",
    },
    description:
        "Vicophar - Thương hiệu dược mỹ phẩm hàng đầu Việt Nam với hơn 15 năm kinh nghiệm. Sản phẩm từ thiên nhiên, chứng nhận GMP-WHO, ISO 9001:2015. Hotline: 0333 152 545",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="vi"
            className={googleSans.className}
            data-scroll-behavior="smooth"
        >
            <body className={`${googleSans.variable}`}>
                <HeaderLayouts />
                <main role="main" className="min-h-screen ">
                    {children}
                </main>
                <Footer />
                {/* <SmoothScroll /> */}
                <FloatingActions />
                <ConsoleBranding />
            </body>
        </html>
    );
}

// pt-(--height-vico-header)
