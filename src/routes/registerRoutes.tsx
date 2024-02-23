import { About } from '@/Pages/About'
import { Contact } from '@/Pages/Contact'
import { Home } from '@/Pages/Home'
import { InformationSecurity } from '@/Pages/InformationSecurity'
import { PrivatePolicy } from '@/Pages/PrivatePolicy'
import { Services } from '@/Pages/Services'
import { TermsAndConditions } from '@/Pages/TermsAndConditions'

export type Routes =
  | '/'
  | '/about'
  | '/services'
  | '/contact'
  | '/private-policy'
  | '/information-security'
  | '/terms-conditions'

export const routes: {
  path: Routes
  component: JSX.Element
}[] = [
  { path: '/', component: <Home /> },
  { path: '/about', component: <About /> },
  { path: '/services', component: <Services /> },
  { path: '/contact', component: <Contact /> },
  { path: '/contact', component: <Contact /> },
  { path: '/private-policy', component: <PrivatePolicy /> },
  { path: '/information-security', component: <InformationSecurity /> },
  { path: '/terms-conditions', component: <TermsAndConditions /> },
]
