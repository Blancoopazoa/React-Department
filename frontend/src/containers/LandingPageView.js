import React, { Component } from 'react';
import Nav from '../componentes/login';
import LoginForm from '../componentes/LoginForm';
import SignupForm from '../componentes/SignupForm';
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        displayed_form: '',
        logged_in: localStorage.getItem('token') ? true : false,
        username: ''
      };
    }
  
    componentDidMount() {
      if (this.state.logged_in) {
        fetch('http://127.0.0.1:8000/current_user/', {
            withCredentials: true,
            mode:"no-cors",
          headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `JWT ${localStorage.getItem('token')}`
            
          }
        })
        .then(res => res.json())
        .then(json => {
          localStorage.getItem('token', json.token);
          this.setState({
            logged_in: true,
            displayed_form: '',
            username: json.user.username
          })});
      }
    }
  
    handle_login = (e, data ) => {
      e.preventDefault();
      fetch('http://127.0.0.1:8000/token-auth/', {
            crossDomain : true,
			withCredentials : true,
			async : true,
            method : 'POST',
            //mode:"no-cors",
			headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
                
                
			},
            body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          this.setState({
            logged_in: true,
            displayed_form: '',
            username: json.user.username
          });
        });
    };
  
    
    handle_logout = () => {
      localStorage.removeItem('token');
      this.setState({ logged_in: false, username: '' });
    };
  
    display_form = form => {
      this.setState({
        displayed_form: form
      });
    };
  
    render() {
      let form;
      switch (this.state.displayed_form) {
        case 'login':
          form = <LoginForm handle_login={this.handle_login} />;
          break;
        case 'signup':
          form = <SignupForm handle_signup={this.handle_signup} />;
          break;
        default:
          form = null;
      }
  
      return (
        <div className="App">
          <Nav
            logged_in={this.state.logged_in}
            display_form={this.display_form}
            handle_logout={this.handle_logout}
          />
          {form}
          <h3>
            {this.state.logged_in
              ? `Bienvenid@, ${this.state.username}`
              : 'Por Favor Iniciar Sesion'}  
          </h3>
          
        </div>
      );
    }
  }
  
  export default App;