import { ChangeEvent, useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { IFormImage } from '../../../../interfaces'
import { convertToBase64, toastSuccess } from '../../../../helpers'
import { useStore } from 'zustand'
import { revuSurpriseStore } from '../../../../store/revuSurpriseStore'
import { AiOutlineClose } from 'react-icons/ai'


interface Props {
    id: string
}
export const RevuSurpriseImages = ({ id }: Props) => {

    const { uploadImage, uploadImageResponse, reset } = useStore(revuSurpriseStore)
    const [images, setImages] = useState<Array<string | null>>([null, null, null]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = event.target.files && event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImages = [...images];
                newImages[index] = reader.result as string;
                setImages(newImages);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageRemove = (index: number) => {
        const newImages = [...images];
        newImages[index] = null;
        setImages(newImages);
    };

    return (
        <div className="revuSuprise__images">
            <span className="btn btn--gray">Product Photos</span>
            <div className="revuSuprise__control-image">
                {images.map((image, index) => (
                    <div key={index}>
                        {image ?
                            <div className='revuSuprise__image'>
                                <img src={image} alt={`Imagen ${index + 1}`} style={{ maxWidth: "200px", maxHeight: "200px" }} />
                                <AiOutlineClose className='revuSuprise__image--icon' onClick={() => handleImageRemove(index)} />
                            </div>
                            :
                            <>
                                <label style={{ display: image ? "none" : "block", cursor: "pointer" }}>
                                    <FaPlusCircle className="icon" />
                                    <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, index)} />
                                </label></>
                        }
                    </div>
                ))}
            </div>
            <button className="btn btn--blue">Upload Images</button>
        </div>
    )
}
