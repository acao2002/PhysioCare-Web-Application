import React, { Component } from 'react'

export default class Card extends Component {
    
    render() {
        const title = "Auto Mode";
        return (
            <div class ="text-center card align-middle"> 
                <h2>
                    {this.props.title} 
                </h2>
                <span>
                        <i class="icofont-automation"></i>
                </span>
            </div>
            
        )
    }
}
