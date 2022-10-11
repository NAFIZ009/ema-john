import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{
            backgroundColor: '#1C2B35'
        }}>
        <div className="container">
          <NavLink className="navbar-brand" to='/'><img src={img} alt="" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={{
            flexGrow:0
          }} id="navbarNavAltMarkup">
            <div className="navbar-nav gap-4">
              <NavLink className="nav-link text-light" to='/order'>Order</NavLink>
              <NavLink className="nav-link text-light" to='/order-review'>Order Review</NavLink>
              <NavLink className="nav-link text-light" to='/login'>Login</NavLink>
            </div>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Header;