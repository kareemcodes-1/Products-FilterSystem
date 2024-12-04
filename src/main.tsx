import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { ProductProvider } from './provider/ProductProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ProductProvider>
   <App />
   </ProductProvider>
  </StrictMode>,
)
