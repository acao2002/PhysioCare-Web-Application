import React, { Component } from 'react'
import Card from '../FrontPage/Card';
import './Auto.css'
import Button from 'react-bootstrap/Button'


export default class Auto extends Component {
    state = {
        action: "",
        duration: 0,
    }
    
    setAction = act => {
        if (this.state.action !== act){
            this.setState(() => {
                return {action:act}
            })
        }
        else {
            this.setState(() => {
                return {action:""}
            }) 
        }

        console.log(this.state.action)
    }
    setDuration = time => {
        if (this.state.duration !== time){
            this.setState(() => {
                return {duration:time}
            })
        }
        else {
            this.setState(() => {
                return {duration:0}
            }) 
        }

        console.log(this.state.duration)
    }
    render() {
      
        const i1 = "assets/img/actions/a1.png";
        const i2 = "assets/img/actions/a2.png";
        const i3 = "assets/img/actions/a3.png";
        const i4 = "assets/img/actions/a4.png";
        const i5 = "assets/img/actions/a5.png";
        const i6 = "assets/img/actions/a6.png";
        const time = "assets/img/time.png";



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
                    <div className ="row">
                        <div className = "col-lg-5 mt-2 text-center  mx-auto">
                            <h3 style ={{color:"purple"}}> Select your action</h3>
                        </div>
                        <div className = "col-lg-5 mt-2 text-center  mx-auto">
                            <h3 style ={{color:"purple"}}> Select duration</h3>
                        </div>
                    </div>
                    
                    <div className = "row ">
                        <div class = "col-lg-5 mt-3  mx-auto" style ={{color:"white", backgroundColor:"lightblue", height:"500px"}}>
                            <div className ="container-fluid my-auto mx-auto">
                                <div className ="row" style = {{ height:"166px" }}>
                                    <div className = {this.state.action ==="calve"? "col text-center ccc border border-secondary":"col text-center cc border border-secondary"} onClick = {()=> {this.setAction('calve')}} >
                                        <h5 className ="cc"> Calve stretch </h5>
                                        <img src = {i4} style ={{objectFit:"contain", height:"30%", width: "25%"}}></img>
                                    </div>
                                    <div className ={this.state.action ==="thigh"? "col text-center ccc border border-secondary":"col text-center cc border border-secondary"} onClick = {()=> {this.setAction('thigh')}}>
                                        <h5 className ="cc"> Thigh fold </h5>
                                        <img src = {i2} style ={{objectFit:"contain", height:"30%", width: "25%"}}></img>
                                    </div>
                                </div>
                                <div className ="row" style = {{ height:"166px"}}>
                                    <div className ={this.state.action ==="leg"? "col text-center ccc border border-secondary":"col text-center cc border border-secondary"} onClick = {()=> {this.setAction('leg')}}>
                                        <h5 className ="cc"> Straight leg raise </h5>
                                        <img src = {i3} style ={{objectFit:"contain", height:"30%", width: "25%"}}></img>
                                    </div>
                                    <div className ={this.state.action ==="walk"? "col text-center ccc border border-secondary":"col text-center cc border border-secondary"} onClick = {()=> {this.setAction('walk')}}>
                                        <h5 className ="cc"> Walking </h5>
                                        <img src = {i1} style ={{objectFit:"contain", height:"30%", width: "25%"}}></img>
                                    </div>
                                </div>
                                <div className ="row" style = {{ height:"166px"}}>
                                    <div className ={this.state.action ==="gait"? "col text-center ccc border border-secondary":"col text-center cc border border-secondary"} onClick = {()=> {this.setAction('gait')}}>
                                        <h5 className ="cc">  Gait assist </h5>
                                        <img src = {i5} style ={{objectFit:"contain", height:"30%", width: "25%"}}></img>
                                    </div>
                                    <div className ={this.state.action ==="knee"? "col text-center ccc border border-secondary":"col text-center cc border border-secondary"} onClick = {()=> {this.setAction("knee")}} >
                                        <h5 className ="cc"> Knee extensions </h5>
                                        <img src = {i6} style ={{objectFit:"contain", height:"30%", width: "25%"}}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class = "col-lg-5 mt-3 mx-auto" style ={{color:"white", backgroundColor:"lightblue", height:"500px"}}>
                            <div className ="container-fluid my-auto mx-auto">
                                <div className ="row" style = {{ height:"166px" }}>
                                    <div className ={this.state.duration ===30? "col text-center ccc border border-secondary":"col text-center cc border border-secondary"} onClick = {()=> {this.setDuration(30)}}>
                                        <h5 className ="cc"> 30 minutes </h5>
                                        <img src = {time} style ={{objectFit:"contain", height:"30%", width: "25%"}}></img>
                                    </div>
                                    <div className ={this.state.duration ===60? "col text-center ccc border border-secondary":"col text-center cc border border-secondary"} onClick = {()=> {this.setDuration(60)}}>
                                        <h5 className ="cc"> 60 minutes  </h5>
                                        <img src = {time} style ={{objectFit:"contain", height:"30%", width: "25%"}}></img>
                                    </div>
                                </div>
                                <div className ="row" style = {{ height:"166px"}}>
                                    <div className ={this.state.duration ===90? "col text-center ccc border border-secondary":"col text-center cc border border-secondary"} onClick = {()=> {this.setDuration(90)}}>
                                        <h5 className ="cc"> 90 minutes </h5>
                                        <img src = {time} style ={{objectFit:"contain", height:"30%", width: "25%"}}></img>
                                    </div>
                                    <div className ={this.state.duration ===120? "col text-center ccc border border-secondary":"col text-center cc border border-secondary"} onClick = {()=> {this.setDuration(120)}}>
                                        <h5 className ="cc"> 120 minutes </h5>
                                        <img src = {time} style ={{objectFit:"contain", height:"30%", width: "25%"}}></img>
                                    </div>
                                </div>
                                <div className ="row" style = {{ height:"166px"}}>
                                    <div className ={this.state.duration ===150? "col text-center ccc border border-secondary":"col text-center cc border border-secondary"} onClick = {()=> {this.setDuration(150)}}>
                                        <h5 className ="cc">  150 minutes </h5>
                                        <img src = {time} style ={{objectFit:"contain", height:"30%", width: "25%"}}></img>
                                    </div>
                                    <div className ={this.state.duration === 180? "col text-center ccc border border-secondary":"col text-center cc border border-secondary"} onClick = {()=> {this.setDuration(180)}} >
                                        <h5 className ="cc"> 180 minutes </h5>
                                        <img src = {time} style ={{objectFit:"contain", height:"30%", width: "25%"}}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className ="container text-center mt-3">
                    <button type="button" class="btn btn-primary btn-lg btn-block">Run</button>
                </div>
                
            </div>
        )
    }
}
