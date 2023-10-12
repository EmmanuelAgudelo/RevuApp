import { useEffect } from 'react'
import { DetailsBranch } from './DetailsBranch'
import { PartnerInfo } from './PartnerInfo'
import { useParams } from 'react-router-dom'
import { useStore } from 'zustand'
import { branchStore, businesseStore, optionStore, uploadFileStore } from '../../../../../store'
import { PartnerSales } from './PartnerSales'
import { PartnerRatings } from './PartnerRatings'
import { PartnerSalesProm } from './PartnerSalesProm'
import { toastSuccess } from '../../../../../helpers'
import { FiAlertTriangle } from 'react-icons/fi'

export const PartnersAdminDetails = () => {

  // Recibir parámetro que viene por url

  const { id } = useParams();

  // Buscar usuario que viene con esa url

  const { findBussinessesByIdUser, resetBusiness, businessesByIdUser } = useStore(businesseStore);
  const { uploadFileAcceptResponse, uploadFileRejectResponse, reset: resetFile } = useStore(uploadFileStore);
  const { setOption, option } = useStore(optionStore);
  const { updateBranchActiveResponse, updateBranchInactiveResponse, reset } = useStore(branchStore);


  useEffect(() => {
    if (id) {
      findBussinessesByIdUser(id);
    }

    return () => {
      setOption('');
      resetBusiness();
    }
  }, []);

  useEffect(() => {
    if (updateBranchActiveResponse && updateBranchActiveResponse.message === 'success') {
      toastSuccess('Branch activated successfully.');
      reset();
      findBussinessesByIdUser(id ?? '');
    }

    if (updateBranchInactiveResponse && updateBranchInactiveResponse.message === 'success') {
      toastSuccess('Branch desactivated successfully.');
      reset();
      findBussinessesByIdUser(id ?? '');
    }
  }, [updateBranchActiveResponse, updateBranchInactiveResponse])

  useEffect(() => {
    if (uploadFileAcceptResponse && uploadFileAcceptResponse.message == 'success') {
      toastSuccess('Legal document accepted successfully.');
      resetFile();
      findBussinessesByIdUser(id ?? '');
    }
  }, [uploadFileAcceptResponse])


  return (
    <div className="partnersDetails">
      <section className="partnersDetails__headquarters">
        <DetailsBranch />
      </section>
      <section className='partnersDetails__cards'>
        {businessesByIdUser &&
          <>
            <div className='agentForm__images'>
              <div className='agentForm__image'>
                <img src={businessesByIdUser.logo ? businessesByIdUser.logo.url : '/images/no_image.jpg'} alt="" />
                <span>Logo</span>
              </div>
              <div className='agentForm__image'>
                <img src={businessesByIdUser.cover_photo ? businessesByIdUser.cover_photo.url : '/images/no_image.jpg'} alt="" />
                <span>Cover Photo</span>
              </div>
            </div>
          </>
        }
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
