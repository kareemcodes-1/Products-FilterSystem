import React from 'react'
import { Product } from '../provider/ProductProvider'

const ProductCard = ({product}: {product: Product}) => {
  return (
    <div className='w-[200px]'>
        <img src={product.thumbnail} alt={product.title} />

       <div>
          <h1 className='text-[1rem] font-bold'>{product.title}</h1>
          <span>${product.price}</span>
          <br />
          <span>{product.category}</span>
          <br />
          <span>Rating: {product.rating}</span>
       </div>
    </div>
  )
}

export default ProductCard