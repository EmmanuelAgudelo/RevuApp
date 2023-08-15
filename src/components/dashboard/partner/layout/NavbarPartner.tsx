import { HiMenu } from "react-icons/hi";

interface Props {
  onUpdate: () => void;
}

export const NavbarPartner = ({onUpdate}:Props) => {

  const screenWidth = window.innerWidth;
  return (
    <div className="navbarPartner">
      <p className="navbarPartner__hamburguer"><HiMenu size={30} style={{marginRight:10,color:'#FFF'}} onClick={onUpdate}/></p>
      <p className="navbarPartner__text">Partner Portal</p>
      {screenWidth < 480 ?
      <img className="navbarPartner__image" src="/images/logos/logo-white.svg" alt="logo" />
      :
      <img className="navbarPartner__image" src="/images/logos/logo-blue.svg" alt="logo" />
      }
    </div>
  )
}
