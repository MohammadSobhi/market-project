import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { createProduct } from '../api';
import { getAccessToken } from '../components/AuthRequired';

export default function AddProduct() {
  const navigate = useNavigate(); 
  const token = getAccessToken()

  const [productData, setProductData] = useState({
    title: '',
    photo: '',
    price: 0,
    description: '',
    amount: 0,
    category: '',
    tags: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const data = await createProduct(token,productData)
        console.log(data)
      if (data.status == "success") {
        navigate('/products'); 
      } else {
        console.log('Error adding product'); 
      }
    } catch (error) {
      setErrorMessage('Network error occurred'); 
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
      <div className="add-product-form-group">
          <div className="form-inline">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={productData.title} onChange={handleChange} required />
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
            <input type="number" id="price" name="price" value={productData.price} onChange={handleChange} required />
          </div>
          <div className="form-inline">
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" name="amount" value={productData.amount} onChange={handleChange} required />
          </div>
        </div>
        <div className="add-product-form-group">
          <label htmlFor="photo">Photo URL:</label>
          <input type="text" id="photo" name="photo" value={productData.photo} onChange={handleChange} required />
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
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}