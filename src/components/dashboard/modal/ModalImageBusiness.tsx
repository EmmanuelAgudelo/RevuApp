import { ChangeEvent, useState } from 'react';
import ReactCrop, { type Crop } from 'react-image-crop';
import { convertToBase64 } from '../../../helpers';
import { useStore } from 'zustand';
import { businesseStore } from '../../../store';
import { IFormImage } from '../../../interfaces';


interface Props {
    image: string | undefined;
    name: string | undefined;
}

export const ModalImageBusiness = ({ image, name }: Props) => {
    const { businessesByOwner, resetBusiness, uploadLogo, uploadCoverPhoto } = useStore(businesseStore);
    const [crop, setCrop] = useState<Crop>()

    const handleImage = (img: IFormImage) => {
        if (name === 'logo') {
            if (businessesByOwner) {
                uploadLogo(businessesByOwner.id, img)
            }
        }
        if (name === 'coverPhoto') {
            if (businessesByOwner) {
                uploadCoverPhoto(businessesByOwner.id, img)
            }
        }
    }

    const handleSave = () => {
        if (crop) {
            if (typeof crop.width !== 'undefined' && typeof crop.height !== 'undefined') {
                const croppedCanvas = document.createElement('canvas');
                const imageCrop = new Image();
                imageCrop.src = image ?? '';
                croppedCanvas.width = crop.width;
                croppedCanvas.height = crop.height;
                const ctx = croppedCanvas.getContext('2d');
                ctx?.drawImage(
                    imageCrop,
                    crop.x,
                    crop.y,
                    crop.width,
                    crop.height,
                    0,
                    0,
                    crop.width,
                    crop.height
                );
                
                const croppedImage = croppedCanvas.toDataURL('image/jpeg'); // También puedes cambiar el formato si lo deseas.
                const data: IFormImage = {
                    base64: croppedImage,
                    format: 'jepg'
                }
                handleImage(data);
            }
        }
    };

    return (
        <>
            <div className='modal-image'>
                <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                    <img src={image ?? ''} />
                </ReactCrop>
            </div>

            <div className='buttons'>
                <button className='btn btn--orange' onClick={handleSave}>Save</button>
            </div>
        </>
    )
}
function uploadLogo(id: any, data: IFormImage) {
    throw new Error('Function not implemented.');
}

function uploadCoverPhoto(id: any, data: IFormImage) {
    throw new Error('Function not implemented.');
}

