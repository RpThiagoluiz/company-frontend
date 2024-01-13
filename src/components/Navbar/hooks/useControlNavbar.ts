import { useCallback, useEffect, useState } from 'react'

type Props = {
    openMobileMenu: boolean
}

export const useControlNavbar = ({ openMobileMenu }: Props) => {
    const [showNavBar, setShowNavBar] = useState('translate-y-0')
    const [lastScrollY, setLastScrollY] = useState(0)

    const controlNavbar = useCallback(() => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) {
                setShowNavBar('-translate-y-[80px]')
            } else {
                setShowNavBar('shadow-sm')
            }
        } else {
            setShowNavBar('translate-y-0')
        }
        setLastScrollY(window.scrollY)
    }, [lastScrollY])

    useEffect(() => {
        if (openMobileMenu) return

        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [openMobileMenu, controlNavbar])

    return { showNavBar }
}
