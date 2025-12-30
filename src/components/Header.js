import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.date}>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div className={styles.logo}>
                    ECHO CHAMBERS
                </div>
                <button className={styles.downloadButton}>Subscribe</button>
            </div>
        </header>
    );
}
