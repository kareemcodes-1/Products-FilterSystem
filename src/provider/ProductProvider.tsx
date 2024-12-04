import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    thumbnail: string;
    images: string[];
}

type ProductContextType = {
    products: Product[]
    filterProducts: (value: string) => void;
    handleSearch: (value: string) => void;
    currentProducts: Product[];
    handlePageChange: (pageNumber: number) => void;
    currentPage: number;
    totalProducts: number;
    totalPages: number;
}

const ProductsContext = createContext<ProductContextType>({
    products: [],
    filterProducts(value) {
        
    },
    handleSearch(value) {
        
    },
    currentProducts: [],
    handlePageChange(pageNumber) {
        
    },
    currentPage: 1,
    totalProducts: 30,
    totalPages: 1
});

export const ProductProvider = ({children}: {children: ReactNode}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [originalProducts, setOriginalProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(8); 
  const [totalProducts, setTotalProducts] = useState<number>(0); 

  const indexOfLastProduct = currentPage * productsPerPage; // e.g., 1 * 8 = 8 for the first page
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // e.g., 8 - 8 = 0 for the first page
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);  // Get products for this page
  const totalPages = Math.ceil(totalProducts / productsPerPage);


    useEffect(() => {
        axios
        .get('https://dummyjson.com/products')
        .then((res) => {
          setProducts(res.data.products);
          setOriginalProducts(res.data.products);
          setTotalProducts(res.data.products.length)
        })
        .catch((err) => console.error(err));
    }, []);

    const filterProducts = (value: string) => {
      switch (value) {
          case 'cheap':
              setProducts([...originalProducts].sort((a, b) => a.price - b.price));
              break;
          case 'expensive':
              setProducts([...originalProducts].sort((a, b) => b.price - a.price));
              break;
          case 'popular':
              setProducts([...originalProducts].sort((a, b) => b.rating - a.rating));
              break;
          case 'beauty':
          case 'fragrances':
          case 'furniture':
          case 'groceries':
              setProducts(originalProducts.filter((product) => product.category.includes(value)));
              break;
          default:
              setProducts(originalProducts);
              break;
      }
  };

  const handleSearch = (value: string) => {
    if (value.trim() === "") {
      const slicedProducts = originalProducts.slice(0, 12);
      setProducts(slicedProducts); 
     } else {
      const filteredProducts = originalProducts.filter((product) =>
          product.title.toLowerCase().includes(value.toLowerCase())
      );
      setProducts(filteredProducts);
    }
   };

   const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);  // Update the current page to the clicked page number
  };
  

  
    return (
        <ProductsContext.Provider value={{products, filterProducts, handleSearch, currentProducts, handlePageChange, currentPage, totalProducts, totalPages}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProduct = () => useContext(ProductsContext);