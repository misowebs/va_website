// Gallery Utilities
// This file shows how to use the centralized gallery routes system

import { galleryRoutes, getRoutesByYear, getAllYears } from '../routes/galleryRoutes'

// Example: Get all galleries for a specific year
export const getGalleriesForYear = (year) => {
  return getRoutesByYear(year)
}

// Example: Get all available years
export const getAvailableYears = () => {
  return getAllYears()
}

// Example: Get a specific gallery by path
export const getGalleryByPath = (path) => {
  return galleryRoutes.find(route => route.path === path)
}

// Example: Get all galleries with their metadata
export const getAllGalleries = () => {
  return galleryRoutes.map(route => ({
    path: route.path,
    title: route.title,
    year: route.path.split('/')[1],
    eventName: route.path.split('/')[2]
  }))
}

// Example: Generate navigation links for a year
export const generateYearNavigation = (year) => {
  const yearRoutes = getRoutesByYear(year)
  return yearRoutes.map(route => ({
    to: route.path,
    label: route.title,
    key: route.path
  }))
}

// Example: Search galleries by title
export const searchGalleries = (searchTerm) => {
  const term = searchTerm.toLowerCase()
  return galleryRoutes.filter(route => 
    route.title.toLowerCase().includes(term) ||
    route.path.toLowerCase().includes(term)
  )
}

// Example: Get galleries grouped by year
export const getGalleriesGroupedByYear = () => {
  const grouped = {}
  galleryRoutes.forEach(route => {
    const year = route.path.split('/')[1]
    if (!grouped[year]) {
      grouped[year] = []
    }
    grouped[year].push(route)
  })
  return grouped
}
