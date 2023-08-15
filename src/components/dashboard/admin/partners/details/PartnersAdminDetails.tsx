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

  const { findBussinessesByIdUser, resetBusiness } = useStore(businesseStore);
  const { setOption, option } = useStore(optionStore);

  useEffect(() => {
    if (id) {
      findBussinessesByIdUser(id);
    }

    return () => {
      setOption('');
      resetBusiness();
    }
  }, []);

  return (
    <div className="partnersDetails">
      <section className="partnersDetails__headquarters">
        <DetailsBranch />
      </section>
      <section className='partnersDetails__cards'>
        <PartnerInfo />
        {option !== '' &&
          <>
            <PartnerSalesProm />
            <PartnerSales />
            <PartnerRatings />
          </>
        }

      </section>
    </div>
  )
}
