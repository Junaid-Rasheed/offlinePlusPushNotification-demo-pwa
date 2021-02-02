import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
import {Contact} from './Contact'

import firebase from './firebase'

function App() {
  const messaging = firebase.messaging();

  Notification.requestPermission().then((permission) => { 
    if(permission === "granted"){
        messaging.getToken().then((currentToken) => {
                console.log(currentToken);         
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
          });
    }
  })

  return (
    <Router>
      <Link to='/'><button>Home</button></Link>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/About' exact component={About}/>
        <Route path='/Contact' exact component={Contact}/>
      </Switch>
    </Router>
     
   
  );
}

export default App;
