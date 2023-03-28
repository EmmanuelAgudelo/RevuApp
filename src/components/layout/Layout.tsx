import { Navbar } from "./Navbar";

interface IProps {
  children : JSX.Element | JSX.Element[]
}
export const Layout = ({children}:IProps) => {
  return (
    <>
      <Navbar/>
      <main>
        {children}
      </main>
    </>
  )
}
