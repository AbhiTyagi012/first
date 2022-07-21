import React, { Component } from "react";

export default class LiftingStateUp extends Component{
    render(){
        return(
            <>
                <h1>This is Class Component</h1>
                <button onClick={()=>{this.props.getData("Abhi Tyagi")}}>Click Me!!</button>
            </>
        )
    }
}