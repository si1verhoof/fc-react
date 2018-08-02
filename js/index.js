import React from "react";
import ReactDOM from "react-dom";

class RegForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login: "",
      loginPass: "",
      loginPassConfirm: ""
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
    const { login, loginPass, loginPassConfirm } = elements;

    if( loginPass.value === loginPassConfirm.value) {
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
          <input type="password" name="loginPass" required placeholder="Введите пароль" value={this.state.loginPass} onChange={this.handleInputChange}/>
        </label>
        <label>
          Введите повторно пароль:
          <input type="password" name="loginPassConfirm" required placeholder="Повторите пароль" value={this.state.loginPassConfirm} onChange={this.handleInputChange}/>
        </label>
        <button type="submit" value="Зарегистрироваться" />
      </form>
    );
  }
}

ReactDOM.render(
  <RegForm />,
  document.getElementById('root')
);