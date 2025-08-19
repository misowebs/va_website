// SEO Configuration for Venezuelan Association at OU Website
export const seoConfig = {
  // Site-wide SEO settings
  site: {
    name: 'Venezuelan Association at OU',
    title: 'Venezuelan Association at OU | Venezuelan Culture & Community',
    description: 'Join the vibrant Venezuelan community at the University of Oklahoma. Discover our cultural events, scholarships, and community activities. Experience Venezuelan culture in Norman, OK.',
    url: 'https://vaou.org',
    logo: 'https://vaou.org/images/logos/VA_Logo.png',
    language: 'en',
    locale: 'en_US',
    type: 'website',
    twitterHandle: '@vaou_org',
    facebookPage: 'venezuelanassociation',
    instagramHandle: 'va_ou_',
    linkedinCompany: 'vaou',
    tiktokHandle: 'afv_ou'
  },

  // Default meta tags for all pages
  defaultMeta: {
    keywords: 'Venezuelan Association, OU, University of Oklahoma, Venezuelan culture, Norman OK, student organization, Latin American community, scholarships, cultural events',
    author: 'Venezuelan Association at OU',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    charset: 'UTF-8',
    themeColor: '#004080',
    colorScheme: 'light'
  },

  // Page-specific SEO configurations
  pages: {
    home: {
      title: 'Venezuelan Association at OU | Venezuelan Culture & Community',
      description: 'Join the vibrant Venezuelan community at the University of Oklahoma. Discover our cultural events, scholarships, and community activities. Experience Venezuelan culture in Norman, OK.',
      keywords: 'Venezuelan Association, OU, University of Oklahoma, Venezuelan culture, Norman OK, student organization, Latin American community, scholarships, cultural events',
      priority: 1.0,
      changefreq: 'weekly'
    },
    aboutUs: {
      title: 'About Us | Venezuelan Association at OU',
      description: 'Learn about the Venezuelan Association at OU, our mission, values, and commitment to fostering Venezuelan culture and community at the University of Oklahoma.',
      keywords: 'about VAOU, Venezuelan Association mission, OU student organization, Venezuelan community Norman',
      priority: 0.8,
      changefreq: 'monthly'
    },
    history: {
      title: 'Our History | Venezuelan Association at OU',
      description: 'Explore the rich history of the Venezuelan Association at OU since 2004. View our past events, cultural celebrations, and community milestones.',
      keywords: 'VAOU history, Venezuelan Association events, OU cultural history, Venezuelan community timeline',
      priority: 0.9,
      changefreq: 'weekly'
    },
    scholarships: {
      title: 'Scholarships | Venezuelan Association at OU',
      description: 'Discover scholarship opportunities for Venezuelan students at the University of Oklahoma. Learn about eligibility, application process, and financial support.',
      keywords: 'Venezuelan scholarships, OU financial aid, student scholarships, Venezuelan student support',
      priority: 0.8,
      changefreq: 'monthly'
    },
    joinUs: {
      title: 'Join Us | Venezuelan Association at OU',
      description: 'Become part of the Venezuelan Association at OU. Join our community, attend events, and connect with fellow Venezuelan students and culture enthusiasts.',
      keywords: 'join VAOU, Venezuelan Association membership, OU student groups, Venezuelan community join',
      priority: 0.8,
      changefreq: 'monthly'
    }
  },

  // Gallery page SEO patterns
  gallery: {
    titlePattern: '{eventName} {year} | Venezuelan Association at OU',
    descriptionPattern: 'View photos and memories from {eventName} {year}, a special event hosted by the Venezuelan Association at OU.',
    keywordsPattern: '{eventName}, {year}, Venezuelan Association events, OU cultural events, Venezuelan community photos',
    priority: 0.7,
    changefreq: 'monthly'
  },

  // Open Graph configuration
  openGraph: {
    type: 'website',
    siteName: 'Venezuelan Association at OU',
    image: 'https://vaou.org/images/logos/VA_Logo.png',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Venezuelan Association at OU Logo'
  },

  // Twitter Card configuration
  twitterCard: {
    card: 'summary_large_image',
    site: '@vaou_org',
    creator: '@vaou_org'
  },

  // Structured data types
  structuredData: {
    organization: {
      '@type': 'Organization',
      name: 'Venezuelan Association at OU',
      url: 'https://vaou.org',
      logo: 'https://vaou.org/images/logos/VA_Logo.png',
      description: 'We are dedicated to fostering a vibrant community by sharing Venezuelan culture and traditions with students, faculty, and the wider community.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Norman',
        addressRegion: 'OK',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'va@groups.ou.edu',
        contactType: 'general'
      },
      sameAs: [
        'https://www.facebook.com/venezuelanassociation/',
        'https://www.instagram.com/va_ou_/',
        'https://www.linkedin.com/company/vaou/',
        'https://www.tiktok.com/@afv_ou'
      ],
      foundingDate: '2004',
      location: {
        '@type': 'Place',
        name: 'University of Oklahoma',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Norman',
          addressRegion: 'OK',
          addressCountry: 'US'
        }
      }
    },
    website: {
      '@type': 'WebSite',
      name: 'Venezuelan Association at OU',
      url: 'https://vaou.org',
      description: 'Official website of the Venezuelan Association at the University of Oklahoma',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://vaou.org/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  },

  // Performance and Core Web Vitals targets
  performance: {
    targetLCP: 2.5, // Largest Contentful Paint (seconds)
    targetFID: 100, // First Input Delay (milliseconds)
    targetCLS: 0.1, // Cumulative Layout Shift
    targetFCP: 1.8  // First Contentful Paint (seconds)
  },

  // Image optimization settings
  images: {
    formats: ['webp', 'jpg', 'png'],
    sizes: [320, 640, 768, 1024, 1200, 1920],
    quality: 85,
    lazyLoading: true
  }
}

// Helper function to generate gallery page meta data
export const generateGalleryMeta = (year, eventName) => {
  const eventDisplayName = eventName.replace(/([A-Z])/g, ' $1').trim()
  
  return {
    title: seoConfig.gallery.titlePattern.replace('{eventName}', eventDisplayName).replace('{year}', year),
    description: seoConfig.gallery.descriptionPattern.replace('{eventName}', eventDisplayName).replace('{year}', year),
    keywords: seoConfig.gallery.keywordsPattern.replace('{eventName}', eventDisplayName).replace('{year}', year),
    priority: seoConfig.gallery.priority,
    changefreq: seoConfig.gallery.changefreq
  }
}

// Helper function to get page meta data
export const getPageMeta = (pageName) => {
  return seoConfig.pages[pageName] || seoConfig.pages.home
}
