import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Policy() {
    return (
        <>
            <Header />
            <main style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: 'var(--font-playfair)' }}>Privacy Policy</h1>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair)' }}>1. Information We Collect</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Echo Chambers collects minimal usage data to improve your experience. This may include analytical data such as page views and interaction metrics. We do not collect personally identifiable information unless you explicitly provide it (e.g., signing up for a newsletter).
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair)' }}>2. Third-Party Websites</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Important:</strong> When you click on a link to a news story, you will leave the Echo Chambers platform and be directed to a third-party website. These third-party sites are not operated by us and have their own privacy policies and terms of service.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair)' }}>3. Cookies</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We use cookies to analyze traffic and optimize website performance. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair)' }}>4. Changes to This Policy</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
