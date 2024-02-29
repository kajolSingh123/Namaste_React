import React, { Component } from "react";
import ReactDOMClient from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESsGm92deQDTJR9fiWcHZ8S94NCmFLSkkQg&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurntCard = () => {
  return (
    <div className="res-card">
      <img
        className="food-item-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/druwjzmfmz7qvepq3bkr"
      />
      <div className="res-content">
        <h3>Meghana Foods</h3>
        <h4>Briyanis,North Indian, Asian </h4>
        <h4> 4.4 stars</h4>
        <h4>38 minutes</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="  ">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurntCard />
        <RestaurntCard />
        <RestaurntCard />
        <RestaurntCard />
        <RestaurntCard />
        <RestaurntCard /> <RestaurntCard />
        <RestaurntCard /> <RestaurntCard />
        <RestaurntCard />
        <RestaurntCard />
        <RestaurntCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
