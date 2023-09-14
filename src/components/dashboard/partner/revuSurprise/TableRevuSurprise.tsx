import { useStore } from "zustand"
import { shoppingStore } from "../../../../store"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatDate, formatMoney } from "../../../../helpers";

interface Props {
    revuId: string
}

export const TableRevuSurprise = ({ revuId }: Props) => {

    const { shoppingsByRevuSurprise, getShoppingsByRevuSurprise } = useStore(shoppingStore);

    useEffect(() => {
        if (revuId) {
            getShoppingsByRevuSurprise(revuId)
        }
    }, [revuId])

    return (
        <div className='shopping__table'>
            <div className="shopping__conatinerTable">
                <table className="shopping__table">
                    <thead className="shopping__table--blue">
                        <tr>
                            <th>User</th>
                            <th>Purchased Products</th>
                            <th>Distribution</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shoppingsByRevuSurprise &&
                            shoppingsByRevuSurprise.map((shoping, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className='shopping__control'>
                                            <span className='shopping__text-title'>{shoping.user.names} {shoping.user.last_names}</span>
                                            <p className='shopping__text-normal'>{formatDate(shoping.created_at)}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='shopping__control'>
                                            {shoping.products.map((product, index) => (
                                                    <ul key={index}>
                                                        {product.revu_surprise.id === revuId &&
                                                            <>
                                                                <li className="shopping__row">
                                                                    <span className='shopping__text-title'>Product:</span>
                                                                    <p className='shopping__text-normal'>Revu Sorpresa (x{product.amount})</p>
                                                                </li>
                                                                <li className="shopping__row">
                                                                    <span className='shopping__text-title'>Unit value:</span>
                                                                    <p className='shopping__text-normal'>{formatMoney(product.price)}</p>
                                                                </li>
                                                                <li className="shopping__row">
                                                                    <span className='shopping__text-title'>Total Paid:</span>
                                                                    <p className='shopping__text-normal' style={{ fontWeight: 'bold' }}>{formatMoney(product.total)}</p>
                                                                </li>
                                                            </>
                                                        }
                                                    </ul>
                                            ))
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div className='shopping__control'>
                                            <div className="shopping__row">
                                                <span className='shopping__text-title'>Partner</span>
                                                <p className='shopping__text-normal'>({shoping.distribution.businesse.percentage}%) {formatMoney(shoping.distribution.businesse.branches.find((branch) => branch.revu_surprise === revuId)?.value ?? 0)}</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
