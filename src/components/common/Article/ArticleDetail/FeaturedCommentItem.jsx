/**
 * FEATURED COMMENT ITEM COMPONENT
 * Individual comment display with avatar
 *
 * USAGE:
 * ------
 * <FeaturedCommentItem comment={comment} />
 */

import { AvatarIcon } from "@/assets/icons";

export default function FeaturedCommentItem({ comment }) {
    return (
        <div className="flex gap-3 border-b border-vico-gray-200 pb-4 last:border-b-0 last:pb-0">
            {/* Avatar */}
            <div className="shrink-0 -translate-y-1">
                <div className="w-10 h-10 rounded-full bg-vico-green-light flex items-center justify-center overflow-hidden">
                    <AvatarIcon
                        className="w-6 h-6 text-vico-focus"
                        width="28"
                        height="28"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="grow">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-semibold text-vico-gray-900">
                        {comment.author}
                    </span>
                    {comment.isVerified && (
                        <span className="text-xs bg-vico-green-light text-vico-green px-2 py-1 rounded-full">
                            ✓ Đã xác thực
                        </span>
                    )}
                </div>
                <p className="text-vico-gray-700 mb-2">{comment.content}</p>
                <span className="text-sm text-vico-gray-500">
                    {comment.date}
                </span>
            </div>
        </div>
    );
}
