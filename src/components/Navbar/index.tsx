import { useState } from 'react'
import Icon from '../../images/TF/hero.png'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useControlNavbar } from './hooks/useControlNavbar'
import { NavItems } from './components/NavItems'

export function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const { showNavBar } = useControlNavbar({ openMobileMenu })

  return (
    <nav
      className={`w-full h-20  md:backdrop-blur-sm md:bg-inherit bg-white border-b-2 border-stone-300 drop-shadow-2xl z-20 sticky top-0 right-0 left-0 sm:h-auto flex flex-col sm:flex-row items-center justify-between transition-transform duration-300 ${showNavBar}`}
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
            className="h-[35px] w-[35px] hidden sm:flex drop-shadow-green "
          />
          <span className="ml-2 mt-2 sm:mt-0 text-black font-semibold text-xl">
            TF Solutions
          </span>
        </NavLink>
        <nav className="flex">
          <ul className="sm:flex justify-center hidden">
            <NavItems routePath="/" routeName="Home" />
            <NavItems routePath="/about" routeName="Sobre" />
            <NavItems routePath="/services" routeName="Serviços" />
            <NavItems routePath="/contact" routeName="Contato" />
          </ul>
        </nav>
        <nav className="flex">
          <button
            onClick={() => setOpenMobileMenu((prevState) => !prevState)}
            className="sm:hidden block"
          >
            <GiHamburgerMenu size={30} className="mt-2 mr-2 text-black " />
          </button>
        </nav>
      </div>

      {/* desktop nav end */}
      <nav
        className={`${openMobileMenu ? 'none' : 'hidden'}  h-[49rem] w-full bg-white`}
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
            routeName="Sobre"
            extraStyles="font-semibold pl-8 pb-4"
            onCloseMobileMenu={() => {
              if (openMobileMenu) {
                setOpenMobileMenu(false)
              }
            }}
          />
          <NavItems
            routePath="/services"
            routeName="Serviços"
            extraStyles="font-semibold pl-8 pb-4"
            onCloseMobileMenu={() => {
              if (openMobileMenu) {
                setOpenMobileMenu(false)
              }
            }}
          />
          <NavItems
            routePath="/contact"
            routeName="Contato"
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
