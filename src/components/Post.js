import React, { Component } from 'react'
import {  Input } from 'reactstrap';
import Footer from './Footer';
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { UrlContext } from '../contexts/urlContext';




export default class Post extends Component {
    constructor() {
        super()
        this.state = {
            email:'',
            title: '',
            content: '',
            category:'',
            file:'null',
            'serverUrl': UrlContext._currentValue,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleDropdownChange=this.handleDropdownChange.bind(this)
    }
    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            email: decoded.identity.email
        })
    }
    handleDropdownChange(e){
        this.setState({category:e.target.value})
    }


    handleFile = (e) => {
        //let handlefile = e.target.files[0];
        let file =e.target.files[0]
        this.setState({file:file})


    }
    getAllPost = () => {
        axios.get(this.state.serverUrl +'users/posts')
        .then((response) => {
          const data = response.data;
          this.setState({posts:data})
          console.log('Data has been received!');
        })
        .catch(()=>{
          alert('Error retrieving data!!');
      });
    }


    handleUpload(e){
        console.log(this.state,"The state --- $$$$")
        let file = this.state.file
        let title = this.state.title
        let content = this.state.content
        let category = this.state.category
        let email = this.state.email
        let formdata = new FormData()

        formdata.append('file',file)
        formdata.append('title',title)
        formdata.append('content',content)
        formdata.append('category',category)
        formdata.append('email',email)

   axios({
            url: this.state.serverUrl +'users/post',
            method: 'POST',
            headers:{
                authorization:'usertoken'
            },
            data:formdata
              
        }).then(response => {
            this.getAllPost()
            this.props.history.push('/allpost')
            console.log("Added new post!")
            window.location='/allpost'
        })


    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit (e) {
        e.preventDefault()
     
        
    }
  



    render() {
        return (
            <React.Fragment>

            <div className="container-fluid">



                {/* <div className="row mt-5 jumbotron "> */}
                <div className="row w-100 ">
                    <div className="col-md-7 px-0">
                    <img src={'images/newpost.jpg'} style={{width:'100%'}} alt="newpost" />

                    </div>
                    <div className="col-md-5 my-5   px-5 " >
                    <form noValidate onSubmit={this.onSubmit}>
                    <h4 className=" my-4 font-weight-normal" style={{color: '#5c7d92', paddingLeft:'40%'}}>New Post</h4>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="title"
                                className="form-control"
                                name="title"
                                placeholder="Title of your post"
                                value={this.state.title}
                                onChange={this.onChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <Input type="select" name="category" id="category" onChange={e=>{this.setState({category:e.target.value})}}>
                            <option value="" disabled selected>Choose Category</option>
                            <option value="Peer to Peer">Peer to Peer</option>
                            <option value="Advance Web Technology">Advance Web Technology</option>
                            <option value="Internet of Things">Internet of Things</option>
                            </Input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content </label>
                            <input type="content"
                                className="form-control" style={{height:"120px"}}
                                name="content"
                                placeholder="Extra Explaination..."
                                value={this.state.content}
                                onChange={this.onChange} />
                        </div>
                        
                      <div className="">
                          <label style={{color: '#5c7d92', marginRight:'2%'}}> Select File</label>
                          <input className="mb-2 " type="file" name="file"
                          accept="image/png, image/jpeg, .zip,.rar,.7zip, .pdf"
                          onChange={(e)=>this.handleFile(e)} />
                          </div>
                        
                        <p style={{color: '#E67E22'}} >
                            Supported Formats: JPG-PNG-PDF-Zip
                        </p>

                        <button type="submit" onClick={(e)=>this.handleUpload(e)} className="btn btn-md btn-primary btn-block">
                            Post
                        </button>
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
