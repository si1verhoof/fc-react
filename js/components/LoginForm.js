import React from "react";

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login: "",
      loginPassword: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  formSubmit(event) {
    event.preventDefault(); 
    const { elements } = event.target;
    const { login, loginPassword } = elements;
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Введите логин:  
          <input type="text" name="login" required placeholder="Введите логин" value={this.state.login} onChange={this.handleInputChange}/>
        </label>
        <label>
          Введите пароль:
          <input type="password" name="loginPassword" required placeholder="Введите пароль" value={this.state.loginPass} onChange={this.handleInputChange}/>
        </label>
        <button type="submit" value="Войти" />
      </form>
    );
  }
}