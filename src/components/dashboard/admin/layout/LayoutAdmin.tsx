import { NavbarAdmin } from "./NavbarAdmin";
import { SidebarAdmin } from "./SidebarAdmin";

interface IProps {
    children: JSX.Element | JSX.Element[]
}
export const LayoutAdmin = ({ children }: IProps) => {
    return (
        <div className="layoutAdmin">
            <SidebarAdmin />
            <main className="layoutAdmin__main">
                <NavbarAdmin/>
                {children}
            </main>
        </div>
    );
};
