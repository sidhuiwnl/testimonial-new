'use client'

import { usePathname } from 'next/navigation'
import Dashboard from './Dashboard'

export default function ConditionalDashboard() {
  const pathname = usePathname()

  if (pathname === '/Testimonial' || pathname === '/Tweets') {
    return <Dashboard />
  }

  return null
}