import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import { Services } from '../Pages/Services'
import { Contact } from '../Pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@components/Navbar'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
