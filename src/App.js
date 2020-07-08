import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  // subscribe to google authentication
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            }, () => {
              console.log(this.state)
            }
          )
        })
      }
      this.setState({currentUser: userAuth})
    })
  }

  // unsubscribe from google authentiction
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/shop' component={ Shop } />
          <Route path='/signin' component={ SignInAndSignUp } />
        </Switch>
      </div>
    );
  }
}

export default App;
