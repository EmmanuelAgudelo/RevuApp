import { useStore } from "zustand"
import { businesseStore, optionStore, shoppingStore } from "../../../../../store"
import { useEffect } from "react"
import { formatDate, formatMoney } from "../../../../../helpers";

export const PartnerSales = () => {

    const { getShoppingsBranches, shoppingsBranches } = useStore(shoppingStore);
    const { businessesByIdUser } = useStore(businesseStore);
    const { option } = useStore(optionStore);

    useEffect(() => {
        if (businessesByIdUser && option) {
            getShoppingsBranches(businessesByIdUser.id, option)
        }
    }, [])

    return (
        <div className='sales'>
            <div className="sales__card">
                <div className="shopping__conatinerTable" style={{ padding: '0' }}>
                    <table className="shopping__table">
                        <thead className="shopping__table--blue">
                            <tr>
                                <th>User</th>
                                <th>Purchased Products</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shoppingsBranches && shoppingsBranches.length > 0 ?
                                shoppingsBranches.map((shoping, index) => (
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
                                                    <div key={index}>
                                                        <ul>
                                                            <li className="shopping__row">
                                                                <span className='shopping__text-title'>Product:</span>
                                                                <p className='shopping__text-normal'>Revu surprise (x{product.amount})</p>
                                                            </li>
                                                            <li className="shopping__row">
                                                                <span className='shopping__text-title'>Unit Value:</span>
                                                                <p className='shopping__text-normal'>{formatMoney(product.price)}</p>
                                                            </li>
                                                            <li className="shopping__row">
                                                                <span className='shopping__text-title'>Total Paid:</span>
                                                                <p className='shopping__text-normal' style={{ fontWeight: 'bold' }}> {formatMoney(product.total)}</p>
                                                            </li>
                                                        </ul>
                                                        {index === shoping.products.length - 1 ?
                                                            ''
                                                            :
                                                            <hr style={{ border: '1px dashed gray' }} />
                                                        }
                                                    </div>
                                                ))
                                                }

                                            </div>
                                        </td>
                                        <td>
                                            <div className='shopping__control'>
                                                <div className="shopping__row">
                                                    <span className='shopping__text-title'>Subtotal:</span>
                                                    <p className='shopping__text-normal'>{formatMoney(shoping.detail.subtotal)}</p>
                                                </div>
                                                <div className="shopping__row">
                                                    <span className='shopping__text-title'>% Gateway:</span>
                                                    <p className='shopping__text-normal'>({shoping.detail.payment_gateway.percentage}%) {formatMoney(shoping.detail.payment_gateway.value)}</p>
                                                </div>
                                                <div className="shopping__row">
                                                    <span className='shopping__text-title'>% Taxes:</span>
                                                    <p className='shopping__text-normal'>({shoping.detail.tax.percentage}%) {formatMoney(shoping.detail.tax.value)}</p>
                                                </div>
                                                <div className="shopping__row">
                                                    <span className='shopping__text-title'>Total:</span>
                                                    <p className='shopping__text-normal'>{formatMoney(shoping.detail.total)}</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                :
                                <>
                                    <tr>
                                        <td className="center" colSpan={3} style={{ display: 'table-cell', borderRadius: '0 0 2rem 2rem' }}>
                                            There is no information.
                                        </td>
                                    </tr>
                                </>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
