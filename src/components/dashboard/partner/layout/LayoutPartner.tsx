import { NavbarPartner } from "./NavbarPartner";
import { SidebarPartner } from "./SidebarPartner";

interface IProps {
    children: JSX.Element | JSX.Element[]
}
export const LayoutPartner = ({ children }: IProps) => {
    return (
        <div className="layoutPartner">
            <SidebarPartner />
            <main className="layoutPartner__main">
                <NavbarPartner/>
                {children}
            </main>
        </div>
    );
};
