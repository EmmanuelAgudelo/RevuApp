import { useEffect, useState } from "react";
import { NavbarPartner } from "./NavbarPartner";
import { SidebarPartner } from "./SidebarPartner";
import { useStore } from "zustand";
import { businesseStore, authStore } from "../../../../store";

interface IProps {
    children: JSX.Element | JSX.Element[]
}
export const LayoutPartner = ({ children }: IProps) => {

    const [showMenu, setShowMenu] = useState<boolean>(false);
    const { findBusinessesByOwner } = useStore(businesseStore);

    useEffect(() => {
        findBusinessesByOwner();
    }, [])

    
    const handlecollapse = () => {
        setShowMenu(!showMenu);
    };



    return (
        <div className="layoutPartner">
            <SidebarPartner showMenu={showMenu} onUpdate={handlecollapse} />
            <main className="layoutPartner__main">
                <NavbarPartner onUpdate={handlecollapse} />
                {children}
            </main>
        </div>
    );
};
