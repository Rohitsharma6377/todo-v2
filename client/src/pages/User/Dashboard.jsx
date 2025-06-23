import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => (
  <div>
    <h1>User Dashboard</h1>
    <ul>
      <li><Link to="/user/orders">My Orders</Link></li>
      <li><Link to="/user/cart">My Cart</Link></li>
      <li><Link to="/user/wishlist">My Wishlist</Link></li>
      <li><Link to="/user/profile">My Profile</Link></li>
    </ul>
  </div>
);

export default UserDashboard;
