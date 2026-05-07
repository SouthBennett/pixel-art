import { useState } from 'react'
import '../components/Header.css'

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  
  return (
    <header className="header" id="header">
      <nav>
        <a href="" className="nav-link">Home</a>
        <a href="" className="nav-link">Pixel Art</a>
        <a href="" className="nav-link">Pixel Art+</a>
        <a href="" className="nav-link">Tier List</a>
        <a href="" className="nav-link">Trading Card</a>
      </nav>
    </header>
  );
}