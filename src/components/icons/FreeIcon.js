export default function FreeIcon({ className }) {
    return (
        <svg
            className={className}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="60" y="90" width="80" height="70" rx="8" stroke="var(--primary)" strokeWidth="8" />
            <path
                d="M100 90V60C100 48.9543 108.954 40 120 40"
                stroke="var(--secondary)"
                strokeWidth="8"
                strokeLinecap="round"
            />
            <path
                d="M70 125L90 145L130 105"
                stroke="var(--accent)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
