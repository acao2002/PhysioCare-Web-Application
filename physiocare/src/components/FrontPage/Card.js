import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
    
    render() {
        const title = "Auto Mode";
        return (
            <div class ="text-center"> 
                <h2 class= " align-middle">
                    {this.props.title} 
                </h2>
                <span>
                        <i class = {"ic "+ this.props.ic} ></i>
                </span>
            </div>
            
        )
    }
}
