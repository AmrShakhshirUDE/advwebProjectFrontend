import React, { Component } from 'react'
import Slider from './SlideShow'
import Footer from './Footer'
import { Row,Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap';

import { Link } from 'react-router-dom'





export default class Landing extends Component {
    render() {
        return (
            <div className="container-fluid px-0 wx-0">

                <Slider/> 

                
                <Row className="justify-content-sm-center mt-5 ">
                    <div className="col-sm-3">
                        <Card style={{'border': 'none','background-color': 'whitesmoke'}}>
                            <CardImg top style={{'width': '25%', 'margin':'0 auto'}} width="100%" src={require ('../assets/images/aboutus.png')} alt="aboutus" />
                            <CardBody>
                            <CardTitle className={ 'text-center'}style={{color:'#01061c', fontWeight: "bold"}}>Meet FlaskPro</CardTitle>
                            <CardText>We work together with great passion and perseverance. <br/>We offer with talents in the following fields: Web design, back-end development, front-end development.  </CardText>
                            <CardText>
                                <small className="text-muted">FlaskPro Group</small>
                            </CardText>
                            </CardBody>
                        </Card>
                    </div>  
                    <div className="col-sm-3">
                        <Card style={{'border': 'none','background-color': 'whitesmoke'}}>
                            <CardImg top style={{'width': '25%', 'margin':'0 auto'}} width="100%" src={require ('../assets/images/members.png')} alt="members" />
                            <CardBody>
                            <CardTitle className={ 'text-center'} style={{color:'#01061c', fontWeight: "bold"}}>Follow Us</CardTitle>
                            <CardText className={ 'text-center'}>
                                Baohui Deng
                                <br></br>
                                <small><a href={'https://github.com/BaohuiDeng'}style={{color:'#5c7d92'}}>github</a></small>
                                <br></br>
                                Tannaz Vahidi
                                <br></br>
                                <small><a href={'https://github.com/tannazvhd'}style={{color:'#5c7d92'}}>github</a></small>
                                <br></br>
                                Amr Shakhshir
                                <br></br>
                                <small><a href={'https://github.com/AmrShakhshir'}style={{color:'#5c7d92'}}>github</a></small>
                            </CardText>
                            <CardText>
                                <small className="text-muted"></small>
                            </CardText>
                            </CardBody>
                        </Card>
                    </div>  
                    <div className="col-sm-3">
                        <Card style={{'border': 'none','background-color': 'whitesmoke'}}>
                            <CardImg top style={{'width': '25%', 'margin':'0 auto'}} width="100%" src={require ('../assets/images/goal.png')} alt="goals" />
                            <CardBody>
                            <CardTitle  className={ 'text-center'} style={{color:'#01061c', fontWeight: "bold"}}>Material Land</CardTitle>
                            <CardText>Facilitate the study process for new students. <br/>Support with large study materials. <br/> Focus on the most important topics</CardText>
                            <CardText>
                                <small className="text-muted"></small>
                            </CardText>
                            </CardBody>
                        </Card>
                    </div>         
                </Row>  
                <br></br>
                <Footer />
            </div>
        )
    }
}
