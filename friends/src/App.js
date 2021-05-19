import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import { axiosWithAuth } from './utils/axiosWithAuth';

import FriendsList from './components/FriendsList';
import Login from './components/Login';
import Homepage from './components/Homepage';
import AddFriend from './components/AddFriend';
import EditFriend from './components/EditFriend';

function App() {
  const logout = () => {
    axiosWithAuth().post('/logout')
    .then(res=> {
      localStorage.removeItem("token");
      window.location.href = "/login";
    })
    .catch(err=> {
      console.log(err);
    })
  };

  return (
    <div className="App">
      <nav>
        <p>
          {!localStorage.getItem("token")? <Link className="link" to="/login">Login</Link> : null}
        </p>
        <p>
          <Link className="link" onClick={logout}>Logout</Link>
        </p>
        <span/>
        <p>
          <Link className="link" to="/">Home</Link>
        </p>
      </nav>

      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        {/* <Route exact path="/protected" component={GasPrices} /> */}
        <PrivateRoute exact path="/addfriend" component={AddFriend}/>
        <PrivateRoute exact path="/editfriend/:id" component={EditFriend}/>
        <Route path="/login" component={Login} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
