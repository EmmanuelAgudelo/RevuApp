import { ChangeEvent, useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { IFormImage } from '../../../../interfaces'
import { convertToBase64, toastSuccess } from '../../../../helpers'
import { useStore } from 'zustand'
import { revuSurpriseStore } from '../../../../store/revuSurpriseStore'
import { useParams } from 'react-router-dom'


interface Props {
    id: string
}
export const RevuSurpriseImages = ({ id }: Props) => {

    const [images, setImages] = useState<IFormImage[]>([])
    const { uploadImage, uploadImageResponse, reset } = useStore(revuSurpriseStore)
    const [imagesShow, setImageShow] = useState<string[]>([])


    useEffect(() => {
        if (uploadImageResponse && uploadImageResponse.message === 'success') {
            toastSuccess('Se enviaron las imagenes correctamente')
            reset();
        }
    }, [uploadImageResponse])


    const handleImages = async (e: EventTarget & HTMLInputElement) => {
        if (e && e.files) {
            const img = await convertToBase64(e.files[0]);

            const format: string = e.files[0].type.split('/')[1];
            const data2: IFormImage = { base64: img, format: format }

            if (e.name === 'img1') {
                setImages([...images, data2])

            }
            else if (e.name === 'img2') {
                setImages([...images, data2])
            }
            else {
                setImages([...images, data2])
            }

            // setImageShow((imagesShow) => [...imagesShow, URL.createObjectURL(e.files[0])]);
            // return URL.revokeObjectURL(e.files[0])
        }
    }

    // const deleteImage = (blob: string | IFormImage) => {
    //     setImageShow(imagesShow.filter(x => x !== blob));
    // };

    const handleSubmit = () => {
        if (id) {
            images.map((image) => {
                uploadImage(id, image)
            })
        }
    }


    return (
        <div className="revuSuprise__images">
            <span className="btn btn--gray">Fotografias de producto</span>
            <div className="revuSuprise__control-image">
                <input type="file" name="img1" id="img1" onChange={(e) => handleImages(e.target)} />
                <label htmlFor="img1">
                    <FaPlusCircle className="icon" />
                </label>
                <input type="file" name="img2" id="img2" onChange={(e) => handleImages(e.target)} />
                <label htmlFor="img2">
                    <FaPlusCircle className="icon" />
                </label>
                <input type="file" name="img3" id="img3" onChange={(e) => handleImages(e.target)} />
                <label htmlFor="img3">
                    <FaPlusCircle className="icon" />
                </label>
            </div>
            {/* {imagesShow.map((row, index) =>
                <div key={index}>
                    <img src={row} alt={row} />
                    <button onClick={() => deleteImage(row)}>borrar</button>
                </div>
            )} */}
            <button className="btn btn--blue" onClick={handleSubmit}>Subir imagenes</button>
        </div>
    )
}
