import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css'
import config from './config'
import Home from './components/Home';
import Login from './components/Login';
import Covidrealtime from './components/Covidrealtime';
import Commentcovid from './components/Commentcovid';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener()
  }


  authListener() {
    config.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }


  render() {

    if (this.state.user == null) {
      return (
        <div>

          <br />
          <Login />
        </div>
      )
    }
    return (
      <div>

        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/commentcovid" component={Commentcovid} />
          <Route path="/covidrealtime" component={Covidrealtime} />

        </div>
      </div>

    )
  }
}
export default App;