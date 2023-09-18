import { ChangeEvent, useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { IFormImage, ImagesUpload } from '../../../../interfaces'
import { convertToBase64, toastSuccess } from '../../../../helpers'
import { useStore } from 'zustand'
import { revuSurpriseStore } from '../../../../store/revuSurpriseStore'
import { AiOutlineClose } from 'react-icons/ai'
import { businesseStore } from '../../../../store'


interface Props {
    id: string
}
export const RevuSurpriseImages = ({ id }: Props) => {

    const { uploadImage, removeImage, } = useStore(revuSurpriseStore)
    const [images, setImages] = useState([{
        id: '',
        image: '',
        format: ''
    },
    {
        id: '',
        image: '',
        format: ''
    },
    {
        id: '',
        image: '',
        format: ''
    }]);
    const { revuSurprise } = useStore(revuSurpriseStore);

    useEffect(() => {
        if (revuSurprise) {
            const newImages = [...images];
            revuSurprise.images?.map((image, index) => {
                newImages[index] = { ...newImages[index], image: image.url, id: image._id };
            })
            setImages(newImages)
        }
    }, [revuSurprise])


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = event.target.files && event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImages = [...images];
                newImages[index] = { ...newImages[index], image: reader.result as string, format: file.type.split('/')[1] ?? '' };
                setImages(newImages);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageRemove = (index: number) => {
        const newImages = [...images];
        newImages[index] = { ...newImages[index], image: '', format: '' };
        console.log(id, { id: newImages[index].id });
        
        if (newImages[index].id !== '') removeImage(id, {data:{id: newImages[index].id}});
        setImages(newImages);
    };

    const handleSubmit = () => {
        const imagesUpload = images.filter((image) => image !== null && image.image.split(':')[0] !== 'https');
        imagesUpload.map((image) => {
            uploadImage(id, { base64: image.image.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, '') ?? '', format: image.format })
        })
    }

    return (
        <div className="revuSuprise__images">
            <span className="btn btn--gray">Product Photos</span>
            <div className="revuSuprise__control-image">
                {images.map((image, index) => (
                    <div key={index}>
                        {image.image !== '' ?
                            <div className='revuSuprise__image'>
                                <img src={image.image} alt={`Imagen ${index + 1}`} style={{ maxWidth: "200px", maxHeight: "200px" }} />
                                <AiOutlineClose className='revuSuprise__image--icon btn--blue' style={{ borderRadius: '2rem' }} onClick={() => handleImageRemove(index)} />
                            </div>
                            :
                            <label style={{ display: image.image ? "none" : "block", cursor: "pointer" }}>
                                <FaPlusCircle className="icon" />
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, index)} />
                            </label>
                        }
                    </div>
                ))}
            </div>
            <button className="btn btn--blue" onClick={handleSubmit}>Upload Images</button>
        </div>
    )
}
