import styles from './TrustStrip.module.css';

const FEEDS = {
    RIGHT: [
        { name: 'Fox News' },
        { name: 'NY Post' },
        { name: 'Breitbart' },
        { name: 'The Daily Wire' },
        { name: 'Washington Examiner' },
        { name: 'The Federalist' },
        { name: 'National Review' },
        { name: 'Daily Caller' },
        { name: 'Fox Business' },
        { name: 'RedState' },
        { name: 'Gateway Pundit' },
        { name: 'PJ Media' },
    ],
    LEFT: [
        { name: 'NY Times' },
        { name: 'MSNBC' },
        { name: 'Washington Post' },
        { name: 'HuffPost' },
        { name: 'The Guardian' },
        { name: 'NPR' },
        { name: 'Vox' },
        { name: 'ProPublica' },
        { name: 'The Atlantic' },
        { name: 'Mother Jones' },
        { name: 'Democracy Now!' },
        { name: 'Salon' },
    ],
    CENTER: [
        { name: 'BBC' },
        { name: 'ABC News' },
        { name: 'CBS News' },
        { name: 'NBC News' },
        { name: 'Yahoo News' },
        { name: 'Bloomberg' },
        { name: 'The Hill' },
        { name: 'Newsweek' },
        { name: 'Axios' },
    ]
};

export default function TrustStrip() {
    // Simple deterministic shuffle or standard shuffle
    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;
        // Copy array to avoid mutating original if needed (though here we build it fresh)
        const newArray = [...array];

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [newArray[currentIndex], newArray[randomIndex]] = [
                newArray[randomIndex], newArray[currentIndex]];
        }
        return newArray;
    };

    const allSources = shuffleArray([
        ...FEEDS.LEFT,
        ...FEEDS.CENTER,
        ...FEEDS.RIGHT
    ]);

    return (
        <section className={styles.stripSection}>
            <div className={styles.label}>Sources We Cover</div>
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeContent}>
                    {allSources.map((source, index) => (
                        <span key={index} className={styles.sourceItem}>
                            {source.name}
                        </span>
                    ))}
                    {/* Duplicate for seamless scroll */}
                    {allSources.map((source, index) => (
                        <span key={`dup-${index}`} className={styles.sourceItem}>
                            {source.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
