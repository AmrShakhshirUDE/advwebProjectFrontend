import React, { Component } from 'react';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UrlContext } from '../contexts/urlContext';


class Register extends Component {
        constructor() {
        super()
        this.state = {
            username:'',
            email: '',
            password: '',
            result:'',
            'serverUrl': UrlContext._currentValue
        }


        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

 
        axios({
            url: this.state.serverUrl +'users/register',
            method: 'POST',
            data:{
              "username":this.state.username,
              "email": this.state.email,
              "password": this.state.password
            }
        }).then(response => {
            this.setState({
                "result":response.data.msg
            })
            if (response.data.success) {
                window.setTimeout(function(){

                    window.location = '/login';
            
                }, 6000);
                window.location = '/login';
            }
            console.log("Registered")
            //this.props.history.push(`/login`)

        })
                
      
    }

    
    render () {
        return (
            <React.Fragment>

            <div className="container-fluid">



                {/* <div className="row mt-5 jumbotron "> */}
                <div className="row w-100 ">
                    <div className="col-md-8 col-sm-12 px-0">
                    <img src={'images/registerimage.jpg'} style={{width:'100%'}} alt="registerimg" />

                    </div>
                    <div className="col-md-4 col-sm-12 py-5 w-100  mx-auto " >
                        <form noValidate onSubmit={this.onSubmit} className=" align-items-center py-5 px-5">
                            <h4 className=" my-4 font-weight-normal" style={{color: '#5c7d92', paddingLeft:'40%'}}>Register</h4>
                            <div className="form-group">
                                {/* <label htmlFor="username">Username</label> */}
                                <input type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter Username"
                                    value={this.state.username}
                                    onChange={this.onChange} />
                            </div>
                           
                            <div className="form-group">
                                {/* <label htmlFor="email">Email Address</label> */}
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="password">Password </label> */}
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <div className="my-2" style={{color:'red'}}> {this.state.result}</div>

                            <button type="submit" className="btn btn-lg  btn-primary btn-block">
                                Register
                            </button>
                            <div className="pt-2" >
                                <p style={{color:'grey', fontSize:'13px' , paddingLeft:'20%'}}>already have an account?  <Link to="/login" style={{"fontWeight": "bold",color: '#5c7d92'}}>Log In</Link></p>
                            </div>
                        </form>
                    </div>



                </div>




            </div>




             <div className='container-fluid mt-5'> 
             <Footer />
             </div>
            </React.Fragment>
        )
    }
}

export default Register
