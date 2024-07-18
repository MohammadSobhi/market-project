import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getProductInfo, addToCart, getMyCart, checkIfAdmin, deleteProduct, updateProductInfo } from "../api";
import { getAccessToken } from "../components/AuthRequired";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [quantity, setQuantity] = React.useState(1);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [productData, setProductData] = React.useState({
    title: "",
    category: "",
    price: 0,
    amount: 0,
    photo: "",
    description: ""
  });
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

  const handleAddToCart = () => {
    const token = getAccessToken();
    console.log(token);
    if (token) {
      addToCart(id, quantity, token);
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  const handleDeleteProduct = async () => {
    const token = getAccessToken();
    if (token) {
      console.log(id);
      const promise = await deleteProduct(token, id);
      console.log(promise);
      if (promise.status === "success") {
        navigate("/products");
      } else {
        console.log("Error deleting product");
      }
    }
  };

  const handleEditProduct = () => {
    setIsEditing(true);
    setProductData({
      title: product.data.title,
      category: product.data.category,
      price: product.data.price,
      amount: product.data.amount,
      photo: product.data.photo,
      description: product.data.description
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const token = getAccessToken();
    if (token) {
          console.log(id);
          const promise = await updateProductInfo(token, id, productData);
          console.log(promise);
    }
    console.log("Updated product data:", productData);
    // Reset the form and exit editing mode
    setIsEditing(false);
  };
  

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      const checkAdmin = async () => {
        const data = await checkIfAdmin(token);
        console.log(data);
        setIsAdmin(data);
      };
      checkAdmin();
    }
    const fetchProduct = async () => {
      const data = await getProductInfo(id);
      setProduct(data);
      console.log(product);
    };
    fetchProduct();
  }, [id,isEditing]);

  useEffect(() => {
    console.log(product); // Logging the state whenever it changes
  }, [product]);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.data.photo} alt="Hi :)" />
      </div>
      <div className="product-info">
        {isEditing ? (
          <div className="add-product-container">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="add-product-form-group">
                <div className="form-inline">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={productData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-inline">
                  <label htmlFor="category">Category:</label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={productData.category}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="add-product-form-group">
                <div className="form-inline">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-inline">
                  <label htmlFor="amount">Amount:</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={productData.amount}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="add-product-form-group">
                <label htmlFor="photo">Photo URL:</label>
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  value={productData.photo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="add-product-form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={productData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Update Product</button>
            </form>
          </div>
        ) : (
          <>
            <h1>{product.data.title}</h1>
            <p className="price">${product.data.price}</p>
            <p>
              Category : <span>{product.data.category}</span>
            </p>
            <div>
              Tags : <span>{product.data.tags}</span>
            </div>
            <p>Quantity :</p>
            <div className="quantity">
              <button onClick={handleDecrement}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={handleAddToCart} className="add-to-cart">
              Add to Cart
            </button>
            <p>{product.data.description}</p>
            {isAdmin && (
              <>
                <button className="admin-button" onClick={handleDeleteProduct}>
                  Delete Product
                </button>
                <button className="admin-edit-button" onClick={handleEditProduct}>
                  Edit Product
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
