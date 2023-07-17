import { useEffect } from 'react'
import { useStore } from 'zustand';
import { ratingStore } from '../../../../store';
import { IRating } from '../../../../interfaces';
import { formatDate } from '../../../../helpers';

export const RatingsAdmin = () => {

    const { findRating, ratings } = useStore(ratingStore);

    useEffect(() => {
        findRating()
    }, [])

    return (
        <div className="ratingsAdmin">
            <div className="ratingsAdmin__conatinerTable">
                <table className="ratingsAdmin__table">
                    <thead>
                        <tr>
                            <th>Aliado</th>
                            <th>Sede</th>
                            <th>Calificación</th>
                            <th>Usuario</th>
                            <th>Comentario</th>
                            <th>Estado</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ratings?.map((rating:IRating) => (
                            <tr key={rating.id}>
                                <td>{rating.businesse}</td>
                                <td>{rating.branch}</td>
                                <td>{rating.rating}</td>
                                <td>{rating.user}</td>
                                <td><a href="#" className='ratingAdmin__comment'>Leer comentario</a></td>
                                {rating.status ?
                                    <td className="center"><span className="status--green">Activo</span></td>
                                    :
                                    <td className="center"><span className="status--red">Inactivo</span></td>
                                }
                                <td>{formatDate(rating.created_at)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
