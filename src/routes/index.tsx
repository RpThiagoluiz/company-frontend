import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@components/Navbar'
import { routes } from './registerRoutes'
import React from 'react'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {React.Children.toArray(
                    routes.map((route) => (
                        <Route path={route.path} element={route.component} />
                    )),
                )}
            </Routes>
        </BrowserRouter>
    )
}
