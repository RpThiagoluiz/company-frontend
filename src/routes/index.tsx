import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@components/Navbar'
import { routes } from './registerRoutes'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/hooks/useScrollToTop'
import { NotFound } from '@/Pages/NotFound'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {React.Children.toArray(
          routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          )),
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
