import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AddMenuItem.css'; 

function AddMenuItem() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    status: 'available', // Default status (available=true)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { name, description, price, status } = formData;
      const statusBool = status === 'available' ? true : false;
  
      const response = await axios.post('http://localhost:8000/menus', {
        name,
        description,
        price,
        status: statusBool,
      });
  
      console.log('Response:', response);
  
      if (!response.data.success) {
        throw new Error(response.data.message || 'Failed to add the menu item');
      }
  
      setFormData({
        name: '',
        description: '',
        price: '',
        status: 'available',
      });
    } catch (error) {
      console.error('Error:', error.response); 
    }  
  };
  

  return (
    <div className="container">
      <h1 className="title">Add Menu Item</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price($):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="form-control"
          >
            <option value="available">Available</option>
            <option value="soldout">Sold Out</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Item</button>
      </form>
      <Link to="/home" className="btn btn-secondary">Back to Homepage</Link>
    </div>
  );
}

export default AddMenuItem;
