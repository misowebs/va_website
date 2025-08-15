# Gallery Routes System

This system provides a centralized way to manage all gallery routes in your VA website application.

## How It Works

Instead of importing each gallery component individually in `App.jsx`, all gallery imports and routes are now managed in `src/routes/galleryRoutes.js`.

## Benefits

1. **Clean App.jsx**: No more cluttered import statements
2. **Easy Maintenance**: Add new galleries in one place
3. **Automatic Route Generation**: Routes are automatically created from the configuration
4. **Helper Functions**: Built-in utilities for filtering, searching, and organizing galleries
5. **Type Safety**: Clear structure for route configuration

## File Structure

```
src/
├── routes/
│   ├── galleryRoutes.js      # Main configuration file
│   └── README.md            # This file
├── utils/
│   └── galleryUtils.js      # Utility functions
└── App.jsx                  # Clean, simplified routing
```

## Adding a New Gallery

### Step 1: Create the Component
Create your gallery component in the appropriate year folder:
```jsx
// src/pages/history/galleries/2025/NewEvent2025.jsx
import React from 'react'

const NewEvent2025 = () => {
  return (
    <div>
      <h1>New Event 2025</h1>
      {/* Your gallery content */}
    </div>
  )
}

export default NewEvent2025
```

### Step 2: Add Import
Add the import to `galleryRoutes.js` in the appropriate year section:
```javascript
// 2025 Galleries
import VenezuelanNight2025 from '../pages/history/galleries/2025/VenezuelanNight2025'
import NewEvent2025 from '../pages/history/galleries/2025/NewEvent2025'  // Add this line
```

### Step 3: Add Route Configuration
Add the route configuration in the `galleryRoutes` array:
```javascript
// 2025 Routes
{
  path: "/2025/VenezuelanNight2025",
  element: VenezuelanNight2025,
  title: "Venezuelan Night 2025"
},
{
  path: "/2025/NewEvent2025",           // Add this route
  element: NewEvent2025,                // Add this route
  title: "New Event 2025"              // Add this route
}
```

That's it! The route will automatically be available at `/2025/NewEvent2025`.

## Available Helper Functions

### From `galleryRoutes.js`:
- `getRoutesByYear(year)` - Get all routes for a specific year
- `getAllYears()` - Get all available years

### From `galleryUtils.js`:
- `getGalleriesForYear(year)` - Get galleries for a specific year
- `getAvailableYears()` - Get all available years
- `getGalleryByPath(path)` - Find a specific gallery by path
- `getAllGalleries()` - Get all galleries with metadata
- `generateYearNavigation(year)` - Generate navigation links for a year
- `searchGalleries(searchTerm)` - Search galleries by title or path
- `getGalleriesGroupedByYear()` - Get galleries organized by year

## Example Usage

```jsx
import { getGalleriesForYear, getAvailableYears } from '../routes/galleryRoutes'
import { generateYearNavigation, searchGalleries } from '../utils/galleryUtils'

// In your component:
const MyComponent = () => {
  const availableYears = getAvailableYears()
  const galleries2024 = getGalleriesForYear('2024')
  const navigation2024 = generateYearNavigation('2024')
  const searchResults = searchGalleries('Venezuelan')

  return (
    <div>
      <h2>Available Years: {availableYears.join(', ')}</h2>
      <h3>2024 Galleries:</h3>
      {galleries2024.map(gallery => (
        <div key={gallery.path}>
          <a href={gallery.path}>{gallery.title}</a>
        </div>
      ))}
    </div>
  )
}
```

## Route Structure

Each route follows this pattern:
```javascript
{
  path: "/YYYY/EventNameYYYY",    // URL path
  element: ComponentName,         // React component
  title: "Human Readable Title"   // Display title
}
```

## Maintenance

- Keep imports organized by year
- Use consistent naming conventions
- Update this README when adding new features
- Test routes after adding new galleries

## Troubleshooting

If a route isn't working:
1. Check that the import path is correct
2. Verify the component is properly exported
3. Ensure the route configuration is added to `galleryRoutes`
4. Check that the path follows the `/YYYY/EventNameYYYY` pattern
