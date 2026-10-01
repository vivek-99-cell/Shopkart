import React from 'react'
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
     {/* Top Shipping Bar */}
     <div className="top-bar">
        <div className="container-fluid">
            <span className="new-badge">New</span>
        Free Shipping on Orders above Rs. 499 | Easy 7-day returns
        </div>
     </div>
    </>
  )
}