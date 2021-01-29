import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import './FrontPage.css'
import Card from './Card'
import { Link } from 'react-router-dom';

export default class FrontPage extends Component {
    render() {
        const ic1 = "icofont-automation";
        const ic2 = "icofont-concrete5";
        return (
            <div>
                <div className = "container text-center">
                    <div class = "row text-center">
                        <div class ="col-lg-12">
                            <h1 className ="first-line text-center mt-5" style={{color:'white',fontSize: '300%',fontWeight: '700'}}>
                                PhysioCare
                            </h1> 
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className = "row ">
                        <div class = "col-lg-5 mt-5 card mx-auto cc" style ={{color:"white", backgroundColor:"lightgreen", height:"500px"}}>
                            <Link to="/auto" style ={{ textDecoration:"none"}}>
                                <Card  title ="Auto Mode" ic = {ic1}/>
                            </Link>
                            
                        </div>

                        <div class = "col-lg-5 mt-5  card  mx-auto cc" style ={{color:"white", backgroundColor:"lightgreen", height:"500px"}}>
                            <Link to="/manual" style ={{textDecoration:"none"}}>
                                <Card  title ="Manual Mode" ic ={ic2}/>
                            </Link>

                        </div>
                    </div>    
                </div>
            </div>
           
        )
    }
}
