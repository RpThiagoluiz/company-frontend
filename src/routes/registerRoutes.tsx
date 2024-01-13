import { About } from '@/Pages/About'
import { Contact } from '@/Pages/Contact'
import { Home } from '@/Pages/Home'
import { Services } from '@/Pages/Services'

export type Routes = '/' | '/about' | '/services' | '/contact'

export const routes: {
    path: Routes
    component: JSX.Element
}[] = [
    { path: '/', component: <Home /> },
    { path: '/about', component: <About /> },
    { path: '/services', component: <Services /> },
    { path: '/contact', component: <Contact /> },
]
