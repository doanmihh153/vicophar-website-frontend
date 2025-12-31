/**
 * ============================================================================
 * STORY GRADIENT WRAPPER - WRAPPER VỚI GRADIENT BACKGROUND
 * ============================================================================
 *
 * Wrapper component để bọc các sections với gradient background
 * Gradient: #E7FFEA (top) → #FFF (center) → #E7FFEA (bottom)
 *
 * ============================================================================
 */

export default function StoryGradientWrapper({ children }) {
    return (
        <div
            className="w-full"
            style={{
                background:
                    "linear-gradient(180deg, #E7FFEA 0%, #FFFFFF 50%, #E7FFEA 75%, #FFFFFF 98.1%)",
            }}
        >
            {children}
        </div>
    );
}
