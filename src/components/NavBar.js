import React, { Component, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../assets/images/MLwhite.png';
import { UrlContext } from '../contexts/urlContext';
import * as jwtDecode from 'jwt-decode';



class Navbar extends Component {



    
    constructor(props){
        super(props)
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state={
            'serverUrl': UrlContext._currentValue    ,
            collapsed: true,
    
        }
    }

    
    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed,
        });
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
                    <Link to="/login" className="nav-link font-weight-bolder text-secondary">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link  font-weight-bolder text-secondary">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                 <li className="nav-item">
                    <Link to="/Allpost" className="nav-link  font-weight-bolder text-secondary">
                        All Posts
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link  font-weight-bolder text-secondary">
                        User Account
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/post" className="nav-link  font-weight-bolder text-secondary">
                        Add Post
                    </Link>
                </li>
               
                <li className="nav-item">
                    <Link to="/mypost" className="nav-link  font-weight-bolder text-secondary">
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

        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            
            <nav  className="navbar navbar-expand-md navbar-dark rounded vert-align" style={{backgroundColor : '#01061c', color : 'grey'}}>
                <button onClick={this.toggleNavbar} className={`${classTwo}`}
                    className="navbar-toggler"
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
                    id="navbar1" className={`${classOne}`}>
                    
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>

                <div>
              
             {/* <div className="search justify-content-md-end mr-4">
              
                      <Link to="/Search">   
                      <img className="searchImg" src={require ('../assets/images/search.png')} title={"search"} alt={"search"}/></Link>
              </div>                     */}
              

              </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)
