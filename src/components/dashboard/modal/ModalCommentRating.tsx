import { useFormik } from 'formik';
import React from 'react'
import { AiOutlineComment } from 'react-icons/ai'
import { IRating } from '../../../interfaces';

interface Props {
    comment: string | undefined;
}

export const ModalCommentRating = ({comment}:Props) => {

    return (
        <>
            <h1 className='documentPartner__title'><AiOutlineComment className='documentPartner__title--icon' />Comment</h1>
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <textarea
                                style={{ marginLeft: '1.5rem', background: '#fff', fontSize: '1.5rem'}}
                                placeholder="Mensaje"
                                id="message"
                                value={comment}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
        </>
    )
}
