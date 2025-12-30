import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
    return (
        <>
            <Header />
            <main style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: 'var(--font-playfair)' }}>Terms of Service</h1>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair)' }}>1. Introduction</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Welcome to Echo Chambers. By accessing or using our website and application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair)' }}>2. Content Aggregation and Liability</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Echo Chambers is a news aggregation service. We display headlines, snippets, and links to content created and published by third-party news organizations. We do not create, edit, or verify the content provided by these third-party sources.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>No Liability for Content:</strong> Echo Chambers assumes no liability or responsibility for the accuracy, reliability, bias, offensive nature, or validity of any content, opinions, or statements provided by third-party sources. The views expressed in the linked articles are solely those of the original authors and publishers.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>"As Is" Service:</strong> Our service is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair)' }}>3. Third-Party Links</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Our service contains links to third-party websites that are not owned or controlled by Echo Chambers. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that Echo Chambers shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair)' }}>4. Intellectual Property</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        The aggregation of news headlines and snippets is intended to fall within the principles of "Fair Use" for the purpose of news reporting, commentary, and criticism. All trademarks, logos, and snippets remain the property of their respective owners. Echo Chambers claims no ownership over third-party content.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair)' }}>5. Changes to Terms</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We reserve the right to modify these terms at any time. Your continued use of the service following any changes indicates your acceptance of the new terms.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
