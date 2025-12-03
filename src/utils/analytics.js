/**
 * Google Analytics Helper Functions
 * Utilities for tracking page views, events, and user interactions
 */

/**
 * Track a page view
 * @param {string} path - Page path
 * @param {string} title - Page title
 */
export function trackPageView(path, title) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
            page_path: path,
            page_title: title
        });
    }
}

/**
 * Track a custom event
 * @param {string} eventName - Name of the event
 * @param {Object} eventParams - Event parameters
 */
export function trackEvent(eventName, eventParams = {}) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
}

/**
 * Track button clicks
 * @param {string} buttonName - Name/label of the button
 * @param {string} location - Where the button is located
 */
export function trackButtonClick(buttonName, location) {
    trackEvent('button_click', {
        button_name: buttonName,
        location: location
    });
}

/**
 * Track outbound links
 * @param {string} url - Destination URL
 * @param {string} linkText - Text of the link
 */
export function trackOutboundLink(url, linkText) {
    trackEvent('outbound_link', {
        link_url: url,
        link_text: linkText
    });
}

/**
 * Track social media clicks
 * @param {string} platform - Social media platform (facebook, instagram, etc.)
 */
export function trackSocialClick(platform) {
    trackEvent('social_click', {
        platform: platform
    });
}

/**
 * Track gallery views
 * @param {string} year - Event year
 * @param {string} eventName - Event name
 */
export function trackGalleryView(year, eventName) {
    trackEvent('gallery_view', {
        event_year: year,
        event_name: eventName
    });
}

/**
 * Track form submissions
 * @param {string} formName - Name of the form
 * @param {boolean} success - Whether submission was successful
 */
export function trackFormSubmission(formName, success = true) {
    trackEvent('form_submission', {
        form_name: formName,
        success: success
    });
}

/**
 * Track scholarship page views
 */
export function trackScholarshipView() {
    trackEvent('scholarship_view', {
        page: 'scholarships'
    });
}

/**
 * Track join us page interactions
 * @param {string} action - Type of interaction (view, email_click, etc.)
 */
export function trackJoinUsInteraction(action) {
    trackEvent('join_us_interaction', {
        action: action
    });
}

/**
 * Track search queries (if search functionality is added)
 * @param {string} query - Search query
 * @param {number} resultsCount - Number of results
 */
export function trackSearch(query, resultsCount) {
    trackEvent('search', {
        search_term: query,
        results_count: resultsCount
    });
}

/**
 * Track file downloads
 * @param {string} fileName - Name of the downloaded file
 * @param {string} fileType - Type of file (pdf, jpg, etc.)
 */
export function trackDownload(fileName, fileType) {
    trackEvent('file_download', {
        file_name: fileName,
        file_type: fileType
    });
}

/**
 * Track video plays (if videos are added)
 * @param {string} videoTitle - Title of the video
 */
export function trackVideoPlay(videoTitle) {
    trackEvent('video_play', {
        video_title: videoTitle
    });
}

/**
 * Track scroll depth
 * @param {number} percentage - Scroll percentage (25, 50, 75, 100)
 */
export function trackScrollDepth(percentage) {
    trackEvent('scroll', {
        percent_scrolled: percentage
    });
}

// Initialize scroll tracking
let scrollTracked = {
    25: false,
    50: false,
    75: false,
    100: false
};

if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        Object.keys(scrollTracked).forEach(threshold => {
            if (scrollPercentage >= threshold && !scrollTracked[threshold]) {
                scrollTracked[threshold] = true;
                trackScrollDepth(parseInt(threshold));
            }
        });
    });
}
