import { useEffect } from 'react';
import { NavbarProfilePartner } from './NavbarProfilePartner'
import { useStore } from 'zustand';
import { businesseStore } from '../../../../store';

interface IProps {
  children: JSX.Element | JSX.Element[]
}

export const LayoutProfilePartner = ({ children }: IProps) => {

  const { findBusinessesByOwner } = useStore(businesseStore);

  useEffect(() => {
    findBusinessesByOwner();
  }, [])
  
  return (
    <div className="layoutProfile">
      <NavbarProfilePartner />
      {children}
    </div>
  )
}
