import React from 'react';
import {Container} from "reactstrap";
import Footer from './Footer';



export default class NotFound extends React.Component {


    render() {
        return (

            <div className={'block'} >
                <br/>
                <Container >


                    <br/>
                    <div style={{"height": "500px"}}>
                        <h1>NotFound - 404 </h1>
                    </div>
                    
                    


                    <Footer/>

                </Container>

            </div>
        );
    }
}



