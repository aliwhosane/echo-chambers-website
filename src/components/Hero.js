import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>
                ESCAPE THE ECHO CHAMBER
            </h1>
            <p className={styles.subtitle}>
                See how the same story is reported by the Left, Right, and Center.
                Get the full picture and make up your own mind.
            </p>
            <button className="btn-primary">Download the App</button>
        </section>
    );
}
