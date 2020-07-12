import React from 'react';
import {Button, Container, Input, InputGroup, InputGroupAddon} from "reactstrap";
import Footer from './Footer';
import axios from "axios";

export default class Search extends React.Component {
    state = {
        searchItem: "",
        compelete: false,
        list: ""

    };


    // Search = () => {

    //     if (this.state.searchItem !== '') {

    //         this.setState({
    //             compelete: true
    //         });

    //         axios({
    //             url: 'http://localhost:8080/search/'+ this.state.searchItem,
    //         }).then(response => {


    //             this.setState({

    //                     list: response.data,
    //                 }
    //             );
    //             console.log(this.state.list);

    //         }).catch(error => {
    //             console.log(error);

    //         })
    //     } else {
    //         this.setState({
    //             logCompelete: false,
    //         })
    //     }


    // };
        render()
        {
            return (

                <div className={'block'}>
                    <br/>
                    <Container>

                        <br/>

                        <div className="containerSearch">

                            <InputGroup>
                                <Input placeholder="search..." onChange={e => {
                                    this.setState({searchItem: e.target.value})
                                }}/>
                                <InputGroupAddon addonType="append">
                                    <Button color="secondary"><img className="searchImg"
                                                                   src={require('../assets/images/search.png')}
                                                                   title={"search"} alt={"search"}
                                                                   onClick={this.Search}/></Button>
                                </InputGroupAddon>
                            </InputGroup>


                        </div>


                        <Footer/>

                    </Container>
                </div>
            );
        }


}
