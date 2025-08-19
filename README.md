# 🏛️ Venezuelan Association at OU - Official Website

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Official website for the Venezuelan Association at the University of Oklahoma** - A vibrant platform showcasing Venezuelan culture, events, and community engagement.

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Overview

The Venezuelan Association website serves as the digital home for the Venezuelan student community at the University of Oklahoma. Built with modern web technologies, it provides an engaging platform for sharing culture, events, and fostering community connections.

### 🎯 Mission
To create a digital space that celebrates Venezuelan heritage, promotes cultural exchange, and strengthens the bonds within the Venezuelan community at OU.

### 🏆 Key Achievements
- **Responsive Design**: Optimized for all devices and screen sizes
- **Cultural Showcase**: Rich gallery of events and cultural activities
- **Community Hub**: Centralized information for members and visitors
- **Modern Architecture**: Built with cutting-edge React and Vite technologies

## ✨ Features

### 🎨 **User Experience**
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI/UX**: Clean, intuitive interface following modern design principles
- **Fast Performance**: Optimized loading times and smooth interactions
- **Accessibility**: WCAG compliant design for inclusive user experience

### 📱 **Core Functionality**
- **Home Page**: Welcome section with key information and announcements
- **About Us**: Organization details, mission, and leadership information
- **History**: Interactive timeline showcasing past events and milestones
- **Scholarships**: Information about available opportunities for students
- **Join Us**: Membership information and contact details

### 🖼️ **Gallery System**
- **Year-based Organization**: Events categorized by academic year
- **Dynamic Routing**: Automatic gallery page generation
- **Image Optimization**: Responsive images with lazy loading
- **Event Archives**: Comprehensive history from 2004 to present

### 🔧 **Technical Features**
- **SEO Optimization**: Meta tags, structured data, and semantic HTML
- **Social Media Integration**: Direct links to all social platforms
- **Performance Monitoring**: Built-in performance optimization
- **Cross-browser Compatibility**: Works seamlessly across all modern browsers

## ⚙️ Tech Stack

### **Frontend Framework**
- **React 19.1.0** - Modern React with latest features and performance improvements
- **Vite 7.0.4** - Lightning-fast build tool and development server

### **Styling & UI**
- **CSS3** - Custom styling with CSS variables and modern layouts
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **Google Fonts** - Inter font family for consistent typography

### **Routing & Navigation**
- **React Router DOM 7.7.1** - Client-side routing with nested routes
- **Dynamic Route Generation** - Automated gallery page creation

### **Development Tools**
- **ESLint 9.30.1** - Code quality and consistency
- **TypeScript Support** - Type definitions for React components
- **Hot Module Replacement** - Instant updates during development

### **Deployment & Hosting**
- **AWS Amplify** - CI/CD pipeline and hosting
- **GitHub Integration** - Automated deployments from main branch

## 📁 Project Structure

```
va_website/
├── 📁 src/
│   ├── 📁 components/          # Reusable UI components
│   │   ├── 📁 common/         # Error boundaries, shared components
│   │   ├── 📁 layout/         # Header, footer, main layout
│   │   └── 📁 ui/             # UI components (buttons, carousels, etc.)
│   ├── 📁 pages/              # Main page components
│   │   ├── 📁 aboutUs/        # About Us page
│   │   ├── 📁 history/        # History page with galleries
│   │   ├── 📁 home/           # Home page
│   │   ├── 📁 joinUs/         # Join Us page
│   │   └── 📁 scholarships/   # Scholarships page
│   ├── 📁 data/               # Static data and JSON files
│   ├── 📁 routes/             # Route configuration
│   ├── 📁 utils/              # Utility functions and helpers
│   ├── 📁 constants/          # Site configuration and constants
│   └── 📁 assets/             # Images and static assets
├── 📁 public/                 # Public assets and images
├── 📁 dist/                   # Build output (generated)
├── 📄 package.json            # Dependencies and scripts
├── 📄 vite.config.js          # Vite configuration
├── 📄 index.html              # Main HTML entry point
└── 📄 README.md               # This file
```

## 🚀 Getting Started

### **Prerequisites**
- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher
- **Git** for version control

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/va_website.git
   cd va_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint for code quality
```

## 🛠️ Development

### **Code Style**
- **ESLint Configuration**: Enforces consistent code style and best practices
- **Component Structure**: Organized, reusable components with clear responsibilities
- **CSS Organization**: Modular CSS with consistent naming conventions

### **Adding New Features**
1. **Create Components**: Add new components in the appropriate directory
2. **Update Routes**: Modify `galleryRoutes.js` for new gallery pages
3. **Add Data**: Update JSON files for new content
4. **Test Locally**: Ensure everything works before committing

### **Gallery System**
The gallery system automatically generates pages based on the `galleryRoutes.js` configuration:
- **Year-based Organization**: Events are grouped by academic year
- **Dynamic Imports**: Components are imported automatically
- **Consistent Structure**: All galleries follow the same pattern

## 🚀 Deployment

### **AWS Amplify**
The project is configured for automatic deployment via AWS Amplify:
- **Automatic Builds**: Triggers on every push to main branch
- **Environment Variables**: Configured for production deployment
- **CDN Distribution**: Global content delivery for fast loading

### **Build Process**
1. **Install Dependencies**: `npm ci` for clean installs
2. **Build Application**: `npm run build` creates optimized production files
3. **Deploy to CDN**: Automatic deployment to AWS CloudFront

### **Environment Configuration**
- **Development**: Local development with hot reloading
- **Production**: Optimized build with minification and compression
- **Staging**: Test environment for pre-production validation

## 🤝 Contributing

### **Development Team**
- **Lead Developer**: [Yul Castro Barazarte](mailto:yul@misowebs.com)
- **Project Manager**: Venezuelan Association Executive Board
- **Design Team**: VA Marketing Committee

### **Contribution Guidelines**
While this is primarily an internal project, contributions from VA members are welcome:
1. **Fork the repository** (if external access is granted)
2. **Create a feature branch** for your changes
3. **Follow coding standards** and ESLint rules
4. **Test thoroughly** before submitting changes
5. **Submit a pull request** with clear description

### **Code Review Process**
- All changes require review by the lead developer
- Testing on multiple devices and browsers
- Performance impact assessment
- Accessibility compliance verification

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **Copyright Notice**
© 2025 Venezuelan Association at OU. All rights reserved.

## 📞 Contact & Support

### **Organization Contact**
- **Email**: [va@groups.ou.edu](mailto:va@groups.ou.edu)
- **Website**: [vaou.edu](https://vaou.edu)
- **Social Media**: [@va_ou_](https://instagram.com/va_ou_)

---

<div align="center">

**Built with ❤️ for the Venezuelan Community**

*Promoting culture, fostering community, building connections*

</div>
