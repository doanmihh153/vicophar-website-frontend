import { useEffect, useState, useCallback } from "react";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";

/**
 * ============================================================================
 * useLightbox Hook
 * ============================================================================
 *
 * Quản lý trạng thái và logic của Modal Lightbox.
 * Tách riêng để tái sử dụng.
 *
 * @param {boolean} isOpen - Trạng thái mở từ parent
 * @param {function} onClose - Callback đóng modal
 * @returns {Object} - { mounted, isVisible }
 */
export default function useLightbox({ isOpen, onClose }) {
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Portal mounting (client-side only)
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Animation visibility (delay hide for exit animation)
    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Body Scroll Lock
    useBodyScrollLock(isOpen || isVisible);

    // Keyboard Support (Escape to close)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    return {
        mounted,
        isVisible,
    };
}
