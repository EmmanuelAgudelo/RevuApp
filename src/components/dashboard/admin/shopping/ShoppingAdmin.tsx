import React, { useEffect } from 'react'
import { useStore } from 'zustand'
import { shoppingStore } from '../../../../store'
import { formatDate } from '../../../../helpers';

export const ShoppingAdmin = () => {

  const { getShoppings, shoppings, getShoppingsDetails, shoppingsDetails } = useStore(shoppingStore);

  useEffect(() => {
    getShoppings();
    getShoppingsDetails();
  }, [])

  return (
    <div className='shopping'>
      <div className="shopping__cards">
        <div className="shopping__card">
          <div className="shopping__icon shopping__icon--blue">
            <p className="shopping__text">Ganancias totales alcanzadas</p>
          </div>
          <div className="shopping__description shopping__description--blue">
            <p className="shopping__text">  $ {shoppingsDetails?.total.toLocaleString('en')} </p>
          </div>
        </div>
        <div className="shopping__card">
          <div className="shopping__icon shopping__icon--blue">
            <p className="shopping__text">Valor generado por aliados</p>
          </div>
          <div className="shopping__description shopping__description--blue">
            <p className="shopping__text">$ {shoppingsDetails?.company.toLocaleString('en')}</p>
          </div>
        </div>
        <div className="shopping__card">
          <div className="shopping__icon shopping__icon--blue">
            <p className="shopping__text">Costo de la pasarela</p>
          </div>
          <div className="shopping__description shopping__description--blue">
            <p className="shopping__text">$ {shoppingsDetails?.payment_gateway.toLocaleString('en')}</p>
          </div>
        </div>
        <div className="shopping__card">
          <div className="shopping__icon shopping__icon--blue">
            <p className="shopping__text">Costo de impuestos</p>
          </div>
          <div className="shopping__description shopping__description--blue">
            <p className="shopping__text">$ {shoppingsDetails?.tax.toLocaleString('en')}</p>
          </div>
        </div>
      </div>

      <div className='shopping__table'>
        <div className="shopping__conatinerTable">
          <table className="shopping__table">
            <thead className="shopping__table--orange">
              <tr>
                <th>Usuario</th>
                <th>Productos adquiridos</th>
                <th>Detalle</th>
                <th>Distribución</th>
              </tr>
            </thead>
            <tbody>
              {shoppings &&
                shoppings.map((shoping, index) => (
                  <tr key={index}>
                    <td>
                      <div className='shopping__control'>
                        <span className='shopping__text-title'>{shoping.user.names} {shoping.user.last_names}</span>
                        <p className='shopping__text-normal'>{formatDate(shoping.created_at)}</p>
                      </div>
                    </td>
                    <td>
                      <div className='shopping__control'>
                        <div className="shopping__row">
                          <span className='shopping__text-title'>Producto:</span>
                          <p className='shopping__text-normal'>Revu Sorpresa (x2)</p>
                        </div>
                        <div className="shopping__row">
                          <span className='shopping__text-title'>Valor Unitario:</span>
                          <p className='shopping__text-normal'>$20.000</p>
                        </div>
                        <hr />
                        <div className="shopping__row">
                          <span className='shopping__text-title'>Total Pagado:</span>
                          <p className='shopping__text-normal'>$40.000</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className='shopping__control'>
                        <div className="shopping__row">
                          <span className='shopping__text-title'>Subtotal:</span>
                          <p className='shopping__text-normal'>$ {shoping.detail.subtotal.toLocaleString('en')}</p>
                        </div>
                        <div className="shopping__row">
                          <span className='shopping__text-title'>% Pasarela:</span>
                          <p className='shopping__text-normal'>({shoping.detail.payment_gateway.percentage}%) $ {shoping.detail.payment_gateway.value.toLocaleString('en')}</p>
                        </div>
                        <div className="shopping__row">
                          <span className='shopping__text-title'>% Taxes:</span>
                          <p className='shopping__text-normal'>({shoping.detail.tax.percentage}%) $ {shoping.detail.tax.value.toLocaleString('en')}</p>
                        </div>
                        <div className="shopping__row">
                          <span className='shopping__text-title'>Total:</span>
                          <p className='shopping__text-normal'>$ {shoping.detail.total.toLocaleString('en')}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className='shopping__control'>

                        <div className="shopping__row">
                          <span className='shopping__text-title'>Revu:</span>
                          <p className='shopping__text-normal'>({shoping.distribution.company.percentage}%) $ {shoping.distribution.company.value.toLocaleString('en')}</p>
                        </div>
                        <div className="shopping__row">
                          <span className='shopping__text-title'>Aliado</span>
                          <p className='shopping__text-normal'>({shoping.distribution.businesse.percentage}%) $ {shoping.distribution.businesse.percentage.toLocaleString('en')}</p>
                        </div>
                        <div className="shopping__row">
                          <span className='shopping__text-title'>Pasarela:</span>
                          <p className='shopping__text-normal'>({shoping.distribution.payment_gateway.percentage}%) $ {shoping.distribution.payment_gateway.value.toLocaleString('en')}</p>
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
    </div>
  )
}
