import { FaHamburger } from "react-icons/fa"
import { HiMenu, HiOutlineDesktopComputer } from "react-icons/hi"
import { getLocalStorage, setLocalStorage } from "../../../../localstorage"
import { useEffect, useState } from "react"

interface Props {
  onUpdate: () => void;
}

export const NavbarAdmin = ({onUpdate}:Props) => {

  return (
    <div className="navbarAdmin">
      <p className="navbarAdmin__text"><HiOutlineDesktopComputer size={30} style={{marginRight:10,color:'#1FBAAC'}}/>Vista general</p>
      <p className="navbarAdmin__hamburguer"><HiMenu size={30} style={{marginRight:10,color:'#FFF'}} onClick={onUpdate}/></p>
      <p className="navbarAdmin__admin">Administrador</p>
      <div className="navbarAdmin__logo">
        <img src="/images/logos/logo-white.svg" alt="Logo" />
      </div>
    </div>
  )
}
