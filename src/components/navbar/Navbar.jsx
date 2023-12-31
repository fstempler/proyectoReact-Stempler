
import './navbar.css';
import CartWidget from "../cartWidget/CartWidget";
import logo from "../../assets/logo-removebg-preview.png";
import { NavLink, Outlet } from "react-router-dom";


//Barrra de navegación del sitio con cart. 

const Navbar = () => {
    return (
      <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}><img className="logo" src={logo}/></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link active" aria-current="page" href="#">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/type/cd"} className="nav-link" href="#">CDs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/type/vinyl"} className="nav-link" href="#">Vinyls</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Genres
              </a>
              <ul className="dropdown-menu">
                <li><NavLink to={"/genre/jazz"} className="dropdown-item">Jazz</NavLink></li>
                <li><NavLink to={"/genre/rock"} className="dropdown-item">Rock</NavLink></li>
                <li><NavLink to={"/genre/blues"} className="dropdown-item">Blues</NavLink></li>
                <li><NavLink to={"/genre/pop"} className="dropdown-item">Pop</NavLink></li>
                <li><NavLink to={"/genre/funk-soul"} className="dropdown-item">Funk/Soul</NavLink></li>
                <li><NavLink to={"/genre/argentine rock"} className="dropdown-item">Argentine Rock</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
            </li>

          </ul>   
          <form className="d-flex" role="Search">
          <input className="form-control me-2 bg-transparent" type="search" placeholder="Soon..." aria-label="Search"></input>
          <button className="btn btn-outline-light" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
                   
        </form> 
        </div>        
        
        <CartWidget/>    
        
      </div>
      
    </nav>
    
    
    </>
    )
}

export default Navbar