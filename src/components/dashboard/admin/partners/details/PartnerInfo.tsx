import { useStore } from 'zustand';
import { businesseStore } from '../../../../../store';
import { formatDate } from '../../../../../helpers';

export const PartnerInfo = () => {
    
    const { businessesByIdUser } = useStore(businesseStore);
    
    return (
        <div className="partner-info">
            <div className="partner-info__card">
                <div className="partner-info__inputs">

                    {businessesByIdUser &&
                        <>
                            <input type="text" disabled value={`Representative's profile.`} />
                            <input type="text" disabled value={`${businessesByIdUser.owner.document_type} ${businessesByIdUser.owner.document}`} />
                            <input type="text" disabled value={`${businessesByIdUser.owner.names} ${businessesByIdUser.owner.last_names}`} />
                            <input type="text" disabled value={`${businessesByIdUser.owner.cellphone}`} />
                            <input type="text" disabled value={`Date of registration: ${formatDate(businessesByIdUser.owner.created_at)}`} />
                            <input type="text" disabled value={`${businessesByIdUser.owner.email}`} />
                        </>
                    }


                </div>
            </div>
        </div>
    )
}
