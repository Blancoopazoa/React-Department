import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        password : ''
    }
}


  handleLoginChange = event => {
    this.setState({
        [event.target.name] : event.target.value
    })
}

handlePasswordChange = (e) => {
  this.setState({
      password : e.target.value
  })
}


  render() {
    const  estilo ={
      marginTop: "8%"
    };
    return (
      <form onSubmit={e => this.props.handle_login(e, this.state)}>
        {/* <label htmlFor="username">Usuario :</label> */}
        <p>Ingrese Usuario</p>
        <input
          type="text"
          name="username"
          value={this.props.username}
          onChange={this.handleLoginChange}
        />
        <br/>
        {/* <label htmlFor="password">Password :</label> */}
        <p style={estilo}>Ingrese Password</p>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <br/>
       <button style={estilo} className="btn btn-success" type='submit'>Login</button>
       
      </form>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};