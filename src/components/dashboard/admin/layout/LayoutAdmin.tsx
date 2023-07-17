import { useEffect, useState } from "react";
import { NavbarAdmin } from "./NavbarAdmin";
import { SidebarAdmin } from "./SidebarAdmin";

interface IProps {
    children: JSX.Element | JSX.Element[]
}
export const LayoutAdmin = ({ children }: IProps) => {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handlecollapse = () => {
        setShowMenu(!showMenu); 
      };

    return (
        <div className="layoutAdmin">
            <SidebarAdmin showMenu={showMenu} onUpdate={handlecollapse}/>
            <main className="layoutAdmin__main">
                <NavbarAdmin onUpdate={handlecollapse}/>
                {children}
            </main>
        </div>
    );
};
