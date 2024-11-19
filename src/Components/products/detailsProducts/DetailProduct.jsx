import React from 'react'
import { useProduct } from '../../../zustand/useProducts';

const DetailProduct = () => {

    const { productSelected } = useProduct();
    const {description, imagen_url, nombre, precio, stock} = productSelected;

  return (
    <div className='flex w-9/12 justify-around'>
        <div>
            <figure>
                <img src={imagen_url} alt={nombre} />
            </figure>
        </div>
        <div>
            <span>{stock} disponibles</span>
            <h1>{nombre}</h1>
            <h3>$ {precio}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default DetailProduct