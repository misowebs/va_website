import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { generateBreadcrumbSchema, formatEventName } from '../../utils/seoHelpers';

/**
 * Breadcrumb Navigation Component with Schema.org markup
 * Improves SEO and user navigation
 */
function Breadcrumbs() {
    const location = useLocation();

    // Generate breadcrumb items based on current path
    const getBreadcrumbs = () => {
        const path = location.pathname;
        const breadcrumbs = [
            { name: 'Home', url: 'https://vaou.org/' }
        ];

        // Don't show breadcrumbs on home page
        if (path === '/') {
            return null;
        }

        // Handle main navigation pages
        const pageNames = {
            '/about-us': 'About Us',
            '/history': 'History',
            '/scholarships': 'Scholarships',
            '/join-us': 'Join Us'
        };

        if (pageNames[path]) {
            breadcrumbs.push({
                name: pageNames[path],
                url: `https://vaou.org${path}`
            });
            return breadcrumbs;
        }

        // Handle gallery pages (e.g., /2024/VenezuelanNight)
        const galleryMatch = path.match(/^\/(\d{4})\/(.+)$/);
        if (galleryMatch) {
            const [, year, eventName] = galleryMatch;
            breadcrumbs.push({
                name: 'History',
                url: 'https://vaou.org/history'
            });
            breadcrumbs.push({
                name: `${year} - ${formatEventName(eventName)}`,
                url: `https://vaou.org${path}`
            });
            return breadcrumbs;
        }

        return breadcrumbs;
    };

    const breadcrumbs = getBreadcrumbs();

    // Inject structured data
    useEffect(() => {
        if (breadcrumbs && breadcrumbs.length > 1) {
            const schema = generateBreadcrumbSchema(breadcrumbs);

            // Remove existing breadcrumb schema
            const existing = document.getElementById('breadcrumb-schema');
            if (existing) {
                existing.remove();
            }

            // Inject new schema
            const script = document.createElement('script');
            script.id = 'breadcrumb-schema';
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(schema);
            document.head.appendChild(script);
        }

        // Cleanup on unmount
        return () => {
            const existing = document.getElementById('breadcrumb-schema');
            if (existing) {
                existing.remove();
            }
        };
    }, [location]);

    // Don't render if no breadcrumbs or only home
    if (!breadcrumbs || breadcrumbs.length <= 1) {
        return null;
    }

    return (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <ol className="breadcrumb-list">
                {breadcrumbs.map((crumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    const path = crumb.url.replace('https://vaou.org', '');

                    return (
                        <li key={crumb.url} className="breadcrumb-item">
                            {isLast ? (
                                <span aria-current="page">{crumb.name}</span>
                            ) : (
                                <>
                                    <Link to={path}>{crumb.name}</Link>
                                    <span className="breadcrumb-separator" aria-hidden="true"> / </span>
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;
