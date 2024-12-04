import React from 'react'
import { useProduct } from '../provider/ProductProvider';

const Sidebar = () => {

   const {filterProducts, handleSearch} = useProduct();

  return (
      <aside className='fixed top-0 left-0 z-[100] bg-white shadow-lg w-[15%] h-screen p-[1rem]'>
           <h1 className='text-[1.5rem] font-bold'>React Store</h1>

           <div className='flex items-start flex-col gap-[1rem]'>

           <div className='border p-[.5rem] rounded-[.5rem] mt-[1rem]'>
              <input type="text" className='bg-transparent outline-none w-full' name="" id="" placeholder='Search Products' onChange={(e) => handleSearch(e.target.value)}/>
              </div>

           <div className='flex items-center gap-[2rem] mt-[2rem]'>
              <div className='border p-[.5rem] rounded-[.5rem]'>
              {/* <input type="text" className='bg-transparent outline-none w-full' name="" id="" placeholder='Min' onChange={(e) => handleMin(e.target.value)}/> */}
              </div>

              <div className='border p-[.5rem] rounded-[.5rem]'>
              <input type="text" className='bg-transparent outline-none w-full' name="" id="" placeholder='Max'/>
              </div>
           </div>

           <div className=''>
                <h1 className='text-[1rem] font-bold mb-[1rem]'>Categories</h1>
                
                <div className='flex items-start flex-col gap-[.5rem]'>
                   <div className='flex items-center gap-[.5rem]' onClick={() => filterProducts('beauty')}>
                   <input type="radio" id="beauty" name="filter_category" />
                   <label htmlFor="beauty">BEAUTY</label>
                   </div>

                   <div className='flex items-center gap-[.5rem]' onClick={() => filterProducts('fragrances')}>
                   <input type="radio" id="fragrances" name="filter_category" />
                   <label htmlFor="fragrances">FRAGRANCES</label>
                   </div>

                   <div className='flex items-center gap-[.5rem]' onClick={() => filterProducts('furniture')}>
                   <input type="radio" id="furniture" name="filter_category" />
                   <label htmlFor="furniture">FURNITURE</label>
                   </div>

                   <div className='flex items-center gap-[.5rem]' onClick={() => filterProducts('groceries')}>
                   <input type="radio" id="groceries" name="filter_category" />
                   <label htmlFor="groceries">GROCIERIES</label>
                   </div>
                </div>
           </div>
           </div>
      </aside>
  )
}

export default Sidebar