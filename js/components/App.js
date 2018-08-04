import React from "react";
import RegForm from "./RegForm";
import LoginForm from "./LoginForm";
// import { Switch, Route } from 'react-router';

/*
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/RegForm" component={RegForm}/>
  <Route path="/LoginForm" component={LoginForm}/>
</Switch>
*/

class App extends React.Component {
    render () {
        return ( 
            <div> 
                <RegForm />
                <LoginForm />
            </div>
       );
    }
}

