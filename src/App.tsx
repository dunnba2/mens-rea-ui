import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';
import  LoginComponent  from './components/login-component/LoginContainer';
import RegisterComponent from './components/register-component/RegisterContainer';
import { MediaBookComponent } from './components/media-component/MediaBookComponent';
import { MediaVisualComponent } from "./components/media-component/MediaVisualComponent";
import  ImdbSearchComponent  from './components/imdb-component/ImdbSearchContainer';
import { SubmitNewMediaComponent } from './components/submit-media-component/SubmitNewMediaComponent';


const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavbarComponent/>
          <Switch>
            <Route path='/login' component={LoginComponent}/>
            <Route path='/register' component={RegisterComponent}/>
            <Route path="/books" component={MediaBookComponent}/>
            <Route path="/moviesshows" component={MediaVisualComponent}/>
            <Route path="/imdbsearch" component={ImdbSearchComponent}/>
            <Route path="/submitnewmedia" component={SubmitNewMediaComponent}/>
          </Switch>
          
        </Router>
      </Provider>
     <footer>A project by Blake Dunn, Ivanna Mahabir, and Tannilen Reagan</footer>
    </div>
  );
}

export default App;
