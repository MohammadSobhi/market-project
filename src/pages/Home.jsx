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
        <div className="home-container">
            <h1>Home page is here</h1>
            <section className="header-section">
                <p>Your one-stop destination for all your shopping needs! Explore a wide range of products, from fresh produce to household essentials, all conveniently available at your fingertips.</p>
                <p>Shop with confidence knowing that we prioritize quality, affordability, and exceptional customer service.</p>
                <p>Start browsing now and discover the best deals and latest trends in the market. Your shopping experience begins here at bab-jenin market !</p>
            </section>
            <div className="cards-container">
                {cards.map(card => (
                    <div className="product-card">
                        <Link to={`products/${card.id}`}>
                            <img className="product-image" src={card.src}  alt={card.image}/>
                            <h2 className="product-title">{card.title}</h2>
                            <p className="product-price">${card.id}</p>
                            <p className="add-to-cart">Add to Cart</p>
                        </Link>    
                        <button className="buy-button">Buy Now</button>
                    </div>
                
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
                <span>Page {page}</span>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    )
};
