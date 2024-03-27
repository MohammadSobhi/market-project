import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import Cart from './pages/Cart'
import Layout from './components/Layout'
import ProductDetails from './pages/ProductDetails'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import AuthRequired from './components/AuthRequired' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout/> } >
          <Route index element={ <Home/> } />
          <Route path='about' element={ <About/> } />
          <Route element={<AuthRequired/>}>
            <Route path='user' element={ <User/> } />
            <Route path='cart' element={ <Cart/> } />
          </Route>  
          <Route path='products/:id' element={ <ProductDetails/> } />
          <Route path='login' element={ <Login/> } />
          <Route path='*' element={ <ErrorPage/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
