import React, { useState, useEffect } from "react";

const AllOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulating fetching orders from an API
    fetch("http://api.example.com/orders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h2>All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <h3>Order ID: {order.id}</h3>
              <p>Customer: {order.customer}</p>
              <p>Amount: {order.amount}</p>
              <p>Status: {order.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllOrdersPage;
