import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineInfoCircle } from 'react-icons/ai'
import { BsBank } from 'react-icons/bs'
import { HiUpload } from 'react-icons/hi'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { IBranches, IFile } from '../../../interfaces'
import { useStore } from 'zustand'
import { uploadFileStore } from '../../../store'

interface Props {
    branch: IBranches,
    business: string
}

export const ModalDocumentPartner = ({ branch, business }: Props) => {

    const { uploadFiles } = useStore(uploadFileStore)

    const [documents, setDocuments] = useState([
        {
            type: 'passport',
            name: 'Passport',
            description: 'Streamlines identification for procedures, travel, and international verifications. Precise and vital information',
            format: 'jpeg, jpg, docx, pdf',
            file: ''
        },
        {
            type: 'bank_account',
            name: 'Bank Account',
            description: 'Securely holds your financial funds for transactions and savings',
            format: 'jpeg, jpg, docx, pdf',
            file: ''
        },
        {
            type: 'business_license',
            name: 'Business License',
            description: 'Commercial License issued by local authorities that permits legal operation at a specific location',
            format: 'pdf',
            file: ''
        }
    ]);

    const handleImage = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = event.target.files && event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newDocuments = [...documents];
                newDocuments[index] = { ...newDocuments[index], file: reader.result as string };
                setDocuments(newDocuments); // Actualiza el estado con los nuevos documentos
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        const updatedFiles = documents.filter(doc => doc.file !== '').map(doc => ({
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


    return (
        <div className='documentPartner'>
            <h1 className='documentPartner__title'><BsBank className='documentPartner__title--icon' />Upload legal documents</h1>
            <p className='documentPartner__info'><AiOutlineInfoCircle className="icon" />After adding the documents, you need to press the 'Save Changes' button to save the uploaded documents</p>
            <div className="">
                <div className="documentPartner__conatinerTable">
                    <table className="documentPartner__table">
                        <thead>
                            <tr>
                                <th>Document</th>
                                <th>Description</th>
                                <th>Allowed formats</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map((document, index) => (
                                <tr key={index}>

                                    <td>{document.name}</td>
                                    <td>{document.description}</td>
                                    <td> {document.format} </td>
                                    <td>
                                        {branch.legal_documents && branch.legal_documents.files.find((file) => file.document_type == document.type) ?
                                            <>
                                                <AiOutlineEye size={20} style={{ cursor: 'pointer' }} />
                                                <IoCloseCircleOutline size={20} style={{ cursor: 'pointer' }} />
                                            </>
                                            :
                                            <>
                                                {document.file ?
                                                    <>
                                                        <AiOutlineEye size={20} style={{ cursor: 'pointer' }} />
                                                        <IoCloseCircleOutline size={20} style={{ cursor: 'pointer' }} />
                                                    </>
                                                    :
                                                    <>
                                                        <input type="file" name="document" id="document" style={{ display: 'none' }} onChange={(e) => handleImage(e, index)} />
                                                        <label htmlFor="document" ><HiUpload size={20} style={{ cursor: 'pointer' }} /></label>
                                                    </>

                                                }
                                            </>
                                        }
                                    </td>
                                </tr>
                            )
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <button className="btn btn--orange" onClick={handleSubmit}>
                Save changes
            </button>
        </div>
    )
}
