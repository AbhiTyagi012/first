import React, { Component } from "react";

var name = "Abhi Tyagi"
var arr = [10,20,30,40,50,60,70,80,90,100]
var emp = {
    id:1001,
    name:"Abhi Tyagi",
    dsg:"Student"
}
function display(){
    return(
        <h3>in display function of ClassComponents</h3>
    )
}
export default class classExportExample extends Component{
    render(){
        return(
            <h1>This is Exort Import Exmple of Class Component</h1>
        )
    }

}
export {name,arr,emp,display}