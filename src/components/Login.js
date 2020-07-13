import React, { Component } from 'react'
import Profile from './Profile'
import Footer from './Footer'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { UrlContext } from '../contexts/urlContext';



class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            result:'',
            errors:{},
            'serverUrl': UrlContext._currentValue,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
   

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    login = user => {
        return axios
            .post(this.state.serverUrl +'users/login', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                this.setState({
                    "result":response.data.msg
                })
                if (this.state.result==null){
                localStorage.setItem('usertoken', response.data.token)
                return response.data.token}
              
                
            })
            .catch(err => {
                console.log(err)
            })
    }

    onSubmit (e) {
        e.preventDefault()
         
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.login(user).then(res => {
            if (res) {
                this.props.history.push(`/profile`)
            }
            else 
                return this.state.result           

            
             
           
        })
    }




       
                   
    

    render () {
        return (
            <React.Fragment>
                
                        <div className="container-fluid">



                {/* <div className="row mt-5 jumbotron "> */}
                <div className="row w-100 ">
                    <div className="col-md-8 px-0">
                    <img src={'images/registerimage.jpg'} style={{width:'100%'}} alt="registerimg" />

                    </div>
                    <div className="col-md-4  w-100  mx-auto " >
                        <form noValidate onSubmit={this.onSubmit} className=" align-items-center mt-5 py-5 px-5">
                        <h4 className=" my-4 font-weight-normal" style={{color: '#5c7d92', paddingLeft:'40%'}}>Log In</h4>
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
                          

                            <div className=" my-2" style={{color:'red'}}> {this.state.result}</div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Log In
                            </button>
                            <div className="pt-2" >
                                <p style={{color:'grey', fontSize:'13px' , paddingLeft:'15%'}}>Do not have an account?  <Link to="/register" style={{"fontWeight": "bold",color: '#5c7d92'}}>Register now</Link></p>
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

export default Login
