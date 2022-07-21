import React,{useState} from "react";
import "../assests/css/mystyle.css"

export default function FormExampleF() {
    var [employee,setemployee] = useState({
        name:"",
        email:"",
        phone:"",
        city:"",
        state:"",
    })
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setemployee(olddata=>{
            return{
                ...olddata,
                [name]:value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        alert(`Name = ${employee.name}\nEmail = ${employee.email}\nPhone = ${employee.phone}\nCity = ${employee.city}\nState = ${employee.state}`)
    }
    return (
        <>
            <div className='main'>
                <div className='item'>
                    <h1>Functional Form Example</h1>
                    <form>
                        <input type="text" onChange={getData} name="name" placeholder="Enter Your Name" />
                        <input type="email" onChange={getData} name="email" placeholder="Enter Your Email ID" />
                        <input type="text" onChange={getData} name="phone" placeholder="Enter Your Phone" />
                        <input type="text" onChange={getData} name="city" placeholder="Enter Your City" />
                        <input type="text" onChange={getData} name="state" placeholder="Enter Your State" />
                        <button type="submit" onClick={postData}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}


// import React,{useState} from "react";
// import "../assests/css/mystyle.css"

// export default function FormExampleF() {
//     var [employee,setemployee] = useState({
//         name:"",
//         email:"",
//         phone:"",
//         city:"",
//         state:"",
//     })
//     function getData(e) {
//         var name = e.target.name
//         var value = e.target.value
//         if(name=="name"){
//             setemployee({
//                 name:value,
//                 email:employee.email,
//                 phone:employee.phone,
//                 city:employee.city,
//                 state:employee.state,
//             })
//         }
//         else if(name=="email"){
//             setemployee({
//                 email:value,
//                 name:employee.name,
//                 phone:employee.phone,
//                 city:employee.city,
//                 state:employee.state,
//             })
//         }
//         else if(name=="phone"){
//             setemployee({
//                 phone:value,
//                 email:employee.email,
//                 name:employee.name,
//                 city:employee.city,
//                 state:employee.state,
//             })
//         }
//         else if(name=="city"){
//             setemployee({
//                 city:value,
//                 email:employee.email,
//                 phone:employee.phone,
//                 name:employee.name,
//                 state:employee.state,
//             })
//         }
//         else{
//             setemployee({
//                 state:value,
//                 email:employee.email,
//                 phone:employee.phone,
//                 city:employee.city,
//                 name:employee.name,
//             })
//         }
//     }
//     function postData(e) {
//         alert(`Name = ${employee.name}\nEmail = ${employee.email}\nPhone = ${employee.phone}\nCity = ${employee.city}\nState = ${employee.state}`)
//     }
//     return (
//         <>
//             <div className='main'>
//                 <div className='item'>
//                     <h1>Functional Form Example</h1>
//                     <form>
//                         <input type="text" onChange={getData} name="name" placeholder="Enter Your Name" />
//                         <input type="email" onChange={getData} name="email" placeholder="Enter Your Email ID" />
//                         <input type="text" onChange={getData} name="phone" placeholder="Enter Your Phone" />
//                         <input type="text" onChange={getData} name="city" placeholder="Enter Your City" />
//                         <input type="text" onChange={getData} name="state" placeholder="Enter Your State" />
//                         <button type="submit" onClick={postData}>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }