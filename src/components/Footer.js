import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    Echo <span className={styles.logoAccent}>Chambers</span>
                </div>
                <div className={styles.links}>
                    <a href="/terms" className={styles.link}>Terms and Conditions</a>
                    <a href="/policy" className={styles.link}>Privacy Policy</a>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Echo Chambers App. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
