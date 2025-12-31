/**
 * ============================================================================
 * BUTTONHOVERUNDERLINE - EXAMPLES & DOCUMENTATION
 * ============================================================================
 *
 * File này chứa các ví dụ sử dụng ButtonHoverUnderline component
 *
 * ============================================================================
 */

import ButtonHoverUnderline from "./ButtonHoverUnderline";

/**
 * EXAMPLES - CÁC VÍ DỤ SỬ DỤNG
 * =============================
 */

// ========================================
// 1. BASIC USAGE - Sử dụng cơ bản
// ========================================
export const BasicUsage = () => (
    <div className="p-8 space-y-4">
        <ButtonHoverUnderline>Contact me</ButtonHoverUnderline>
        <ButtonHoverUnderline>Learn more</ButtonHoverUnderline>
        <ButtonHoverUnderline>Get started</ButtonHoverUnderline>
    </div>
);

// ========================================
// 2. AS LINKS - Dùng như link
// ========================================
export const AsLinks = () => (
    <div className="p-8 space-y-4">
        <ButtonHoverUnderline href="/contact">Contact page</ButtonHoverUnderline>
        <ButtonHoverUnderline href="/about">About us</ButtonHoverUnderline>
        <ButtonHoverUnderline href="/products">View products</ButtonHoverUnderline>
    </div>
);

// ========================================
// 3. CUSTOM COLORS - Màu sắc tùy chỉnh
// ========================================
export const CustomColors = () => (
    <div className="p-8 space-y-4">
        {/* Green (default) */}
        <ButtonHoverUnderline underlineColor="bg-green-primary">
            Green underline
        </ButtonHoverUnderline>

        {/* Red */}
        <ButtonHoverUnderline underlineColor="bg-red-500">
            Red underline
        </ButtonHoverUnderline>

        {/* Blue */}
        <ButtonHoverUnderline underlineColor="bg-blue-500">
            Blue underline
        </ButtonHoverUnderline>

        {/* Purple */}
        <ButtonHoverUnderline underlineColor="bg-purple-500">
            Purple underline
        </ButtonHoverUnderline>

        {/* Yellow */}
        <ButtonHoverUnderline underlineColor="bg-yellow-500">
            Yellow underline
        </ButtonHoverUnderline>
    </div>
);

// ========================================
// 4. CUSTOM HEIGHT - Chiều cao underline
// ========================================
export const CustomHeight = () => (
    <div className="p-8 space-y-4">
        <ButtonHoverUnderline underlineHeight="h-[1px]">
            Thin underline (1px)
        </ButtonHoverUnderline>

        <ButtonHoverUnderline underlineHeight="h-[2px]">
            Default underline (2px)
        </ButtonHoverUnderline>

        <ButtonHoverUnderline underlineHeight="h-[3px]">
            Thick underline (3px)
        </ButtonHoverUnderline>

        <ButtonHoverUnderline underlineHeight="h-1">
            Very thick underline (4px)
        </ButtonHoverUnderline>
    </div>
);

// ========================================
// 5. CUSTOM DURATION - Tốc độ animation
// ========================================
export const CustomDuration = () => (
    <div className="p-8 space-y-4">
        <ButtonHoverUnderline duration="duration-150">
            Fast (150ms)
        </ButtonHoverUnderline>

        <ButtonHoverUnderline duration="duration-300">
            Normal (300ms)
        </ButtonHoverUnderline>

        <ButtonHoverUnderline duration="duration-500">
            Slow (500ms)
        </ButtonHoverUnderline>

        <ButtonHoverUnderline duration="duration-700">
            Very slow (700ms)
        </ButtonHoverUnderline>
    </div>
);

// ========================================
// 6. WITH CUSTOM STYLES - Với styles tùy chỉnh
// ========================================
export const WithCustomStyles = () => (
    <div className="p-8 space-y-4">
        <ButtonHoverUnderline className="text-lg font-bold text-green-primary">
            Large bold text
        </ButtonHoverUnderline>

        <ButtonHoverUnderline className="text-sm uppercase tracking-wider">
            Small uppercase
        </ButtonHoverUnderline>

        <ButtonHoverUnderline className="text-2xl font-light italic">
            Large light italic
        </ButtonHoverUnderline>

        <ButtonHoverUnderline className="px-4 py-2 bg-gray-100 rounded-lg">
            With background
        </ButtonHoverUnderline>
    </div>
);

