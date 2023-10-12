import React, { useState } from 'react';
import { IoImageOutline } from 'react-icons/io5';
import ReactCrop, { Crop, centerCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useStore } from 'zustand';
import { businesseStore } from '../../../store';
import { IFormImage } from '../../../interfaces';
import { toastError } from '../../../helpers';

interface Props {
    type: string;
}

const ModalImageBusiness = ({ type }: Props) => {

    const { uploadLogo, uploadCoverPhoto, businessesByOwner } = useStore(businesseStore);

    const [src, setSrc] = useState<string | null>(null);
    const [format, setFormat] = useState<string | null>(null);
    const [crop, setCrop] = useState<Crop>({
        unit: 'px',
        width: type == 'LOGO' ? 400 : 600,
        height: 400,
        x: 0,
        y: 0
    });

    const [croppedImage, setCroppedImage] = useState<string | null>(null);
    const imageRef = React.createRef<HTMLImageElement>();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSrc(event.target?.result as string);
                setFormat(file.type.split('/')[1])
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCropComplete = (croppedArea: Crop) => {
        if (imageRef.current) {
            const croppedImageBase64 = getCroppedImg(imageRef.current, croppedArea);
            setCroppedImage(croppedImageBase64);
        }
    };

    const getCroppedImg = (image: HTMLImageElement, crop: Crop): string => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width!;
        canvas.height = crop.height!;
        const ctx = canvas.getContext('2d');

        if (!ctx) throw new Error('Canvas context is not available.');

        ctx.drawImage(
            image,
            crop.x! * scaleX,
            crop.y! * scaleY,
            crop.width! * scaleX,
            crop.height! * scaleY,
            0,
            0,
            crop.width!,
            crop.height!
        );

        return canvas.toDataURL('image/jpeg'); // Cambia el formato si es necesario.
    };

    const handleSave = () => {
        const data: IFormImage = {
            base64: croppedImage?.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, '') ?? '',
            format: format ?? ''
        }

        if (businessesByOwner) {
            if (type === 'LOGO') {
                if (data.base64 !== '') {
                    uploadLogo(businessesByOwner.id, data)
                }
                else {
                    toastError('Please select the section to be cropped correctly.')
                }
            }
            else {
                if (data.base64 !== '') {
                    uploadCoverPhoto(businessesByOwner.id, data)
                }
                else {
                    toastError('Please select the section to be cropped correctly.')
                }

            }
        }
    }
    return (
        <div>
            <div className='modal-image'>
                {type === 'LOGO' ?
                    <>
                        <input type="file" name="logo" id="logo" style={{ display: 'none' }} onChange={(e) => handleFileChange(e)} accept="image/*" />
                        <label htmlFor="logo" className='btn btn--icon btn--blue' style={{ width: '60%' }}><IoImageOutline size={20} /> Upload logo</label>
                        <div>
                            {src && (
                                <ReactCrop
                                    crop={crop}
                                    onChange={(newCrop) => setCrop(newCrop)}
                                    onComplete={handleCropComplete}
                                    maxWidth={400}
                                    maxHeight={400}
                                    minWidth={400}
                                    minHeight={400}
                                    keepSelection
                                >
                                    <img src={src} alt="" ref={imageRef} style={{ width: "500px", height: '500px', objectFit: 'cover', objectPosition: 'center' }} />
                                </ReactCrop>
                            )}
                        </div>
                    </>
                    :
                    <>
                        <input type="file" name="cover_photo" id="cover_photo" style={{ display: 'none' }} onChange={(e) => handleFileChange(e)} accept="image/*" />
                        <label htmlFor="cover_photo" className='btn btn--icon btn--blue' style={{ width: '60%' }}><IoImageOutline size={20} /> Upload Cover Photo</label>
                        <div>
                            {src && (
                                <ReactCrop
                                    crop={crop}
                                    onChange={(newCrop) => setCrop(newCrop)}
                                    onComplete={handleCropComplete}
                                    maxWidth={600}
                                    maxHeight={400}
                                    minWidth={600}
                                    minHeight={400}
                                    keepSelection
                                >
                                    <img src={src} alt="" ref={imageRef} style={{ width: "700px", height: '500px', objectFit: 'cover', objectPosition: 'center' }} />
                                </ReactCrop>
                            )}
                        </div>
                    </>
                }
            </div>

            <div className='buttons'>
                <button className='btn btn--orange' onClick={handleSave}>Save</button>
            </div>

        </div>
    );
};

export default ModalImageBusiness;
