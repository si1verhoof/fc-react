import React from "react";
import ReactDOM from "react-dom";

/* 
var entryField = React.createClass({
    render: function(variables) {
        return (
            <label>
                <input class="variables.className" required placeholder="" />
            </label>
        );
    }
})

var variables = {
    this.className: "text"
} 
*/

class RegForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.formSubmit = this.formSubmit.bind(this);
      }

    formSubmit(event) {
        alert('Учетная запись для пользователя ' + this.state.value + " создана успешно");
        event.preventDefault(); 
    }

    render() {
        return (
          <form onSubmit={this.formSubmit}>
            <label>
              Придумайте логин:  
              <input type="text" required placeholder="Введите логин" value={this.state.value} />
            </label>
            <label>
              Придумайте пароль:
              <input type="password" required placeholder="Введите пароль"/>
            </label>
            <label>
              Введите повторно пароль:
              <input type="password" required placeholder="Повторите пароль"/>
            </label>
            <input type="submit" value="Зарегистрироваться" />
          </form>
        );
      }

}

ReactDOM.render(
  <RegForm />,
  document.getElementById('root')
);