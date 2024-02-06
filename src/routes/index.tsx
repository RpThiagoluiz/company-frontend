import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@components/Navbar'
import { routes } from './registerRoutes'

import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/hooks/useScrollToTop'
export function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {React.Children.toArray(
          routes.map((route) => (
            <Route path={route.path} element={route.component} />
          )),
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
