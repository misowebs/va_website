import { Link } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * 404 Not Found Page
 * SEO-friendly error page with helpful navigation
 */
function NotFound() {
    useEffect(() => {
        // Update page title for SEO
        document.title = '404 - Page Not Found | Venezuelan Association at OU';

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = 'The page you are looking for could not be found. Explore the Venezuelan Association at OU website to find what you need.';

        // Add noindex meta tag for 404 pages
        let metaRobots = document.querySelector('meta[name="robots"]');
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.name = 'robots';
            document.head.appendChild(metaRobots);
        }
        metaRobots.content = 'noindex, follow';

        return () => {
            // Reset robots meta tag on unmount
            if (metaRobots) {
                metaRobots.content = 'index, follow';
            }
        };
    }, []);

    return (
        <main className="site-container">
            <section className="section stack-lg text-center align-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="stack-md">
                    <h1 className="heading-xl" style={{ fontSize: '6rem', margin: 0, color: '#646cff' }}>404</h1>
                    <h2 className="heading-lg">Page Not Found</h2>
                    <p className="text-lg max-w-prose">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>

                    <div className="stack-sm" style={{ marginTop: '2rem' }}>
                        <p className="text-md">Here are some helpful links:</p>
                        <nav aria-label="404 navigation">
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                                <li>
                                    <Link to="/" className="btn btn-outline text-lg">
                                        Go to Homepage
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/history" className="btn btn-outline">
                                        View Our History
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-us" className="btn btn-outline">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/join-us" className="btn btn-outline">
                                        Join Our Community
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <p className="text-sm" style={{ color: '#666' }}>
                            If you believe this is an error, please contact us at{' '}
                            <a href="mailto:va@groups.ou.edu" style={{ color: '#646cff' }}>
                                va@groups.ou.edu
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default NotFound;