// ========================================
// 7. DISABLED STATE - Trạng thái disabled
// ========================================
export const DisabledState = () => (
    <div className="p-8 space-y-4">
        <ButtonHoverUnderline>Normal button</ButtonHoverUnderline>
        <ButtonHoverUnderline disabled>Disabled button</ButtonHoverUnderline>
    </div>
);

// ========================================
// 8. IN NAVIGATION - Trong menu navigation
// ========================================
export const InNavigation = () => (
    <nav className="p-8 bg-white border-b">
        <ul className="flex items-center gap-8 list-none">
            <li>
                <ButtonHoverUnderline href="/">
                    Trang chủ
                </ButtonHoverUnderline>
            </li>
            <li>
                <ButtonHoverUnderline href="/san-pham">
                    Sản phẩm
                </ButtonHoverUnderline>
            </li>
            <li>
                <ButtonHoverUnderline href="/tin-tuc">
                    Tin tức
                </ButtonHoverUnderline>
            </li>
            <li>
                <ButtonHoverUnderline href="/lien-he">
                    Liên hệ
                </ButtonHoverUnderline>
            </li>
        </ul>
    </nav>
);

// ========================================
// 9. IN FOOTER - Trong footer
// ========================================
export const InFooter = () => (
    <footer className="p-8 bg-gray-900 text-white">
        <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Liên kết nhanh</h3>
            <div className="flex flex-col gap-2">
                <ButtonHoverUnderline 
                    href="/about" 
                    className="text-white"
                    underlineColor="bg-white"
                >
                    Về chúng tôi
                </ButtonHoverUnderline>
                <ButtonHoverUnderline 
                    href="/privacy" 
                    className="text-white"
                    underlineColor="bg-white"
                >
                    Chính sách bảo mật
                </ButtonHoverUnderline>
                <ButtonHoverUnderline 
                    href="/terms" 
                    className="text-white"
                    underlineColor="bg-white"
                >
                    Điều khoản sử dụng
                </ButtonHoverUnderline>
            </div>
        </div>
    </footer>
);

// ========================================
// 10. REAL WORLD EXAMPLE - Ví dụ thực tế
// ========================================
export const RealWorldExample = () => (
    <div className="p-8 max-w-4xl mx-auto">
        {/* Hero section */}
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Welcome to Vicophar</h1>
            <p className="text-gray-600 mb-8">
                Chăm sóc sức khỏe toàn diện với sản phẩm thiên nhiên
            </p>
            <ButtonHoverUnderline 
                href="/products"
                className="text-lg font-semibold text-green-primary"
                underlineHeight="h-[3px]"
            >
                Khám phá sản phẩm →
            </ButtonHoverUnderline>
        </div>

        {/* Product card */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-2">Aquatop - Viên uống bổ sung</h3>
            <p className="text-gray-600 mb-4">
                Bổ sung khoáng chất thiết yếu cho cơ thể
            </p>
            <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-primary">
                    125.000đ
                </span>
                <ButtonHoverUnderline 
                    href="/san-pham/SP001"
                    className="text-green-primary font-semibold"
                >
                    Xem chi tiết
                </ButtonHoverUnderline>
            </div>
        </div>
    </div>
);

/**
 * USAGE GUIDE - HƯỚNG DẪN SỬ DỤNG
 * ================================
 *
 * 1. Import component:
 *    import ButtonHoverUnderline from '@/components/common/ButtonHoverUnderline';
 *
 * 2. Basic usage:
 *    <ButtonHoverUnderline>Contact me</ButtonHoverUnderline>
 *
 * 3. As link:
 *    <ButtonHoverUnderline href="/contact">Contact</ButtonHoverUnderline>
 *
 * 4. Custom color:
 *    <ButtonHoverUnderline underlineColor="bg-red-500">Red</ButtonHoverUnderline>
 *
 * 5. Custom height:
 *    <ButtonHoverUnderline underlineHeight="h-[3px]">Thick</ButtonHoverUnderline>
 *
 * 6. Custom duration:
 *    <ButtonHoverUnderline duration="duration-500">Slow</ButtonHoverUnderline>
 *
 * 7. With custom styles:
 *    <ButtonHoverUnderline className="text-lg font-bold">
 *        Custom
 *    </ButtonHoverUnderline>
 *
 * 8. Disabled:
 *    <ButtonHoverUnderline disabled>Disabled</ButtonHoverUnderline>
 */
