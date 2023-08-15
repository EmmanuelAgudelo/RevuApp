import { useEffect, useState } from 'react'
import { useStore } from 'zustand';
import { ratingStore } from '../../../../store';
import { IRating } from '../../../../interfaces';
import { formatDate } from '../../../../helpers';
import Modal from '../../modal/Modal';
import { ModalCommentRating } from '../../modal/ModalCommentRating';
import { RatingsStar } from './RatingsStar';

export const RatingsAdmin = () => {

    const { findRating, ratings } = useStore(ratingStore);
    const [isOpen, setIsOpen] = useState(false);
    const [comment, setComment] = useState<string | undefined>('');

    useEffect(() => {
        findRating()
    }, [])

    // Manejo del modal

    const handleOpenModal = (comment:string|undefined) => {
        setIsOpen(true);
        setComment(comment);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setComment('');
    };



    return (
        <div className="ratingsAdmin">
            <div className="ratingsAdmin__conatinerTable">
                <table className="ratingsAdmin__table">
                    <thead>
                        <tr>
                            <th>Partner</th>
                            <th>Branch</th>
                            <th>Rating</th>
                            <th>User</th>
                            <th>Comment</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ratings?.map((rating: IRating) => (
                            <tr key={rating.id}>
                                <td>{rating.businesse}</td>
                                <td>{rating.branch}</td>
                                <td className='center'><RatingsStar rating={rating.rating} /></td>
                                <td>{rating.user}</td>
                                {rating.comment ?
                                    <td className='center'><span className='ratingsAdmin__comment' onClick={() => handleOpenModal(rating.comment)}>Read comment</span></td>
                                    :
                                    <td className='center'><span className=''>No comment</span></td>
                                }
                                {rating.status ?
                                    <td className="center"><span className="status--green">Active</span></td>
                                    :
                                    <td className="center"><span className="status--red">Inactive</span></td>
                                }
                                <td>{formatDate(rating.created_at)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalCommentRating comment={comment} />
            </Modal>
        </div>
    )
}
