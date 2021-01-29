import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import './FrontPage.css'
import Card from './Card'

export default class FrontPage extends Component {
    render() {
        return (
            <div className = "container text-center">
                <div class = "row text-center">
                    <div class ="col-lg-12">
                        <h1 className ="first-line text-center mt-5" style={{color:'white',fontSize: '300%',fontWeight: '700'}}>
                            PhysioCare
                        </h1> 
                    </div>
                </div>

                <div class = "row">
                    <div class = "col-lg-6">
                        <Card title ="Auto Mode"/>
                    </div>

                    <div class = "col-lg-6">

                    </div>
                </div>
            </div>
        )
    }
}
