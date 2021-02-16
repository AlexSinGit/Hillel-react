import React from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{
  render(){
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Список контактов</NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active"
                     to="/" exact>Главная</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">О нас</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
}

export default Navbar;