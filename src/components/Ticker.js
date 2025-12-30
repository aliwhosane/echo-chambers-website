import styles from './Ticker.module.css';

export default function Ticker() {
    return (
        <div className={styles.tickerContainer}>
            <div className={styles.tickerContent}>
                <span className={styles.tickerItem}>
                    <span className={styles.accent}>BREAKING:</span> Studies show 85% of readers want the full story.
                </span>
                <span className={styles.tickerItem}>
                    <span className={styles.accent}>LIVE:</span> Algorithm-driven polarization reaches historic highs.
                </span>
                <span className={styles.tickerItem}>
                    <span className={styles.accent}>UPDATE:</span> Echo Chambers app downloads surge as users seek clarity.
                </span>
                <span className={styles.tickerItem}>
                    <span className={styles.accent}>DEVELOPING:</span> Experts say engaging with opposing views simulates brain growth.
                </span>
                <span className={styles.tickerItem}>
                    <span className={styles.accent}>BREAKING:</span> Studies show 85% of readers want the full story.
                </span>
                <span className={styles.tickerItem}>
                    <span className={styles.accent}>LIVE:</span> Algorithm-driven polarization reaches historic highs.
                </span>
            </div>
        </div>
    );
}
