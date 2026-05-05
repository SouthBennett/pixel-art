import '../components/Header.css'

export default function Header() {
  function colorChange() {
    let element = document.getElementById("nav-link");
    element.classList.toggle("dark-mode")
  }
  return (
    <header className="header" id="header">
      <nav>
        <a onClick={colorChange} href="" className="nav-link">Home</a>
        <a href="" className="nav-link">Pixel Art</a>
        <a href="" className="nav-link">Pixel Art+</a>
        <a href="" className="nav-link">Tier List</a>
        <a href="" className="nav-link">Trading Card</a>
      </nav>
    </header>
  );
}