import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import jwt_decode from 'jwt-decode';
import {Modal, ModalHeader,ModalBody,ModalFooter } from 'reactstrap';
import axios from 'axios';
import { UrlContext } from '../contexts/urlContext';


export default class ProfileNormal extends Component{
    constructor(props) {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        super(props)
        this.state = {
            'username':decoded.identity.username,
            'email': decoded.identity.email,
            'image':decoded.identity.file,
            secondimage:'',
            Open:false,
            msg:'',
            'file':decoded.identity.file,
            uri:'',
            'serverUrl': UrlContext._currentValue,
            "result":"",
            "resToken":"",
            "mounted":false,
        }
        console.log(this.state.file)
        console.log(this.state.image)
    }
    

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.identity.username,
            email: decoded.identity.email,
            // file:decoded.identity.file
        },()=>this.getImgName(),this.getImage(this.state.file), console.log(this.state.file))
        
    }


    getImgName(){
        console.log("start getImgName")
        let email = this.state.email
        let formdata = new FormData()
        formdata.append('email',email)
        axios({
            url: this.state.serverUrl +'usrimg',
            method: 'post',
            headers:{
                authorization:'usertoken'
            },
            data:formdata

        }).then(response => {
            console.log('sucess response')
            console.log("respone is:",response)
            // this.getImage(response)                       
        })
    
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

    imageUpload(e,file){
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
            
            this.setState({
                // "result":response.data.msg,
                // "mounted":true,
            })
            //  this.logOut(e)                       
        })
    }
   
    render() {
        this.getImgName()
        return (
            <div>
                <div className="col-sm-8 mx-auto">
                    <h2 className="text-center">{this.state.username}</h2>
                </div>
                
                <div className="font-weight-bold text-success">{this.state.msg}</div>

                <div className="col-sm-8 mx-auto" style={{"display":"flex", "justifyContent": "center", "alignItems": "center"}}>
                    <img src={this.state.image} style={{ "width":'40%',"height":'auto', "border":'solid 1px lightgrey', "borderRadius": "25%"}} title={this.state.username}/> 
                </div>  
                

                

                {/* <button onClick={()=>this.fileInput.click()}>Choose pictures</button><br/> */}
               <br></br>
               <div className="">
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                        <tr>
                            <td>Username</td>
                            <td onChange={this.change}>{this.state.username} </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td onChange={this.change}>{this.state.email} </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button className="btn btn-primary mt-2" size="lg" onClick={this.props.clickMe}>update</Button>
                            </td>
                            </tr>
                            </tbody>
                    </table>
               </div>
                

                
            </div>
        )
    }

}
