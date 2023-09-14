import { BsBank } from 'react-icons/bs'
import { useStore } from 'zustand';
import { businesseStore, optionStore, uploadFileStore } from '../../../store';
import { useEffect, useState } from 'react';
import { IBranches } from '../../../interfaces';
import { formatDate, toastError, toastSuccess } from '../../../helpers';
import { AiOutlineCheck, AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from './Modal';
import { ModalReject } from './ModalReject';

export const ModalContentBranch = () => {

    const { businessesByIdUser } = useStore(businesseStore);
    const { uploadFileAccept, uploadFileReject, uploadFileRejectResponse, reset } = useStore(uploadFileStore)
    const { option } = useStore(optionStore);
    const [branch, setBranch] = useState<IBranches>();
    const [isOpen, setIsOpen] = useState(false);
    const [body, setBody] = useState({ fileId: '', documentId: '' })


    useEffect(() => {
        if (businessesByIdUser && businessesByIdUser.branches) {
            setBranch(businessesByIdUser.branches.find((branch) => branch._id == option))
        }
    }, [businessesByIdUser, option]);

    useEffect(() => {
        if (uploadFileRejectResponse && uploadFileRejectResponse.message == 'success') {
            toastSuccess('Message send.')
            handleCloseModal();
            reset();
            if (businessesByIdUser && businessesByIdUser.branches) {
                setBranch(businessesByIdUser.branches.find((branch) => branch._id == option));
            }
        }
    }, [uploadFileRejectResponse]);


    const handleOpenModal = (fileId: string, documentId: string) => {
        setBody({ fileId: fileId, documentId: documentId })
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };


    const handleAccept = (fileId: string, documentId: string) => {
        uploadFileAccept({ id: documentId, _id: fileId })
    }

    const handleReject = (message: string) => {
        uploadFileReject({ id: body.documentId, _id: body.fileId, message: message })
    }




    return (
        <div className='branch-modal'>
            <h1 className='branch-modal__title navbarAdmin__admin'><BsBank className='branch-modal__title--icon' /> Review Legal Documents</h1>
            <div className="">
                <div className="branch-modal__conatinerTable">
                    <table className="branch-modal__table">
                        <thead>
                            <tr>
                                <th>Document</th>
                                <th>Upload Date</th>
                                <th>View</th>
                                <th>Actions</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {branch &&
                                branch.legal_documents ?
                                branch.legal_documents.files.map((file, index) => (
                                    <tr key={index}>
                                        <td>{file.document_type.toUpperCase()}</td>
                                        <td>{formatDate(file.updated_at)}</td>
                                        <td className='center'><a href={file.url} target='__blank' className='ratingsAdmin__comment' style={{ fontSize: '1.2rem', color: 'gray' }}>View Document</a></td>
                                        <td className="center">
                                            {file.status === 'PENDING_APPROVAL' ?
                                                <div className='modal-icons'>
                                                    <AiOutlineCheckCircle className='modal-icons__icon--check' size={20} style={{ cursor: 'pointer' }} onClick={() => handleAccept(file._id, branch.legal_documents.id)} />
                                                    <AiOutlineCloseCircle className='modal-icons__icon--uncheck' size={20} style={{ cursor: 'pointer' }} onClick={() => handleOpenModal(file._id, branch.legal_documents.id)} />
                                                </div>
                                                :
                                                file.status === 'ACCEPTED' ?
                                                    <AiOutlineCheck className='modal-icons__icon--check' size={20} />
                                                    :
                                                    <AiOutlineClose className='modal-icons__icon--uncheck' size={20} />
                                            }
                                        </td>
                                        <td className='center' style={{ fontSize: '1.2rem' }}>
                                            {file.status === 'PENDING_APPROVAL' ?
                                                <>
                                                    <span>Not yet approved or rejected</span>
                                                </>
                                                :
                                                file.status === 'ACCEPTED' ?
                                                    <span>Document Accepted</span>
                                                    :
                                                    <span>{file.error_message}</span>
                                            }
                                        </td>
                                    </tr>
                                ))
                                :
                                <tr>
                                    <td colSpan={5} style={{ borderRadius: "0 0 2rem 2rem" }} className='center'>No legal documents</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalReject uploadReject={handleReject} />
            </Modal>
        </div>
    )
}
