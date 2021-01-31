import React, { Component } from 'react'
import './Auto.css'

export default class Manual extends Component {
    state = {
        action: "",
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
    render() {
         
        const i1 = "assets/img/actions/a1.png";
        const i2 = "assets/img/actions/a2.png";
        const i3 = "assets/img/actions/a3.png";
        const i4 = "assets/img/actions/a4.png";
        const i5 = "assets/img/actions/a5.png";
        const i6 = "assets/img/actions/a6.png";
 
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
                    <div className ="row text-center">
                        <div className = "col-lg-6 mt-2 text-center mx-auto">
                            <h3 style ={{color:"purple"}}> Select your action</h3>
                        </div>
                    
                    <div className = "row text-center">
                        <div class = "col-lg-6 mt-3 mx-auto" style ={{color:"white", backgroundColor:"lightblue", height:"500px"}}>
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
                    </div>
                </div>
              </div>
              <div className ="container text-center mt-3">
                    <button type="button" class="btn btn-primary btn-lg btn-block">Run one cycle</button>
                </div>
            </div>
        )
    }
}
