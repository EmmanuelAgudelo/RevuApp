import { useEffect, useState } from 'react'
import { DetailsBranch } from './DetailsBranch'
import { PartnerInfo } from './PartnerInfo'
import { useParams } from 'react-router-dom'
import { useStore } from 'zustand'
import { businesseStore, optionStore } from '../../../../../store'
import { PartnerSales } from './PartnerSales'
import { PartnerRatings } from './PartnerRatings'
import { PartnerSalesProm } from './PartnerSalesProm'

export const PartnersAdminDetails = () => {

  // Recibir parámetro que viene por url

  const { id } = useParams();

  // Buscar usuario que viene con esa url

  const { findBussinessesByIdUser } = useStore(businesseStore);
  const { setOption } = useStore(optionStore);

  useEffect(() => {
    if (id) {
      findBussinessesByIdUser(id);
    }

    return() =>{
      setOption('')
    }
  }, []);

  return (
    <div className="partnersDetails">
      <section className="partnersDetails__headquarters">
        <DetailsBranch/>
      </section>
      <section className='partnersDetails__cards'>
        <PartnerInfo />
        <PartnerSalesProm />
        <PartnerSales />
        <PartnerRatings/>
      </section>
    </div>
  )
}
