import { useEffect } from "react";
import { HiMenu, HiOutlineDesktopComputer } from "react-icons/hi"
import { useLocation } from "react-router-dom";
import { getRoute } from "../../../../helpers";

interface Props {
  onUpdate: () => void;
}

export const NavbarAdmin = ({onUpdate}:Props) => {

  const {pathname} = useLocation();

  return (
    <div className="navbarAdmin">
      <p className="navbarAdmin__text"><HiOutlineDesktopComputer size={30} style={{marginRight:10,color:'#1FBAAC'}}/>{getRoute(pathname)}</p>
      <p className="navbarAdmin__hamburguer"><HiMenu size={30} style={{marginRight:10,color:'#FFF'}} onClick={onUpdate}/></p>
      <p className="navbarAdmin__admin">Admin</p>
      <div className="navbarAdmin__logo">
        <img src="/images/logos/logo-white.svg" alt="Logo" />
      </div>
    </div>
  )
}
