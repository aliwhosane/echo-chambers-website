import styles from './FeatureSection.module.css';

export default function FeatureSection({ title, description, Icon, reverse, ctaText = "Get the App" }) {
    return (
        <section className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.label}>Feature Story</span>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <button className="btn-primary">{ctaText}</button>
                </div>
                <div className={styles.visual}>
                    <div className={styles.iconWrapper}>
                        <Icon className={styles.icon} />
                    </div>
                </div>
            </div>
        </section>
    );
}
