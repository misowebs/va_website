import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PerformanceMonitor from '../common/PerformanceMonitor'

function Layout() {
    const location = useLocation()
    
    // Get page-specific meta data based on current route
    const getPageMeta = () => {
        const path = location.pathname
        const baseUrl = 'https://vaou.org'
        
        switch(path) {
            case '/':
                return {
                    title: 'Venezuelan Association at OU | Venezuelan Culture & Community',
                    description: 'Join the vibrant Venezuelan community at the University of Oklahoma. Discover our cultural events, scholarships, and community activities. Experience Venezuelan culture in Norman, OK.',
                    keywords: 'Venezuelan Association, OU, University of Oklahoma, Venezuelan culture, Norman OK, student organization, Latin American community, scholarships, cultural events',
                    canonical: baseUrl
                }
            case '/about-us':
                return {
                    title: 'About Us | Venezuelan Association at OU',
                    description: 'Learn about the Venezuelan Association at OU, our mission, values, and commitment to fostering Venezuelan culture and community at the University of Oklahoma.',
                    keywords: 'about VAOU, Venezuelan Association mission, OU student organization, Venezuelan community Norman',
                    canonical: `${baseUrl}/about-us`
                }
            case '/history':
                return {
                    title: 'Our History | Venezuelan Association at OU',
                    description: 'Explore the rich history of the Venezuelan Association at OU since 2004. View our past events, cultural celebrations, and community milestones.',
                    keywords: 'VAOU history, Venezuelan Association events, OU cultural history, Venezuelan community timeline',
                    canonical: `${baseUrl}/history`
                }
            case '/scholarships':
                return {
                    title: 'Scholarships | Venezuelan Association at OU',
                    description: 'Discover scholarship opportunities for Venezuelan students at the University of Oklahoma. Learn about eligibility, application process, and financial support.',
                    keywords: 'Venezuelan scholarships, OU financial aid, student scholarships, Venezuelan student support',
                    canonical: `${baseUrl}/scholarships`
                }
            case '/join-us':
                return {
                    title: 'Join Us | Venezuelan Association at OU',
                    description: 'Become part of the Venezuelan Association at OU. Join our community, attend events, and connect with fellow Venezuelan students and culture enthusiasts.',
                    keywords: 'join VAOU, Venezuelan Association membership, OU student groups, Venezuelan community join',
                    canonical: `${baseUrl}/join-us`
                }
            default:
                // Handle gallery pages
                if (path.match(/^\/(\d{4})\/(.+)$/)) {
                    const [, year, event] = path.match(/^\/(\d{4})\/(.+)$/)
                    return {
                        title: `${event.replace(/([A-Z])/g, ' $1').trim()} ${year} | Venezuelan Association at OU`,
                        description: `View photos and memories from ${event.replace(/([A-Z])/g, ' $1').trim()} ${year}, a special event hosted by the Venezuelan Association at OU.`,
                        keywords: `${event}, ${year}, Venezuelan Association events, OU cultural events, Venezuelan community photos`,
                        canonical: `${baseUrl}${path}`
                    }
                }
                return {
                    title: 'Venezuelan Association at OU',
                    description: 'Join the vibrant Venezuelan community at the University of Oklahoma.',
                    keywords: 'Venezuelan Association, OU, University of Oklahoma',
                    canonical: `${baseUrl}${path}`
                }
        }
    }
    
    // Update meta tags when location changes
    useEffect(() => {
        const pageMeta = getPageMeta()
        
        // Update document title
        document.title = pageMeta.title
        
        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]')
        if (!metaDescription) {
            metaDescription = document.createElement('meta')
            metaDescription.name = 'description'
            document.head.appendChild(metaDescription)
        }
        metaDescription.content = pageMeta.description
        
        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]')
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta')
            metaKeywords.name = 'keywords'
            document.head.appendChild(metaKeywords)
        }
        metaKeywords.content = pageMeta.keywords
        
        // Update canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]')
        if (!canonicalLink) {
            canonicalLink = document.createElement('link')
            canonicalLink.rel = 'canonical'
            document.head.appendChild(canonicalLink)
        }
        canonicalLink.href = pageMeta.canonical
        
        // Update Open Graph tags
        const ogTags = [
            { property: 'og:title', content: pageMeta.title },
            { property: 'og:description', content: pageMeta.description },
            { property: 'og:url', content: pageMeta.canonical },
            { property: 'og:type', content: 'website' },
            { property: 'og:image', content: 'https://vaou.org/images/logos/VA_Logo.png' },
            { property: 'og:site_name', content: 'Venezuelan Association at OU' }
        ]
        
        ogTags.forEach(tag => {
            let ogTag = document.querySelector(`meta[property="${tag.property}"]`)
            if (!ogTag) {
                ogTag = document.createElement('meta')
                ogTag.setAttribute('property', tag.property)
                document.head.appendChild(ogTag)
            }
            ogTag.content = tag.content
        })
        
        // Update Twitter Card tags
        const twitterTags = [
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: pageMeta.title },
            { name: 'twitter:description', content: pageMeta.description },
            { name: 'twitter:image', content: 'https://vaou.org/images/logos/VA_Logo.png' }
        ]
        
        twitterTags.forEach(tag => {
            let twitterTag = document.querySelector(`meta[name="${tag.name}"]`)
            if (!twitterTag) {
                twitterTag = document.createElement('meta')
                twitterTag.name = tag.name
                document.head.appendChild(twitterTag)
            }
            twitterTag.content = tag.content
        })
        
    }, [location])
    
    return (
        <>
        {/* Performance monitoring for Core Web Vitals */}
        <PerformanceMonitor />
        
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
            Skip to main content
        </a>
        
        <Header />
        <main id="main-content" style={{ minHeight: '80vh', padding: '1rem 1rem'}}>
            <Outlet /> 
        </main>
        <Footer />
        </>
    )
}

export default Layout