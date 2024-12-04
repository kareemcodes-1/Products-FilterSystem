import React, { useState } from 'react'
import { useProduct } from '../provider/ProductProvider'

const Pagination = () => {

    const {handlePageChange, currentPage, totalPages} = useProduct();

  return (
    <div className="join flex items-center justify-center">
  <button className="join-item btn btn-outline" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>Previous page</button>
  <div className="join">
  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => handlePageChange(index + 1)}
      className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
    >
      {index + 1}
    </button>
  ))}
</div>
  <button className="join-item btn btn-outline" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
  
</div>
  )
}

export default Pagination