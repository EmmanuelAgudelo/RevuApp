import { useEffect, useState } from 'react'
import { supportStore } from '../../../../store/supportStore';
import { useStore } from 'zustand';
import { ISupport } from '../../../../interfaces/support.interface';
import { formatDate, getRole, toastSuccess } from '../../../../helpers';

export const SupportAdmin = () => {

    const { findSupports, supports, updateAnswerResponse, reset } = useStore(supportStore);

    useEffect(() => {
        findSupports()
    }, [])

    useEffect(() => {
        if (updateAnswerResponse && updateAnswerResponse.message === 'success') {
            toastSuccess('Se ha dado respuesta correctamente.');
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
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Mensaje</th>
                            <th>Estado</th>
                            <th>Respuesta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supports?.map((support: ISupport) => (
                            <tr key={support.id}>
                                <td>{support.created_by.names} {support.created_by.last_names} ({getRole(support.created_by.role)})</td>
                                <td>{formatDate(support.created_at)}</td>
                                <td>{support.question}</td>
                                {support.is_answered ?
                                    <td className="center"><span className="status--green">Respondido</span></td>
                                    :
                                    <td className="center"><span className="status--red">Sin reponder</span></td>

                                }

                                {support.is_answered ?
                                    <td>{support.answer}</td>
                                    :
                                    <td>
                                        <TextArea support={support} />
                                    </td>
                                }
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
        updateAnswer(support.id, { answer: text })
    }

    return (
        <div className='supportAdmin__answer'>
            <textarea onChange={({ target }) => setText(target.value)} value={text} cols={25} rows={3}></textarea>
            <button className='btn btn--blue' onClick={handleAnswer}>Enviar</button>
        </div>
    )
}