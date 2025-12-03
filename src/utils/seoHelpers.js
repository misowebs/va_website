/**
 * SEO Helper Functions
 * Centralized utilities for managing SEO metadata, structured data, and optimization
 */

/**
 * Generate Event structured data for gallery pages
 * @param {Object} eventData - Event information
 * @returns {Object} JSON-LD structured data
 */
export function generateEventSchema(eventData) {
  const {
    name,
    description,
    startDate,
    endDate,
    location = 'University of Oklahoma, Norman, OK',
    images = [],
    url,
    organizer = 'Venezuelan Association at OU'
  } = eventData;

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate: endDate || startDate,
    location: {
      '@type': 'Place',
      name: location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Norman',
        addressRegion: 'OK',
        addressCountry: 'US'
      }
    },
    image: images,
    url,
    organizer: {
      '@type': 'Organization',
      name: organizer,
      url: 'https://vaou.org'
    },
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled'
  };
}

/**
 * Generate BreadcrumbList structured data
 * @param {Array} breadcrumbs - Array of breadcrumb items {name, url}
 * @returns {Object} JSON-LD structured data
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
}

/**
 * Generate ImageObject structured data
 * @param {Object} imageData - Image information
 * @returns {Object} JSON-LD structured data
 */
export function generateImageSchema(imageData) {
  const { url, caption, description, width, height } = imageData;

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    url,
    caption,
    description,
    width,
    height,
    author: {
      '@type': 'Organization',
      name: 'Venezuelan Association at OU'
    }
  };
}

/**
 * Format event name for SEO (convert camelCase to readable text)
 * @param {string} eventName - Event name in camelCase
 * @returns {string} Formatted event name
 */
export function formatEventName(eventName) {
  return eventName
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/\s+/g, ' ');
}

/**
 * Generate meta description for gallery pages
 * @param {string} eventName - Event name
 * @param {string} year - Event year
 * @returns {string} Meta description
 */
export function generateGalleryDescription(eventName, year) {
  const formattedName = formatEventName(eventName);
  return `View photos and memories from ${formattedName} ${year}, a special event hosted by the Venezuelan Association at OU. Experience Venezuelan culture and community in Norman, Oklahoma.`;
}

/**
 * Generate alt text for images
 * @param {string} eventName - Event name
 * @param {string} year - Event year
 * @param {number} imageIndex - Image index (optional)
 * @returns {string} Alt text
 */
export function generateImageAlt(eventName, year, imageIndex = null) {
  const formattedName = formatEventName(eventName);
  const indexText = imageIndex ? ` - Photo ${imageIndex}` : '';
  return `${formattedName} ${year} - Venezuelan Association at OU event${indexText}`;
}

/**
 * Generate canonical URL
 * @param {string} path - Page path
 * @returns {string} Full canonical URL
 */
export function generateCanonicalUrl(path) {
  const baseUrl = 'https://vaou.org';
  return `${baseUrl}${path}`;
}

/**
 * Truncate text to specified length for meta descriptions
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length (default: 160)
 * @returns {string} Truncated text
 */
export function truncateText(text, maxLength = 160) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

/**
 * Generate FAQ schema for structured data
 * @param {Array} faqs - Array of {question, answer} objects
 * @returns {Object} JSON-LD structured data
 */
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Inject structured data into page
 * @param {Object} schema - JSON-LD schema object
 * @param {string} id - Unique ID for the script tag
 */
export function injectStructuredData(schema, id = 'structured-data') {
  // Remove existing script if present
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }

  // Create and inject new script
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
