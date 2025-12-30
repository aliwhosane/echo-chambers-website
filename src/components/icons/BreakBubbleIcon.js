export default function BreakBubbleIcon({ className }) {
    return (
        <svg
            className={className}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="100" cy="100" r="80" stroke="var(--primary)" strokeWidth="8" strokeDasharray="20 10" opacity="0.5" />
            <path
                d="M100 100L160 40M160 40L140 40M160 40L160 60"
                stroke="var(--secondary)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="100" cy="100" r="40" fill="var(--accent)" opacity="0.2" />
            <circle cx="100" cy="100" r="10" fill="var(--text)" />
        </svg>
    );
}
