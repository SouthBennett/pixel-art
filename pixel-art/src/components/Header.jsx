import { useState } from 'react'
import '../components/Header.css'

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  
  return (
    <header className="header" id="header">
      <nav>
        <a onClick={() => setActiveTab("Home")} href="" className={activeTab === "Home" ? "active" : "nav-link"}>Home</a>
        <a onClick={() => setActiveTab("Pixel Art")} href="" className={activeTab === "Pixel Art" ? "active" : "nav-link"}>Pixel Art</a>
        <a onClick={() => setActiveTab("Pixel Art+")} href="" className={activeTab === "Pixel Art+" ? "active" : "nav-link"}>Pixel Art+</a>
        <a onClick={() => setActiveTab("Tier List")} href="" className={activeTab === "Tier List" ? "active" : "nav-link"}>Tier List</a>
        <a onClick={() => setActiveTab("Trading Card")} href="" className={activeTab === "Trading Card" ? "active" : "nav-link"}>Trading Card</a>
      </nav>
    </header>
  );
}