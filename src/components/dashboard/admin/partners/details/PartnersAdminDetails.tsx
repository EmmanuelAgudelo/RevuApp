import React from 'react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { DetailsHeadquarters } from './DetailsHeadquarters'
import { PartnerInfo } from './PartnerInfo'

export const PartnersAdminDetails = () => {
  return (
    <div className="partnersDetails">
      <section className="partnersDetails__headquarters">
        <DetailsHeadquarters />
      </section>
      <section className='partnersDetails__cards'>
        <PartnerInfo/>
      </section>
    </div>
  )
}
