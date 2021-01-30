import React, { Component } from 'react'
import Card from '../FrontPage/Card';
import './Auto.css'


export default class Auto extends Component {
    render() {
        const action = "";
        const duration = 0;
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
                        <div class = "col-lg-5 mt-5 mx-auto" style ={{color:"white", backgroundColor:"lightgreen", height:"500px"}}>
                            <div className ="container-fluid my-auto mx-auto">
                                <div className ="row" style = {{ height:"166px" }}>
                                    <div className ="col text-center cc border border-secondary" >
                                        <h5 className ="cc"> Calve stretch </h5>
                                    </div>
                                    <div className ="col text-center cc border border-secondary">
                                        <h5 className ="cc"> Thigh fold </h5>
                                    </div>
                                </div>
                                <div className ="row" style = {{ height:"166px"}}>
                                    <div className ="col text-center cc border border-secondary">
                                        <h5 className ="cc"> Straight leg raise </h5>
                                    </div>
                                    <div className ="col text-center cc border border-secondary">
                                        <h5 className ="cc"> Walking </h5>
                                    </div>
                                </div>
                                <div className ="row" style = {{ height:"166px"}}>
                                    <div className ="col text-center cc border border-secondary">
                                        <h5 className ="cc">  Gait assist </h5>
                                    </div>
                                    <div className ="col text-center cc border border-secondary" >
                                        <h5 className ="cc"> Knee extensions </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class = "col-lg-5 mt-5  mx-auto" style ={{color:"white", backgroundColor:"lightgreen", height:"500px"}}>

                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}
