import "./Navbar.css";
function  Navbar(){
    return (
      <nav className="navbar">
        <div className="logo-section">
            <img src="" alt="" className="logo-img" />
            <h2>Mrs Barber</h2>
        </div>
        

      <ul className="nav-links">
        <li><a href="#">HOME</a></li>
        <li><a href="#">SERVICES</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      </nav>
    );
}

export default Navbar;
