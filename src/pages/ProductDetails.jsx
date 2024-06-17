import React, { useEffect } from "react";
import {useParams, useNavigate, useLocation} from "react-router-dom"
import { getProductInfo, addToCart, getMyCart } from "../api";
import { getAccessToken } from "../components/AuthRequired";


export default function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = React.useState(null);
    const [quantity, setQuantity] = React.useState(1);
    const navigate = useNavigate();
    const location = useLocation();
      
    const handleDecrement = () => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
          }
    };
      
    const handleIncrement = () => {
          setQuantity(quantity + 1);
    };


    const handleAddToCart = ()=>{
        const token = getAccessToken()
        console.log(token)
        if(token){
            addToCart(id,quantity,token)
        }else{
            navigate("/login", {state:{ from: location }} )
        }
    }


    useEffect(()=>{
        
        const fetchProduct = async () => {
            const data = await getProductInfo(id);
            setProduct(data)
            console.log(product)
        }
        fetchProduct();

        const token = getAccessToken()
        console.log(token)

    },[id])


    useEffect(() => {
        console.log(product); // Logging the state whenever it changes
      }, [product]);
    
      if (!product) {
        return <h1>Product not found</h1>;
      }

    return(
        <div className="product-details">
            <div className="product-image">
                <img src={product.data.photo} alt="Hi :)"/>
            </div>
            <div className="product-info">
                <h1>{product.data.title}</h1>
                <p className="price">${product.data.price}</p>
                <p>Category : <span>{product.data.category}</span></p>
                <div>
                    Tags : <span >{product.data.tags}</span>
                </div>
                <p>Quantity :</p>
                <div className="quantity">
                    <button onClick={handleDecrement}>-</button>
                    <input type="number" value={quantity} readOnly/>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <button onClick={handleAddToCart} className="add-to-cart">Add to Cart</button>
                <p>{product.data.description}</p>
            </div>
        </div>
    )
};



/*<div className="product-details">
            <h1>{product.data.id} details are here</h1>
            <h2>{product.data.title}</h2>
            <p>{product.data.description}</p>
            <p className="category">Category: <span>{product.data.category}</span></p>
            <p className="voters">Number of Voters: <span>{product.data.cnt_voter}</span></p>
            <p className="price">Price: ${product.data.price}</p>
            <p className="amount-available">Amount Available: <span>{product.data.amount}</span></p>
            <div className="tags">
                Tags: 
            <span >{product.data.tags}</span>
        
            </div>
             <p className="stars">Sum of Stars: <span>{product.data.sum_of_stars}</span></p>
        </div>*/