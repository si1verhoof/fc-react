import React from "react";

class RegForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login: "",
      loginPassword: "",
      loginPasswordConfirm: ""
    };

    this.formSubmit = this.formSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = event.target.name;

    this.setState({
      [name]: value.target
    });
  }

  formSubmit(event) {
    event.preventDefault(); 
    const { elements } = event.target;
    const { login, loginPassword, loginPasswordConfirm } = elements;

    if( loginPassword.value === loginPasswordConfirm.value) {
      alert("Учетная запись для пользователя " + login.value + " создана успешно");
    } else {
      alert("Введенные пароли не совпадают")
    }
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Придумайте логин:  
          <input type="text" name="login" required placeholder="Введите логин" value={this.state.login} onChange={this.handleInputChange}/>
        </label>
        <label>
          Придумайте пароль:
          <input type="password" name="loginPassword" required placeholder="Введите пароль" value={this.state.loginPass} onChange={this.handleInputChange}/>
        </label>
        <label>
          Введите повторно пароль:
          <input type="password" name="loginPasswordConfirm" required placeholder="Повторите пароль" value={this.state.loginPassConfirm} onChange={this.handleInputChange}/>
        </label>
        <button type="submit">Зарегистрироваться</button> 
      </form>
    );
  }
}