/**
 * ============================================================================
 * BUTTON COMPONENT - EXAMPLES & DOCUMENTATION
 * ============================================================================
 *
 * File này chứa các ví dụ sử dụng Button component
 * Giúp developers hiểu cách sử dụng và các options có sẵn
 *
 * ============================================================================
 */

import Button from "./Button";
import { UserIcon, CartIcon, SearchIcon } from "@/assets/icons";

/**
 * EXAMPLES - CÁC VÍ DỤ SỬ DỤNG
 * =============================
 */

// ========================================
// 1. BASIC BUTTONS - Buttons cơ bản
// ========================================
export const BasicButtons = () => (
    <div className="flex gap-4">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
    </div>
);

// ========================================
// 2. SIZES - Các kích thước
// ========================================
export const Sizes = () => (
    <div className="flex gap-4 items-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
    </div>
);

// ========================================
// 3. SHAPES - Các hình dạng
// ========================================
export const Shapes = () => (
    <div className="flex gap-4">
        <Button shape="rounded">Rounded</Button>
        <Button shape="pill">Pill</Button>
        <Button shape="square">Square</Button>
    </div>
);

// ========================================
// 4. WITH ICONS - Buttons với icon
// ========================================
export const WithIcons = () => (
    <div className="flex gap-4">
        <Button icon={UserIcon}>Đăng nhập</Button>
        <Button icon={CartIcon} iconPosition="right">
            Giỏ hàng
        </Button>
        <Button icon={SearchIcon} variant="outline">
            Tìm kiếm
        </Button>
    </div>
);

// ========================================
// 5. WITH BADGES - Buttons với badge
// ========================================
export const WithBadges = () => (
    <div className="flex gap-4">
        <Button icon={CartIcon} badge={5} badgeColor="red">
            Giỏ hàng
        </Button>
        <Button icon={CartIcon} badge={99} badgeColor="green">
            Notifications
        </Button>
        <Button icon={CartIcon} badge={150} badgeColor="blue">
            Messages
        </Button>
    </div>
);

// ========================================
// 6. LINK BUTTONS - Buttons dạng link
// ========================================
export const LinkButtons = () => (
    <div className="flex gap-4">
        <Button href="/login" icon={UserIcon}>
            Đăng nhập
        </Button>
        <Button href="/cart" icon={CartIcon} badge={3}>
            Giỏ hàng
        </Button>
        <Button href="https://google.com" target="_blank" variant="outline">
            External Link
        </Button>
    </div>
);

// ========================================
// 7. CUSTOM COLORS - Màu sắc tùy chỉnh
// ========================================
export const CustomColors = () => (
    <div className="flex gap-4">
        <Button
            bgColor="bg-red-500"
            textColor="text-white"
            hoverBg="hover:bg-red-600"
        >
            Red Button
        </Button>
        <Button
            bgColor="bg-blue-500"
            textColor="text-white"
            hoverBg="hover:bg-blue-600"
        >
            Blue Button
        </Button>
        <Button
            bgColor="bg-purple-500"
            textColor="text-white"
            hoverBg="hover:bg-purple-600"
        >
            Purple Button
        </Button>
    </div>
);

// ========================================
// 8. CUSTOM DIMENSIONS - Kích thước tùy chỉnh
// ========================================
export const CustomDimensions = () => (
    <div className="flex gap-4">
        <Button customWidth="w-full">Full Width</Button>
        <Button customWidth="w-32" customHeight="h-16">
            Custom Size
        </Button>
        <Button customPadding="px-8 py-4">Custom Padding</Button>
    </div>
);

// ========================================
// 9. DISABLED STATE - Trạng thái disabled
// ========================================
export const DisabledState = () => (
    <div className="flex gap-4">
        <Button disabled>Disabled Primary</Button>
        <Button variant="outline" disabled>
            Disabled Outline
        </Button>
        <Button icon={UserIcon} disabled>
            Disabled with Icon
        </Button>
    </div>
);

// ========================================
// 10. LOADING STATE - Trạng thái loading (với animation)
// ========================================
export const LoadingState = () => (
    <div className="flex gap-4">
        <Button animation="animate-pulse">Loading...</Button>
        <Button animation="animate-bounce" variant="outline">
            Processing
        </Button>
    </div>
);

// ========================================
// 11. REAL WORLD EXAMPLES - Ví dụ thực tế
// ========================================
export const RealWorldExamples = () => (
    <div className="space-y-4">
        {/* Header Actions */}
        <div className="flex gap-3">
            <Button
                href="/dang-nhap"
                variant="ghost"
                shape="pill"
                icon={UserIcon}
                customWidth="w-16 tablet:w-auto"
                customHeight="h-12"
            >
                <span className="hidden desktop:inline">Đăng nhập</span>
            </Button>

            <Button
                href="/gio-hang"
                shape="pill"
                bgColor="bg-green-primary"
                textColor="text-white"
                icon={CartIcon}
                badge={5}
                badgeColor="red"
                customWidth="w-16 tablet:w-auto"
                customHeight="h-12"
            >
                <span className="hidden desktop:inline">Giỏ hàng</span>
            </Button>
        </div>

        {/* Form Actions */}
        <div className="flex gap-3">
            <Button type="submit" size="lg">
                Đăng ký ngay
            </Button>
            <Button variant="outline" size="lg">
                Hủy bỏ
            </Button>
        </div>

        {/* Search Button */}
        <Button
            icon={SearchIcon}
            shape="pill"
            bgColor="bg-green-primary"
            customPadding="p-2"
        />
    </div>
);

/**
 * USAGE GUIDE - HƯỚNG DẪN SỬ DỤNG
 * ================================
 *
 * 1. Import component:
 *    import Button from '@/components/common/Button';
 *
 * 2. Basic usage:
 *    <Button>Click me</Button>
 *
 * 3. With variants:
 *    <Button variant="primary">Primary</Button>
 *    <Button variant="secondary">Secondary</Button>
 *    <Button variant="outline">Outline</Button>
 *    <Button variant="ghost">Ghost</Button>
 *
 * 4. With sizes:
 *    <Button size="sm">Small</Button>
 *    <Button size="md">Medium</Button>
 *    <Button size="lg">Large</Button>
 *
 * 5. As link:
 *    <Button href="/login">Login</Button>
 *
 * 6. With icon:
 *    <Button icon={UserIcon}>Login</Button>
 *    <Button icon={CartIcon} iconPosition="right">Cart</Button>
 *
 * 7. With badge:
 *    <Button icon={CartIcon} badge={5} badgeColor="red">Cart</Button>
 *
 * 8. Custom colors:
 *    <Button bgColor="bg-red-500" textColor="text-white">Custom</Button>
 *
 * 9. Custom dimensions:
 *    <Button customWidth="w-full" customHeight="h-16">Full Width</Button>
 *
 * 10. Disabled:
 *     <Button disabled>Disabled</Button>
 */
