// Site configuration constants
export const SITE_CONFIG = {
  title: 'Venezuelan Association at OU',
  description: 'We are dedicated to fostering a vibrant community by sharing Venezuelan culture and traditions with students, faculty, and the wider community.',
  socialLinks: {
    facebook: 'https://www.facebook.com/venezuelanassociation/',
    instagram: 'https://www.instagram.com/va_ou_/',
    linkedin: 'https://www.linkedin.com/company/vaou/',
    tiktok: 'https://www.tiktok.com/@afv_ou',
    whatsapp: 'https://chat.whatsapp.com/HAlfHsPfrAM7ghg9oU3X41',
    youtube: 'https://www.youtube.com/@afv_ou',
    email: 'mailto:va@groups.ou.edu',
    ou: 'https://ou.campuslabs.com/engage/organization/venezuelan-association'
  },
  navigation: [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/history', label: 'History' },
    { path: '/scholarships', label: 'Scholarships' },
    { path: '/join-us', label: 'Join Us' }
  ]
};

export const CDN = import.meta.env.VITE_CDN_BASE;
