import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Footer from './Footer';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ProfileUpdate from './ProfileUpdate';
import ProfileNormal from './ProfileNormal';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateProfile: false
    };
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }
  toggleUpdate(){
    this.setState({
      updateProfile: !this.state.updateProfile    
    })
    }


  // if (token) {
  //   jwt_decode(token);
  // }

    render () {
        return (
            <React.Fragment>

            <div className="container">
              <div className="jumbotron mt-5" id="changeModal">
                <Form>
                  {!this.state.updateProfile && <ProfileNormal clickMe={this.toggleUpdate}/>}
                  { this.state.updateProfile && <ProfileUpdate clickMe={this.toggleUpdate}/>}
                </Form>
              </div>
            </div>
          


           <div className='position-sticky mt-5'> 
            <Footer />
            </div>

        </React.Fragment>

        )
    }
    
  
    
        
}





export default Profile
