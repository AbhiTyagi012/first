import React,{useState} from "react";

export default function InputExampleF(){
    var [fname,setfname] = useState("")
    var [lname,setlname] = useState("")
    var [dsg,setdsg] = useState("")
    function getData(e){
        if(e.target.name=="fname")
        setfname(e.target.value)
        else if(e.target.name=="lname")
        setlname(e.target.value)
        else
        setdsg(e.target.value)
    }
    function postData(e){
        if(fname.length>=3){
            alert("Full name: " + fname + " " + lname + "\nDesignation: " +dsg)
        }
    }
    return(
        <>
            <h1>Functional Component Example</h1>
            <h4>First Name : {fname}</h4>
            <h4>Last Name : {lname}</h4>
            <h4>Desgination : {dsg}</h4>
            <input type="text" onChange={getData} name="fname" placeholder="Enter Your First Name"/>
            <br/>
            <input type="text" onChange={getData} name="lname" placeholder="Enter Your Last Name"/>
            <br/>
            <input type="text" onChange={getData} name="dsg" placeholder="Enter Your Designation"/>
            <br/>
            <button onClick={postData}>Click ME</button>
        </>
    )
}