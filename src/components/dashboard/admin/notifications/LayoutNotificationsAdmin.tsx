import { NavbarNotifications } from "./NavbarNotifications"

interface IProps {
    children: JSX.Element | JSX.Element[]
}

export const LayoutNotificationsAdmin = ({ children }: IProps) => {

    return (
        <div className="layoutProfile">
            <NavbarNotifications />
            {children}
        </div>
    )
}
