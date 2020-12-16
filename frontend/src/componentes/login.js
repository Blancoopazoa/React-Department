import React from 'react';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link } from "react-router-dom";
import { Button } from "../componentes/Home/Button";


function Nav(props) {
  const logged_out_nav = (
    <ul>
      <button className="btn btn-primary" onClick={() => props.display_form('login')}>Iniciar Sesión</button>
    </ul>
  );

  const logged_in_nav = (
    <ul>
      <button className="btn btn-danger" onClick={props.handle_logout}>Cerrar Sesión</button>
      {"  "}
      <Button buttonStyle="btn--secunder"><Link to="/Routes">Panel Administrador</Link></Button>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}


export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};