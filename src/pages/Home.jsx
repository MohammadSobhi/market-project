import React, { useState, useEffect } from "react";
import Product1Image from "../photos/potato.jpg"
import Product2Image from "../photos/apple.webp/"
import Product3Image from "../photos/cucumber.jpg"
import Product4Image from "../photos/tomato.jpg"
import { Link } from "react-router-dom"
import { getProducts } from "../api";


export default function Home() {
    const [cards,setCard] = useState([
        {
            image : "Product 1",
            title : "بطاطا مالحة",
            price : 19.99,
            src : Product1Image
        },
        {
            image : "Product 2",
            title : "سحارة تفاح بلدي",
            price : 29.99,
            src : Product2Image
        },
        {
            image : "Product 3",
            title : "خيار بلاستيكي",
            price : 9.99,
            src : Product3Image
        },
        {
            image : "Product 4",
            title : "بندورة بلدية",
            price : 49.99,
            src : Product4Image
        },
    ])





    const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(page);
        setCard(data.data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [page]);



  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };



    return(
      <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Our E-commerce Market</h1>
        <p>Discover a wide range of products and services.</p>
        <Link to="products" className="btn">View Products</Link>
      </div>
    </div>
    )
};
