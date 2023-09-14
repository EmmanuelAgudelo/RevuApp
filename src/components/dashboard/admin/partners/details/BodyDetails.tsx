import { useStore } from "zustand";
import { IBranches, IBusinesseUser } from "../../../../../interfaces";
import { optionStore } from "../../../../../store";
import { useEffect, useState } from "react";

interface Props {
    businessesByIdUser: IBusinesseUser | null,
}

export const BodyDetails = ({ businessesByIdUser }: Props) => {

    const { option } = useStore(optionStore);
    const [branch, setBranch] = useState<IBranches | null>()

    useEffect(() => {
        setBranch(businessesByIdUser?.branches.find((branch) => branch._id === option) ?? null)
    }, [option, businessesByIdUser])

    return (
        <>
            {branch ?
                <>
                    <div className='headquarters__active' style={{ marginTop: '0' }}>
                        {branch.status === 'PENDING_APPROVAL' ?
                            <span className='status--orange'>Pending</span>
                            : branch.status === 'INACTIVE' ?
                                <span className='status--red'>Inactive</span>
                                :
                                <span className='status--green'>Active</span>
                        }
                    </div>
                    <div className="headquarters__body-inputs">
                        <input type="text" disabled value={branch.address} />
                        <input type="text" disabled value={branch.phone} />
                    </div></>
                :
                <div className='headquarters__null'>
                    <span>Select a branch</span>
                </div>
            }
        </>
    )
}
