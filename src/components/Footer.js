import React, { Component } from 'react'
import logo from '../assets/images/MLblack.png';

export default class Footer extends Component {
    render() {
        return (
            <div className='container-fluid border-top border-secondary mt-4 mb-4'>
            <div className='container mt-4 mb-3'>
            <div className="row">
            <div className="col-sm-6 " >
              <div className="card " style={{backgroundColor: 'whitesmoke',borderColor:'#5c7d92',marginTop:"1rem"}}>
                <div className="card-body"  >
                <div className='box d-md-flex'>
                    <img src={logo} alt="Logo" title="Home" style={{height: "120px",with: "120px"}}/>                  
            <div className='text  ml-4 ' >
                    <h5 className="card-title">Visit Us</h5>
                    <p> Want to know more about us?</p>
                    <a href='https://baohuideng.github.io/BaohuiWebsite/index/index.html' className='text-muted' className="btn btn-sm btn-primary my-1"  >Baohui Deng</a> <br/>
                    <a href='https://github.com/tannazvhd' className='text-muted' className="btn btn-sm btn-primary my-1"  >Tannaz Vahidi</a><br/>
                    <a href='http://amrshakhshir.com/' className='text-muted' className="btn btn-sm btn-primary my-1"  >Amr Shakhshir</a><br/>

                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className="card" style={{backgroundColor: 'whitesmoke',borderColor:'#5c7d92',marginTop:"1rem"}}>
                <div className="card-body">
                  <h5 className="card-title">In Collobration With Social Computing</h5>
                  <p className="card-text">At the intersection of computer science and social science, we conduct applied research into intelligent data-intensive systems and their application in social media, technology-enhanced learning, and knowledge management domains..</p>
                  <a href="https://www.uni-due.de/soco/" class="btn btn-primary">Visit them</a>
                </div>
              </div>
            </div>
          </div>
          </div>
          <footer className="page-footer font-small  ">
            <div className="footer-copyright text-center  py-3">© 2020 Copyright:
                <a href="" style={{color: '#5c7d92'}}> FlaskPro </a>
            </div>

            </footer>
          </div>

        )
    }
}
