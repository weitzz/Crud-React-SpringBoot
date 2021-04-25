import React, { Component } from 'react'; 
import { Link } from "react-router-dom";




export default class Nav extends Component {
  render() {
    return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/employe">Crud React + SpringBoot</Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav my-2 my-lg-0">
        <li className="nav-item">
           <Link className="nav-link" to="/employe/index">Listar </Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link" to="/employe/form">Criar</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/employe/edit/5">Editar</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
	
    )
  }
}