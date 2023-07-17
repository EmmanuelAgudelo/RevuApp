import { useStore } from "zustand";
import { NavbarRevuSurprise } from "./NavbarRevuSurprise"
import { businesseStore } from "../../../../store";
import { useEffect } from "react";

interface IProps {
    children: JSX.Element | JSX.Element[]
}

export const LayoutRevuSurprisePartner = ({ children }: IProps) => {

    return (
        <div className="layoutProfile">
            <NavbarRevuSurprise />
            {children}
        </div>
    )
}
