import { useEffect } from 'react'

// Performance monitoring component for Core Web Vitals
function PerformanceMonitor() {
    useEffect(() => {
        // Only run in production and if web vitals are supported
        if (process.env.NODE_ENV === 'production' && 'PerformanceObserver' in window) {
            // Monitor Largest Contentful Paint (LCP)
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries()
                const lastEntry = entries[entries.length - 1]
                
                if (lastEntry) {
                    const lcp = lastEntry.startTime
                    console.log('LCP:', lcp)
                    
                    // Send to analytics if LCP is poor
                    if (lcp > 2500) {
                        console.warn('Poor LCP detected:', lcp)
                        // You can send this to Google Analytics or other analytics services
                    }
                }
            })
            
            try {
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
            } catch (e) {
                console.warn('LCP monitoring not supported')
            }
            
            // Monitor First Input Delay (FID)
            const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries()
                entries.forEach(entry => {
                    const fid = entry.processingStart - entry.startTime
                    console.log('FID:', fid)
                    
                    if (fid > 100) {
                        console.warn('Poor FID detected:', fid)
                    }
                })
            })
            
            try {
                fidObserver.observe({ entryTypes: ['first-input'] })
            } catch (e) {
                console.warn('FID monitoring not supported')
            }
            
            // Monitor Cumulative Layout Shift (CLS)
            let clsValue = 0
            let clsEntries = []
            
            const clsObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries()
                entries.forEach(entry => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value
                        clsEntries.push(entry)
                    }
                })
                
                console.log('CLS:', clsValue)
                
                if (clsValue > 0.1) {
                    console.warn('Poor CLS detected:', clsValue)
                }
            })
            
            try {
                clsObserver.observe({ entryTypes: ['layout-shift'] })
            } catch (e) {
                console.warn('CLS monitoring not supported')
            }
            
            // Monitor First Contentful Paint (FCP)
            const fcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries()
                const firstEntry = entries[0]
                
                if (firstEntry) {
                    const fcp = firstEntry.startTime
                    console.log('FCP:', fcp)
                    
                    if (fcp > 1800) {
                        console.warn('Poor FCP detected:', fcp)
                    }
                }
            })
            
            try {
                fcpObserver.observe({ entryTypes: ['first-contentful-paint'] })
            } catch (e) {
                console.warn('FCP monitoring not supported')
            }
            
            // Cleanup observers on unmount
            return () => {
                try {
                    lcpObserver.disconnect()
                    fidObserver.disconnect()
                    clsObserver.disconnect()
                    fcpObserver.disconnect()
                } catch (e) {
                    // Ignore cleanup errors
                }
            }
        }
    }, [])
    
    // This component doesn't render anything
    return null
}

export default PerformanceMonitor
