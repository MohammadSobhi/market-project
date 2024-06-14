import React, { useEffect } from "react";
import {useParams} from "react-router-dom"
import { getProductInfo } from "../api";


export default function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = React.useState(null);


    useEffect(()=>{
        
        const fetchProduct = async () => {
            const data = await getProductInfo(id);
            setProduct(data)
            console.log(product)
        }
        fetchProduct();

    },[id])


    useEffect(() => {
        console.log(product); // Logging the state whenever it changes
      }, [product]);
    
      if (!product) {
        return <h1>Product not found</h1>;
      }

    return(
        <div className="product-details">
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
        </div>
    )
};
