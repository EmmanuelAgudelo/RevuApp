import { HiOutlineDesktopComputer } from "react-icons/hi"

export const NavbarAdmin = () => {
  return (
    <div className="navbarAdmin">
      <p className="navbarAdmin__text"><HiOutlineDesktopComputer size={30} style={{marginRight:10,color:'#1FBAAC'}}/>Vista general</p>
      <p className="navbarAdmin__admin">Administrador</p>
    </div>
  )
}
