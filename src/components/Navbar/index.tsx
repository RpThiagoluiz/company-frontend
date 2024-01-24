import { useState } from 'react'
import Icon from '../../images/level.png'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useControlNavbar } from './hooks/useControlNavbar'
import { NavItems } from './components/NavItems'

export function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const { showNavBar } = useControlNavbar({ openMobileMenu })

    return (
        <nav
            className={`w-full h-20 bg-gray-900 z-20 sticky top-0 right-0 left-0 sm:h-auto flex flex-col sm:flex-row items-center justify-between transition-transform duration-300 ${showNavBar}`}
        >
            {/* dektop nav */}
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-5">
                <NavLink
                    to="/"
                    className="flex items-center"
                    onClick={() => {
                        if (openMobileMenu) {
                            setOpenMobileMenu(false)
                        }
                    }}
                >
                    <img
                        src={Icon}
                        alt="icon"
                        className="h-[35px] w-[35px] hidden sm:flex"
                    />
                    <span className="ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
                        TF Solutions
                    </span>
                </NavLink>
                <nav className="flex">
                    <ul className="sm:flex justify-center hidden">
                        <NavItems routePath="/" routeName="Home" />
                        <NavItems routePath="/about" routeName="About" />
                        <NavItems routePath="/services" routeName="Services" />
                        <NavItems routePath="/contact" routeName="Contact" />
                    </ul>
                </nav>
                <nav className="flex">
                    <button
                        onClick={() =>
                            setOpenMobileMenu((prevState) => !prevState)
                        }
                        className="sm:hidden block"
                    >
                        <GiHamburgerMenu
                            size={30}
                            className="mt-2 mr-2 text-white/70"
                        />
                    </button>
                </nav>
            </div>

            {/* desktop nav end */}
            <nav
                className={`${openMobileMenu ? 'none' : 'hidden'}  h-[49rem] w-full bg-gray-900`}
            >
                <ul>
                    <NavItems
                        routePath="/"
                        routeName="Home"
                        extraStyles="font-semibold pl-8 pb-4"
                        onCloseMobileMenu={() => {
                            if (openMobileMenu) {
                                setOpenMobileMenu(false)
                            }
                        }}
                    />
                    <NavItems
                        routePath="/about"
                        routeName="About"
                        extraStyles="font-semibold pl-8 pb-4"
                        onCloseMobileMenu={() => {
                            if (openMobileMenu) {
                                setOpenMobileMenu(false)
                            }
                        }}
                    />
                    <NavItems
                        routePath="/services"
                        routeName="Services"
                        extraStyles="font-semibold pl-8 pb-4"
                        onCloseMobileMenu={() => {
                            if (openMobileMenu) {
                                setOpenMobileMenu(false)
                            }
                        }}
                    />
                    <NavItems
                        routePath="/contact"
                        routeName="Contact"
                        extraStyles="font-semibold pl-8 pb-4"
                        onCloseMobileMenu={() => {
                            if (openMobileMenu) {
                                setOpenMobileMenu(false)
                            }
                        }}
                    />
                </ul>
                {/* profile section */}

                <div className="flex justify-end"></div>
                <div className="flex justify-center">
                    <p className="m-[25px] text-gray-100/30 text-sm">
                        All Rights Reserved - TF Solutions
                    </p>
                </div>
            </nav>
        </nav>
    )
}
