/**
 * ExternalLink Component
 *
 * Used for links that should open in a new tab/window, acting as a departure
 * from the current application context (e.g., to an external domain or a separate SSR App).
 *
 * Usage:
 * <ExternalLink href="/ssr-example">Go to SSR Page</ExternalLink>
 */
const ExternalLink = ({ href, children, className = "" }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-pointer ${className}`}
        >
            {children}
        </a>
    );
};

export default ExternalLink;
