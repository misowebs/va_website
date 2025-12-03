/**
 * Sitemap Generator Script
 * Automatically generates sitemap.xml from route configuration
 * Run with: node scripts/generateSitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL for the website
const BASE_URL = 'https://vaou.org';

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().split('T')[0];
};

// Main pages configuration
const mainPages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about-us', priority: '0.8', changefreq: 'monthly' },
    { path: '/history', priority: '0.9', changefreq: 'weekly' },
    { path: '/scholarships', priority: '0.8', changefreq: 'monthly' },
    { path: '/join-us', priority: '0.8', changefreq: 'monthly' }
];

// Gallery pages by year
const galleryPages = {
    2025: ['VenezuelanNight'],
    2024: ['Arepada', 'BackyardGrill', 'EveOfNations', 'FiestasDeLasAmericas', 'NocheDeGaita', 'SimonMovieNight', 'VenezuelanNight'],
    2023: ['Arepada', 'ArepadaGameNight', 'BackyardGrill', 'BoysGirlsClubShow', 'NocheDeGaita', 'VenezuelanNight'],
    2022: ['BackyardGrill', 'BBQPartyGameNight', 'ColsaAfvCulturalNight', 'Hallacada', 'VenezuelanNight'],
    2021: ['ArepaGameNight', 'BackyardGrill', 'OpenMic'],
    2019: ['VenezuelanNight'],
    2018: ['FeriaGaitera', 'VenezuelanNight'],
    2017: ['Arepazo', 'FeriaGaitera', 'InternationalBazaar', 'Soonerthon', 'VenezuelanNight'],
    2014: ['VenezuelanNight'],
    2006: ['Gaitazo', 'PabellonDinner'],
    2005: ['PanamNight'],
    2004: ['FeriaDeLaChinita']
};

/**
 * Generate priority based on year (more recent = higher priority)
 */
function getGalleryPriority(year) {
    const currentYear = new Date().getFullYear();
    const yearDiff = currentYear - year;

    if (yearDiff === 0) return '0.7';
    if (yearDiff === 1) return '0.7';
    if (yearDiff <= 3) return '0.6';
    if (yearDiff <= 5) return '0.5';
    if (yearDiff <= 10) return '0.4';
    return '0.3';
}

/**
 * Generate sitemap XML
 */
function generateSitemap() {
    const currentDate = getCurrentDate();
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add main pages
    xml += '  <!-- Main Pages -->\n';
    mainPages.forEach(page => {
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}${page.path}</loc>\n`;
        xml += `    <lastmod>${currentDate}</lastmod>\n`;
        xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
        xml += `    <priority>${page.priority}</priority>\n`;
        xml += '  </url>\n';
        if (page.path === '/') xml += '  \n';
    });

    // Add gallery pages
    const years = Object.keys(galleryPages).sort((a, b) => b - a);

    years.forEach(year => {
        xml += `  <!-- ${year} Gallery Pages -->\n`;
        const events = galleryPages[year];
        const priority = getGalleryPriority(parseInt(year));

        events.forEach(event => {
            xml += '  <url>\n';
            xml += `    <loc>${BASE_URL}/${year}/${event}</loc>\n`;
            xml += `    <lastmod>${currentDate}</lastmod>\n`;
            xml += `    <changefreq>monthly</changefreq>\n`;
            xml += `    <priority>${priority}</priority>\n`;
            xml += '  </url>\n';
        });
        xml += '  \n';
    });

    xml += '</urlset>';

    return xml;
}

/**
 * Write sitemap to file
 */
function writeSitemap() {
    try {
        const sitemapXml = generateSitemap();
        const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

        fs.writeFileSync(outputPath, sitemapXml, 'utf8');

        console.log('✅ Sitemap generated successfully!');
        console.log(`📁 Location: ${outputPath}`);
        console.log(`📊 Total URLs: ${mainPages.length + Object.values(galleryPages).flat().length}`);
        console.log(`📅 Last modified: ${getCurrentDate()}`);
    } catch (error) {
        console.error('❌ Error generating sitemap:', error);
        process.exit(1);
    }
}

// Run the generator
writeSitemap();
