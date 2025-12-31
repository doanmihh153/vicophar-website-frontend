export default function ProductSection({
    children,
    className = "mt-4 desktop:mt-6", // Default margin
    innerClassName = "p-4 desktop:p-6", // Default padding
    id = "",
}) {
    return (
        <section id={id} className={`vico-container ${className}`}>
            <div
                className={`bg-vico-white py-2 rounded-none -mx-4 tablet:-mx-5 desktop:mx-0 desktop:rounded-2xl ${innerClassName}`}
            >
                {children}
            </div>
        </section>
    );
}
