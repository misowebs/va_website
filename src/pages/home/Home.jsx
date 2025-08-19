import { Link } from 'react-router-dom'
import { CDN } from '../../constants/siteConfig';

function Home() {
    return (
        <>
        {/* Schema.org structured data for the homepage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Venezuelan Association at OU - Home",
                "description": "Join the vibrant Venezuelan community at the University of Oklahoma. Experience Venezuelan culture, community, and creativity in Norman, OK.",
                "url": "https://vaou.org/",
                "mainEntity": {
                    "@type": "Organization",
                    "name": "Venezuelan Association at OU",
                    "description": "A passionate student organization dedicated to celebrating and sharing Venezuelan culture through music, dances, and traditions.",
                    "url": "https://vaou.org",
                    "logo": "https://vaou.org/images/logos/VA_Logo.png",
                    "location": {
                        "@type": "Place",
                        "name": "University of Oklahoma",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Norman",
                            "addressRegion": "OK",
                            "addressCountry": "US"
                        }
                    },
                    "foundingDate": "2004",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Cultural Events and Activities",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Venezuelan Cultural Events",
                                    "description": "Music, dances, and traditional celebrations"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Community Engagement",
                                    "description": "Cultural exchange and collaborative experiences"
                                }
                            }
                        ]
                    }
                }
            })
        }} />
        
        <main className="site-container">
            {/* Hero Section */}
            <section className="section stack-lg text-center align-center" aria-labelledby="hero-title">
                <h1 id="hero-title" className="heading-xl">A Piece of Venezuela in Oklahoma</h1>
                <p className="text-lg max-w-prose">
                    Engage with vibrant culture, community, and creativity. Join us to experience 
                    and contribute to our vibrant cultural community.
                </p>
                <div className="actions">
                    <Link to="/join-us" className="btn btn-outline text-lg" aria-label="Join the Venezuelan Association">Join Us</Link>
                </div>
                <figure>
                    <img
                        src={`${CDN}/VA Images/2023/10 Arepada/2023-arepada-11.jpeg`}
                        alt="Venezuelan Association Arepada event showcasing traditional Venezuelan food and community gathering"
                        className="img-responsive img-rounded img-shadow"
                        style={{ maxWidth: '1200px' }}
                        loading="eager"
                    />
                    <figcaption className="sr-only">Venezuelan Association Arepada event</figcaption>
                </figure>
            </section>

            {/* About Section */}
            <section className="section" aria-labelledby="about-title">
                <div className="split">
                    <div className="stack-sm box-lined">
                        <h2 id="about-title" className="heading-lg text-center" style={{ paddingTop: '2rem' }}>Who We Are</h2>
                        <p className="text-md text-center" style={{ paddingBottom: '2rem' }}>
                        The Venezuelan Association at the University of Oklahoma is a passionate 
                        student organization dedicated to celebrating and sharing Venezuelan culture 
                        through music, dances, and traditions. Through engaging events and activities, 
                        we provide a platform for students and the community to explore Venezuela's 
                        rich heritage, learn about our history, and connect with others.
                        </p>
                    </div>
                    <figure>
                        <img
                            src={`${CDN}/VA Images/2018/11 Feria Gaitera/2018-feria-gaitera-2.1.jpg`}
                            alt="Noche de Gaita event featuring traditional Venezuelan music and cultural celebration"
                            className="img-responsive img-rounded img-shadow"
                            loading="lazy"
                        />
                        <figcaption className="sr-only">Noche de Gaita cultural event</figcaption>
                    </figure>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section" aria-labelledby="mission-title">
                <div className="split reverse">
                    <figure>
                        <img
                            src={`${CDN}/VA Images/More Pics/First association meeting 2004.jpg`}
                            alt="Historical photo of the first Association Friends of Venezuela meeting in 2004"
                            className="img-responsive img-rounded img-shadow"
                            loading="lazy"
                        />
                        <figcaption className="sr-only">First Association Friends of Venezuela meeting in 2004</figcaption>
                    </figure>
                    <div className="stack-sm box-lined">
                        <h2 id="mission-title" className="heading-lg text-center" style={{ paddingTop: '2.5rem' }}>Our Mission</h2>
                        <p className="text-md text-center" style={{ paddingBottom: '2.5rem' }}>
                        We aim to foster a vibrant community of cultural exchange that promotes creativity 
                        and collaborative experiences. Our events serve as a bridge, connecting diverse 
                        groups through the joyous celebration of Venezuelan traditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="section stack-lg text-center align-center" aria-labelledby="cta-title">
                <div className="stack-sm box-lined align-center" style={{ padding: '3rem' }}>
                    <h2 id="cta-title" className="heading-lg" style={{ paddingTop: '2rem' }}>Join Our Familia</h2>
                    <p className="text-md max-w-prose">
                    Become a part of the Venezuelan Association today and gain access to a network of students 
                    and community members who share your interest in cultural exploration and community engagement.
                    </p>
                    <div className="actions" style={{ paddingBottom: '2rem' }}>
                        <Link to="/about-us" className="btn btn-outline text-lg" aria-label="Learn more about the Venezuelan Association">Learn More</Link>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default Home