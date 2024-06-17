import React from "react";
import { getMyCart, getProductInfo } from "../api";
import { getAccessToken } from "../components/AuthRequired";

export default function cart() {


    const [cartItems, setcartItems] = React.useState([])
    const [total, setTotal] = React.useState(0)
    const [products, setProducts] = React.useState([])

    React.useEffect(()=> {
        const token = getAccessToken()
        console.log(token)
        if(token){
            const fetchProduct = async () => {
                const data = await getMyCart(token);
                setcartItems(data.products)
                setTotal(data.total)
            }
            fetchProduct();
        }
    },[])


    React.useEffect(() => {
        const fetchProductData = async () => {
            try {
                const productPromises = cartItems.map(item => getProductInfo(item.product_id));
                const productData = await Promise.all(productPromises);
                const productsArray = productData.map(product => product.data);
                console.log('Product data:', productsArray);
                setProducts(productsArray); 
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        if (cartItems.length > 0) {
            fetchProductData();
        }
    }, [cartItems]);

    console.log(products)

    return(
        <div className="cart-container">
        <div className="cart-content">
            <div className="cart-items">
                {cartItems.map(cartItem => {
                    
                    const product = products.find(p => p.id == cartItem.product_id);
                    console.log('Rendering cart item:', cartItem, 'Found product:', product);
                    return(<div className="cart-item">
                    <img src={product ? product.photo : 'loading-image-placeholder.jpg'} alt="idk"/>
                    <div className="cart-item-details">
                        <h3>{product ? product.title : 'Loading...'}</h3>
                        <p>{product ? product.description : 'Loading...'}</p>
                    </div>
                    <div className="cart-item-price-quantity">
                        <p className="cart-item-price">${cartItem.price}</p>
                        <div className="cart-page-quantity">
                            <p>Quantity : </p>
                            <input type="number" value={cartItem.amount} min="1"/>
                        </div>
                        <p className="cart-remove-item">Remove</p>
                    </div>
                </div>)})}
                
            </div>
        
            <div className="checkout-section">
                <p>Subtotal: $ ?? </p>
                <p>Shipping: $ ?? </p>
                <p>Tax: $ ?? </p>
                <p className="estimate-total">Estimate Total: ${total}</p>
                <div className="coupon-code">
                    <input type="text" placeholder="Enter a Valid Coupon Code"/>
                    <button>Apply</button>
                </div>
                <button>Checkout</button>
                <button>PayPal Checkout</button>
                <button>Buy with Google Pay</button>
            </div>
        </div>
    </div>
    )    
};
