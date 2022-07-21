import React,{useState} from "react"

export default function StateExampleF(){
    var [num,setnum]=useState(1)
    function increment(){
        setnum(++num)
        
    }
    function decrement(){
        if(num>1){
            setnum(--num)
        }
        
    }
    return(
        <>
            <h1>Functional State Example</h1>
            <h3>num = {num}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}