import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';
import  LoginComponent  from './components/login-component/LoginContainer';
import RegisterComponent from './components/register-component/RegisterContainer';
import MediaComponent from './components/media-component/MediaContainer';
import  ImdbSearchComponent  from './components/imdb-component/ImdbSearchContainer';
import { SubmitNewMediaComponent } from './components/submit-media-component/SubmitNewMediaComponent';
import  IDreamBookComponent  from './components/idream-book-component/IDreamBookContainer';


const App: React.FC = () => {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Electrolize|Special+Elite&display=swap" rel="stylesheet"></link>
      <Provider store={store}>
        <Router>
          <NavbarComponent/>
          <Switch>
            <Route path='/login' component={LoginComponent}/>
            <Route path='/register' component={RegisterComponent}/>
            <Route path="/media" component={MediaComponent}/>
            <Route path="/imdbsearch" component={ImdbSearchComponent}/>
            <Route path="/submitnewmedia" component={SubmitNewMediaComponent}/>
            <Route path="/" component={IDreamBookComponent}/>
          </Switch>
          
        </Router>
      </Provider>
     <footer>A project by Blake Dunn, Ivanna Mahabir, and Tannilen Reagan</footer>
    </div>
  );
}

export default App;
