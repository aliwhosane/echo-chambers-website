import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import TrustStrip from '@/components/TrustStrip';
import NewsCard from '@/components/NewsCard';
import FeatureSection from '@/components/FeatureSection';
import SubscriptionCoupon from '@/components/SubscriptionCoupon';
import Footer from '@/components/Footer';
import BreakBubbleIcon from '@/components/icons/BreakBubbleIcon';
import ExpandViewIcon from '@/components/icons/ExpandViewIcon';
import FreeIcon from '@/components/icons/FreeIcon';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Ticker />
      <Hero />

      {/* Demo Section */}
      <section className={styles.demoSection}>
        <div className={styles.chamberGrid}>
          {/* Left Chamber */}
          <div className={styles.column}>
            <div className={`${styles.columnHeader} ${styles.leftHeader}`}>Left Perspective</div>
            <div className={styles.cardStack}>
              <NewsCard
                bias="left"
                source="The New York Times"
                title="Senate Passes Climate Bill with Historic Green Energy Investment"
                summary="A landmark victory for environmental advocates, the bill promises to slash emissions and boost renewable infrastructure across the nation."
              />
              <NewsCard
                bias="left"
                source="The Guardian"
                title="Global Leaders Praise US Climate Action"
                summary="International reaction is overwhelmingly positive as the US reasserts itself as a leader in the fight against climate change."
              />
            </div>
          </div>

          {/* Center Chamber */}
          <div className={styles.column}>
            <div className={`${styles.columnHeader} ${styles.centerHeader}`}>The Full Picture</div>
            <div className={styles.cardStack}>
              <NewsCard
                bias="center"
                source="Reuters"
                title="Senate Approves Inflation Reduction Act"
                summary="The bill includes provisions for both health care and climate change, funded by corporate tax increases. Economists debate the immediate impact on inflation."
              />
              <NewsCard
                bias="center"
                source="AP News"
                title="What's Inside the New Spending Bill?"
                summary="A breakdown of the allocation of funds: $369bn for energy, $64bn for health care subsidies, and deficit reduction measures."
              />
            </div>
          </div>

          {/* Right Chamber */}
          <div className={styles.column}>
            <div className={`${styles.columnHeader} ${styles.rightHeader}`}>Right Perspective</div>
            <div className={styles.cardStack}>
              <NewsCard
                bias="right"
                source="Fox News"
                title="Democrats Push Massive Tax-and-Spend Bill Amid Recession Fears"
                summary="Critics argue the legislation will increase the burden on taxpayers and fails to address the root causes of soaring inflation."
              />
              <NewsCard
                bias="right"
                source="Wall Street Journal"
                title="Corporate Tax Hikes Could Stifle Investment"
                summary="Business leaders warn that the new 15% minimum tax could hurt job growth and reduce competitiveness in a fragile economy."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Feature Sections */}
      {/* Feature Sections */}
      <FeatureSection
        title="Break Out of Your Bubble"
        description="Algorithms are designed to show you what you already agree with. Echo Chambers helps you break free by showing you how the other side sees the same story. Challenge your assumptions and grow."
        Icon={BreakBubbleIcon}
        ctaText="Break Your Bubble"
      />

      <FeatureSection
        title="Expand Your View"
        description="Don't settle for half the story. See how left, right, and center media outlets frame the narrative. Understand the bias, find the facts, and make up your own mind with a complete 360-degree view."
        Icon={ExpandViewIcon}
        reverse
        ctaText="See All Sides"
      />

      <FeatureSection
        title="Always Free. Always Unbiased."
        description="Access to information shouldn't come with a price tag or a hidden agenda. Echo Chambers is free to use and dedicated to transparency. No paywalls, no hidden algorithms, just news."
        Icon={FreeIcon}
        ctaText="Read for Free"
      />

      {/* Subscription Coupon */}
      <SubscriptionCoupon />

      <Footer />
    </main>
  );
}
