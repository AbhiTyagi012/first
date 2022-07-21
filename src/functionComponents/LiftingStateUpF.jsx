import React, { Component } from "react";

export default function LiftingStateUp(props){
    return(
        <>
            <h1>This is Functional Component</h1>
            <button onClick={()=>{props.getData("Jason Holder")}}>Click ME!!!</button>
        </>
    )
}