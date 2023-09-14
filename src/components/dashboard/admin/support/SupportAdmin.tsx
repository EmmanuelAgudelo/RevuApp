import { useEffect, useState } from 'react'
import { supportStore } from '../../../../store/supportStore';
import { useStore } from 'zustand';
import { ISupport } from '../../../../interfaces/support.interface';
import { formatDate, getRole, toastError, toastSuccess } from '../../../../helpers';

export const SupportAdmin = () => {

    const { findSupports, supports, updateAnswerResponse, reset } = useStore(supportStore);

    useEffect(() => {
        findSupports()
    }, [])

    useEffect(() => {
        if (updateAnswerResponse && updateAnswerResponse.message === 'success') {
            toastSuccess('Response has been given successfully.');
            findSupports();
            reset();
        }
    }, [updateAnswerResponse])


    return (
        <div className="supportAdmin">
            <div className="supportAdmin__conatinerTable">
                <table className="supportAdmin__table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Answer</th>
                            <th>Answer By</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supports?.map((support: ISupport) => (
                            <tr key={support.id}>
                                <td>{support.created_by.names} {support.created_by.last_names} ({getRole(support.created_by.role)})</td>
                                <td>{support.question}</td>
                                {support.is_answered ?
                                    <td className="center"><span className="status--green">Responded</span></td>
                                    :
                                    <td className="center"><span className="status--red">Not responded</span></td>

                                }

                                {support.is_answered ?
                                    <td>{support.answer}</td>
                                    :
                                    <td>
                                        <TextArea support={support} />
                                    </td>
                                }
                                <td>
                                    {support.answered_by ?
                                        `${support.answered_by.names} ${support.answered_by.names} `
                                        :
                                        'No one has responded yet'
                                    }
                                </td>
                                <td>{formatDate(support.created_at)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

interface Props {
    support: ISupport
}

const TextArea = ({ support }: Props) => {
    const [text, setText] = useState<string>(support.answer ?? '');
    const { updateAnswer } = useStore(supportStore);

    const handleAnswer = () => {
        if (text === '') {
            toastError('You must post an answer')
        } else {
            updateAnswer(support.id, { answer: text })

        }
    }

    return (
        <div className='supportAdmin__answer'>
            <textarea onChange={({ target }) => setText(target.value)} value={text} cols={25} rows={3}></textarea>
            <button className='btn btn--blue' onClick={handleAnswer}>Send</button>
        </div>
    )
}