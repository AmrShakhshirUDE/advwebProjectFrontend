import React,{ Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Switch} from 'react-router-dom';
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Post from './components/Post'
import GetPosts from './components/GetPosts'
import Myposts from './components/Myposts'
import Search from './components/Search'
import NotFound from './components/NotFound'
import urlContextProvider from './contexts/urlContext';









function App() {
  return (
    <Router>
      <div className="App">
      <urlContextProvider>
          <NavBar />
          <br></br><br></br><br></br>
          <Switch>
          <Route exact path="/" component = {Landing} />
          <Route exact path ="/Search" component = {Search} />          
          <Route exact path ="/register" component = {Register} />
          <Route exact path ="/login" component = {Login} />
          <Route exact path ="/profile" component = {Profile} />
          <Route exact path ="/post" component = {Post} />
          <Route exact path ="/allpost" component = {GetPosts}/>
          <Route exact path ="/mypost" component = {Myposts} />
          <Route   component= {NotFound} />
          </Switch>
        </urlContextProvider>
      </div>

    </Router>


  );
}

export default App;
