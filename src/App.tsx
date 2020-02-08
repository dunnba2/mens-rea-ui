import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';
import  LoginComponent  from './components/login-component/LoginContainer';
import RegisterComponent from './components/register-component/RegisterContainer';


const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavbarComponent/>
          <Switch>
            <Route path='/login' component={LoginComponent}/>
            <Route path='/register' component={RegisterComponent}/>
          </Switch>
          
        </Router>
      </Provider>
     
    </div>
  );
}

export default App;
