import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Header/>
          <Search />
          
        </div>
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);
