import styles from './NewsCard.module.css';

export default function NewsCard({ title, source, summary, bias }) {
    // bias: 'left' | 'center' | 'right'
    const biasColor = {
        left: 'var(--accent)', // Blue
        center: 'var(--primary)', // Purple (or maybe grey/purple)
        right: 'var(--secondary)', // Red
    }[bias] || 'var(--inactive)';

    return (
        <div className={styles.card} style={{ borderTop: `4px solid ${biasColor}` }}>
            <div className={styles.source} style={{ color: biasColor }}>
                {source}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.summary}>{summary}</p>
        </div>
    );
}
