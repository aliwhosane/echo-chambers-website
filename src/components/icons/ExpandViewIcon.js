export default function ExpandViewIcon({ className }) {
    return (
        <svg
            className={className}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="100" cy="100" r="90" stroke="var(--border)" strokeWidth="2" />
            <path d="M100 100L100 20" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" />
            <path d="M100 100L170 140" stroke="var(--secondary)" strokeWidth="4" strokeLinecap="round" />
            <path d="M100 100L30 140" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />

            <circle cx="100" cy="20" r="10" fill="var(--primary)" />
            <circle cx="170" cy="140" r="10" fill="var(--secondary)" />
            <circle cx="30" cy="140" r="10" fill="var(--accent)" />
        </svg>
    );
}
