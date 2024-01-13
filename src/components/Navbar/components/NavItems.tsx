import { type Routes } from '@/routes/registerRoutes'
import { NavLink } from 'react-router-dom'

export function NavItems({
    routePath,
    routeName,
    extraStyles,
    onCloseMobileMenu,
}: {
    routePath: Routes
    routeName: string
    extraStyles?: React.ComponentProps<'div'>['className']
    onCloseMobileMenu?: () => void
}) {
    return (
        <li
            className={`p-2 mr-4 text-white hover:text-blue-400 cursor-pointer ${extraStyles}`}
        >
            <NavLink
                to={routePath}
                onClick={onCloseMobileMenu ?? undefined}
                className={({ isActive }) => (isActive ? 'text-blue-400' : '')}
            >
                {routeName}
            </NavLink>
        </li>
    )
}
