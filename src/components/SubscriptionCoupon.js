import styles from './SubscriptionCoupon.module.css';

export default function SubscriptionCoupon() {
    return (
        <section className={styles.container}>
            <div className={styles.coupon}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <span className={styles.offer}>LIMITED OFFER: 100% OFF</span>
                    </div>
                    <div className={styles.body}>
                        <h2 className={styles.title}>SUBSCRIBE TO REALITY</h2>
                        <p className={styles.description}>
                            Redeem this coupon for unlimited access to unbiased news.
                            Break free from the echo chamber today.
                        </p>
                        <div className={styles.action}>
                            <button className={styles.button}>CLAIM FREE ACCESS</button>
                        </div>
                    </div>
                    <div className={styles.finePrint}>
                        *Offer valid forever. No hidden algorithms. No paywalls.
                    </div>
                </div>
                <div className={styles.cutLine}>
                    <span className={styles.scissors}>✂</span>
                </div>
            </div>
        </section>
    );
}
