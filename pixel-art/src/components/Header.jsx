import { useState } from 'react'
import '../components/Header.css'

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  
  return (
    <header className="header" id="header">
      <nav>
        <a onClick={() => setActiveTab("Home")} className={activeTab === "Home" ? "nav-link active" : "nav-link"}>Home</a>
        <a onClick={() => setActiveTab("Pixel Art")} className={activeTab === "Pixel Art" ? "nav-link active" : "nav-link"}>Pixel Art</a>
        <a onClick={() => setActiveTab("Pixel Art+")} className={activeTab === "Pixel Art+" ? "nav-link active" : "nav-link"}>Pixel Art+</a>
        <a onClick={() => setActiveTab("Tier List")} className={activeTab === "Tier List" ? "nav-link active" : "nav-link"}>Tier List</a>
        <a onClick={() => setActiveTab("Trading Card")} className={activeTab === "Trading Card" ? "nav-link active" : "nav-link"}>Trading Card</a>
      </nav>
    </header>
  );
}