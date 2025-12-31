export default function ProductMetaItem({
    label,
    value,
    isLink = false,
    isFullWidth = false,
    linkText = "Xem chi tiết",
    hideLabel = false,
    className = "",
}) {
    if (!value) return null;

    const content = isLink ? (
        <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-vico-green hover:underline inline-flex items-center font-medium italic"
        >
            {linkText}
        </a>
    ) : (
        value
    );

    return (
        <tr className="text-base desktop:text-lg">
            {isFullWidth ? (
                <td colSpan="2" className="py-4 text-gray-900 align-top">
                    {!hideLabel && (
                        <span className="font-normal text-gray-500 mr-2">
                            {label}:
                        </span>
                    )}
                    <span className="font-medium">{content}</span>
                </td>
            ) : (
                <>
                    <th
                        scope="row"
                        className="w-1/3 py-4 pr-4 font-normal text-gray-500 text-left align-top"
                    >
                        {label}
                    </th>
                    <td className="w-2/3 py-4 font-medium text-gray-900 align-top">
                        {content}
                    </td>
                </>
            )}
        </tr>
    );
}
