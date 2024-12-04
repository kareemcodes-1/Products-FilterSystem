import React from 'react'
import { useProduct } from '../provider/ProductProvider'
import ProductCard from './ProductCard';

const Products = () => {

    const {currentProducts} = useProduct();
    console.log(currentProducts);

  return (
    <div className='flex items-center justify-center'>
        {currentProducts.length > 0 ? <>
          <div className='grid grid-cols-4 gap-[1rem] place-content-center place-items-center'>
        {currentProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product}/>
            </div>
        ))}
    </div>
        </> : <>
        <p>No products found.</p>
        </>}
    </div>
  )
}

export default Products