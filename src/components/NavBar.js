import React, { Component, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../assets/images/MLwhite.png';
import { UrlContext } from '../contexts/urlContext';
import * as jwtDecode from 'jwt-decode';



class Navbar extends Component {
    constructor(){
        super()
        this.state={
            'serverUrl': UrlContext._currentValue        
        }
    }

    logOut (e) {
     
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }
    
    render (props) {        
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link font-weight-bolder">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link  font-weight-bolder">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                 <li className="nav-item">
                    <Link to="/Allpost" className="nav-link  font-weight-bolder">
                        All Posts
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link  font-weight-bolder">
                        User Account
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/post" className="nav-link  font-weight-bolder">
                        Add Post
                    </Link>
                </li>
               
                <li className="nav-item">
                    <Link to="/mypost" className="nav-link  font-weight-bolder">
                        My Posts
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="#" onClick={this.logOut.bind(this)} className="nav-link mr-2  font-weight-bolder ">
                        Logout
                    </a>
                </li>
              

            </ul>
        
        )

        return (
            
            <nav  className="navbar navbar-expand-md navbar-dark rounded vert-align" style={{backgroundColor : '#01061c', color : 'white'}}>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div>
                    <Link to="/" className="nav-link" >
                        <img src={logo} alt="Logo" title="Home" style={{height: "50px",with: "50px"}}/>                  
                    </Link>
                </div>
                


                <div className="collapse navbar-collapse justify-content-md-start"
                    id="navbar1">
                    
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>

                <div>
              
              <div className="search justify-content-md-end mr-4">
              
                      <Link to="/Search">   
                      <img className="searchImg" src={require ('../assets/images/search.png')} title={"search"} alt={"search"}/></Link>
              </div>                    

              </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)
