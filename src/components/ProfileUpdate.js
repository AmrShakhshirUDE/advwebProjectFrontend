import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { UrlContext } from '../contexts/urlContext';


export default class ProfileUpdate extends Component{

    


    constructor() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
            super()
            this.state = {
                'username':decoded.identity.username,
                'email': decoded.identity.email,
                'image':decoded.identity.file,
                'password':'',
                'confirmpassword':'',
                'secondUsername':'',
                'msg':'',
                'serverUrl': UrlContext._currentValue,
                'imgSuccess':'',

            }
        }

        componentDidMount () {
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            this.setState({
                username: decoded.identity.username,
                email: decoded.identity.email,
                file:decoded.identity.file
            },()=>this.getImage(this.state.file), console.log(this.state.file))
            
        }


        getImage(file){
            if(this.state.file!=='images/userProfile.png'){
                this.setState({
                    image: this.state.serverUrl +'file/'+ file
                })
             }
             else{
                this.setState({
                    image: this.state.image
                })
             }
        }
    
      
        handleFile = (e) => {
            const newFile =e.target.files[0]
            this.setState({
                file:newFile,
            },(e)=>this.getImage(this.state.file.name));
        }
    
        imageUpload(file){
            let newImg=""
            let email = this.state.email
            // let  file = this.state.file
            console.log(file)
            let formdata = new FormData()
            formdata.append('file',file)
            formdata.append('email',email)
            axios({
                url: this.state.serverUrl +'profileUpload',
                method: 'POST',
                headers:{
                    authorization:'usertoken'
                },
                data:formdata
    
            }).then(response => {
                
                newImg='imgUploaded'
                this.UpdateProfile(newImg)
        
            })
            this.UpdateProfile(newImg)
            
        }


    UpdateProfile(imgState){
        console.log('image changed1:',imgState)
        var name = this.state.secondUsername
        name===""? name=this.state.username:name=this.state.secondUsername
        
        axios({
            url: this.state.serverUrl +'users/update',
            method: 'POST',
            headers:{
                authorization:'usertoken'
            },
            data:{
                'username':name,
                'email':this.state.email,
                'password':this.state.password,
                'confirmpassword':this.state.confirmpassword
            }
            
        }).then(response => {
            console.log('image changed2:',imgState)
            
            if (response.data.success ==='true' || imgState==='imgUploaded') {
                localStorage.removeItem('usertoken')
                window.location = '/login';
            }
            
        })
        .catch(err => {
            console.log('image changed3:',imgState)
            if (imgState==='imgUploaded') {
                localStorage.removeItem('usertoken')
                window.location = '/login';
            }
        })

    }



    render() {
        return (
            <div>
                <div className="col-sm-8 mx-auto">
                    <h2 className="text-center">{this.state.username}</h2>
                </div>

                <div className="col-sm-8 mx-auto" style={{"display":"flex", "justifyContent": "center", "alignItems": "center"}}>
                    <img src={this.state.image} style={{ "width":'40%',"height":'auto', "border":'solid 1px lightgrey', "borderRadius": "25%"}} title={this.state.username}/> 
                </div> 
                <br></br> 

                
                
                
                <div className="" style={{"display":"flex", "justifyContent": "center", "alignItems": "center"}}>
                    {/* <label>Chane Image</label><br/> */}
                    <input className="my-2 btn btn-secondary btn-xs" 
                    type="file" name="file"
                    accept="image/png, image/jpeg" onChange={(e)=>this.handleFile(e)}/>
                    {/* Change Image</button> */}
                </div>

                <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td>
                                <Input type="username" name="username" id="username" placeholder={this.state.username} onChange={e => {this.setState({'secondUsername': e.target.value})}} />
                            </td>                            </tr>
                            <tr>
                            <td>Email</td>
                                <td>{this.state.email}</td>
                           
                            </tr>
                            <tr>
                            <td>Password</td>
                            <td>
                                <Input type="password" name="newPassword" id="newPassword" placeholder="new password" onChange={e => {this.setState({'password': e.target.value})}}/></td>
                            </tr>
                            <tr>
                            <td>Confirm Password</td>
                            <td>
                                <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" onChange={e => {this.setState({'confirmpassword':e.target.value})}} /></td>
                            </tr>
                            <tr>
                            <td></td>
                            <td>
                               {/* <Button outline color="secondary" size="sm" onClick={this.props.clickMe}>update</Button>*/}
                                <Button outline className='btn btn-primary mt-2' 
                                style={{"display":"flex", "justifyContent": "center", "alignItems": "center"}} 
                                size="lg" 
                                onClick={()=>{
                                    this.imageUpload(this.state.file);
                                    // this.UpdateProfile();
                                    }} >update</Button>

                            </td>
                            </tr>
                            <p>{this.state.msg}</p>
                        

                        </tbody>
                    </table>
                  </div>
        )
    }
}
