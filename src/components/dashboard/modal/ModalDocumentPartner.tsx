import React, { useEffect, useState } from 'react'
import { AiOutlineCheck, AiOutlineClockCircle, AiOutlineClose, AiOutlineEye, AiOutlineInfoCircle } from 'react-icons/ai'
import { BsBank } from 'react-icons/bs'
import { HiUpload } from 'react-icons/hi'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { IBranches, IFile } from '../../../interfaces'
import { useStore } from 'zustand'
import { uploadFileStore } from '../../../store'
import { CiFolderOff } from 'react-icons/ci'
import Modal from './Modal'

interface Props {
    branch: IBranches,
    business: string
}


export const ModalDocumentPartner = ({ branch, business }: Props) => {

    const { uploadFiles, updateFile } = useStore(uploadFileStore)

    const [documents, setDocuments] = useState([
        {
            type: 'passport',
            name: 'Passport',
            description: 'Streamlines identification for procedures, travel, and international verifications. Precise and vital information',
            format: 'pdf',
            file: '',
            status: '',
            message: '',
            id: ''
        },
        {
            type: 'bank_account',
            name: 'Bank Account',
            description: 'Securely holds your financial funds for transactions and savings',
            format: 'pdf',
            file: '',
            status: '',
            message: '',
            id: ''
        },
        {
            type: 'business_license',
            name: 'Business License',
            description: 'Commercial License issued by local authorities that permits legal operation at a specific location',
            format: 'pdf',
            file: '',
            status: '',
            message: '',
            id: ''
        },
        {
            type: 'non_disclosure_agreement',
            name: 'Non-Disclosure Agreement',
            description: 'Safeguards sensitive information, preventing unauthorized disclosure.',
            format: 'pdf',
            file: '',
            status: '',
            message: '',
            id: ''
        },
        {
            type: 'copyright_statement',
            name: 'Copyright Statement',
            description: 'Documents intellectual property ownership and its legal constraints.',
            format: 'pdf',
            file: '',
            status: '',
            message: '',
            id: ''
        }
    ]);
    const isFileMissing = documents.some((document) => !document.file);
    const [selectedDocumentUrl, setSelectedDocumentUrl] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (branch && branch.legal_documents) {
            const newDocuments = [...documents];
            branch.legal_documents.files.forEach((file, index) => {
                newDocuments[index] = { ...newDocuments[index], file: file.url, status: file.status, message: file.error_message ?? '', id: file._id };
            });
            setDocuments(newDocuments); // Actualiza el estado con los documentos modificados
        }
    }, [branch]);


    const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        const number = parseInt(event.target.name);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newDocuments = [...documents];
                const file = reader.result as string;
                newDocuments[number] = { ...newDocuments[number], file: file.replace(/^data:application\/pdf;base64,/, '') };
                setDocuments(newDocuments); // Actualiza el estado con los nuevos documentos

            };
            reader.readAsDataURL(file);

        }

    };

    const handleSubmit = () => {
        const updatedFiles = documents.map(doc => ({
            documentType: doc.type,
            base64: doc.file
        }));

        const body: IFile = {
            businesseId: business,
            branchId: branch._id,
            files: updatedFiles,
        }

        uploadFiles(body)
    }

    const handleDocumentRemove = (index: number) => {
        const newDocuments = [...documents];
        newDocuments[index] = { ...newDocuments[index], file: '' };
        setDocuments(newDocuments);
    }

    const hanldeUpdateFile = (event: React.ChangeEvent<HTMLInputElement>, fileId: string) => {

        const file = event.target.files && event.target.files[0];
        const number = parseInt(event.target.name);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newDocuments = [...documents];
                const file = reader.result as string;
                newDocuments[number] = { ...newDocuments[number], file: file.replace(/^data:application\/pdf;base64,/, ''), status: 'PENDING_APPROVAL' };
                setDocuments(newDocuments); // Actualiza el estado con los nuevos documentos
                updateFile({ id: branch.legal_documents.id, _id: fileId, base64: file.replace(/^data:application\/pdf;base64,/, '') })
            };
            reader.readAsDataURL(file);
        }
    }

    //  DOCUMENT VIEW

    const handleViewDocument = (url: string) => {
        setSelectedDocumentUrl(`data:application/pdf;base64,${url}`);
        handleOpenModal();
    };

    // MODAL
    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };


    return (
        <div className='documentPartner'>
            <h1 className='documentPartner__title'><BsBank className='documentPartner__title--icon' />Upload legal documents</h1>
            <div className='documentPartner__info'><AiOutlineInfoCircle className="icon" />
                <ul>
                    <li>• You need to upload all the requested documents before saving.</li>
                    <li>• After adding the documents, you need to press the 'Save Changes' button to save the uploaded documents.</li>
                </ul>
            </div>
            <div className="">
                <div className="documentPartner__conatinerTable">
                    <table className="documentPartner__table">
                        <thead>
                            <tr>
                                <th>Document</th>
                                <th>Description</th>
                                <th>Allowed formats</th>
                                <th>State</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map((document, index) => (
                                <tr key={index}>

                                    <td>{document.name}</td>
                                    <td>
                                        <div className="description-cell">
                                            <span className="short-description">
                                                {document.description.substring(0, 20)} {/* Muestra los primeros 20 caracteres */}
                                                {document.description.length > 20 && <span className="tooltip-trigger">...</span>} {/* Agrega '...' si la descripción es más larga */}
                                            </span>
                                            {document.description.length > 20 && (
                                                <span className="full-description">
                                                    {document.description}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td>{document.format}</td>
                                    <td> {document.status === 'PENDING_APPROVAL' ?
                                        <AiOutlineClockCircle className='modal-icons__icon--pending' size={20} />
                                        :
                                        document.status === 'ACCEPTED' ?
                                            <AiOutlineCheck className='modal-icons__icon--check' size={20} />
                                            :
                                            document.status === 'REJECTED' ?
                                                <AiOutlineClose className='modal-icons__icon--uncheck' size={20} />
                                                :
                                                <CiFolderOff className='modal-icons__icon--gray' size={20} />
                                    }</td>
                                    <td className='center' style={{ fontSize: '1.2rem' }}>
                                        {document.status === 'PENDING_APPROVAL' ?
                                            <>
                                                <span>Not yet approved or rejected</span>
                                            </>
                                            :
                                            document.status === 'ACCEPTED' ?
                                                <span>Document Accepted</span>
                                                :
                                                <span>{document.message}</span>
                                        }
                                    </td>
                                    <td>
                                        {branch.legal_documents && branch.legal_documents.files.find((file) => file.document_type == document.type && file.status !== 'REJECTED') ?
                                            <>
                                                <a href={document.file} target='__blank'>
                                                    <AiOutlineEye
                                                        size={20}
                                                        style={{ color: 'gray' }}
                                                    />
                                                </a>
                                            </>
                                            :
                                            <>
                                                {document.file ?
                                                    <>
                                                        {document.status === 'REJECTED' ?
                                                            <>
                                                                <input type="file" name={index.toString()} id={index.toString()} style={{ display: 'none' }} onChange={(e) => hanldeUpdateFile(e, document.id)} accept="application/pdf" />
                                                                <label htmlFor={index.toString()} ><HiUpload size={20} style={{ cursor: 'pointer' }} title='Update' /></label>
                                                            </>
                                                            :
                                                            <>
                                                                <AiOutlineEye
                                                                    size={20}
                                                                    style={{ cursor: 'pointer' }}
                                                                    onClick={() => handleViewDocument(document.file)}
                                                                />
                                                                <IoCloseCircleOutline size={20} style={{ cursor: 'pointer' }} onClick={() => handleDocumentRemove(index)} />
                                                            </>
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        <input type="file" name={index.toString()} id={index.toString()} style={{ display: 'none' }} onChange={(e) => handleImage(e)
                                                        } accept="application/pdf" />
                                                        <label htmlFor={index.toString()} ><HiUpload size={20} style={{ cursor: 'pointer' }} title='Upload' /></label>
                                                    </>
                                                }
                                            </>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isFileMissing ? (
                <p className="error-message">Please upload all required documents.</p>
            ) : (
                <button className="btn btn--orange" onClick={handleSubmit}>
                    Save changes
                </button>
            )}



            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <div style={{ padding: '3rem' }}>
                    {selectedDocumentUrl && (
                        <div className="document-viewer">
                            <iframe src={selectedDocumentUrl} width="100%" height="500px" title="Document Viewer" />
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    )
}