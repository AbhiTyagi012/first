import React from "react";
import pic1 from "../assests/images/pic6.jpg"
import pic2 from "../assests/images/pic7.jpg"
import pic3 from "../assests/images/pic8.jpg"

var hstyle={
    backgroundColor:"purple",
    color:"white",
    padding:"10px",
    textAlign:"center"
}
var imgStyle={
    width:"33%",
    height:"300px"
}
export default function CSSExample(){
    return(
        <>
            <h1 style={hstyle}>This is Example of Functional Component</h1>
            <h1 style={hstyle}>CSS/Images Example</h1>
            <img src={pic1} style={imgStyle}/>
            <img src={pic2} style={imgStyle}/>
            <img src={pic3} style={imgStyle}/>
        </>
    )
}



// import React from "react";
// import "../assests/css/mystyle.css"
// import pic1 from "../assests/images/pic6.jpg"
// import pic2 from "../assests/images/pic7.jpg"
// import pic3 from "../assests/images/pic8.jpg"



// export default function CSSExample(){
//     return(
//         <>
//             <h1>This is Example of Functional Component</h1>
//             <h1>CSS/Images Example</h1>
//             <img src={pic1} className="img"/>
//             <img src={pic2} className="img"/>
//             <img src={pic3} className="img"/>
//         </>
//     )
// }

// export default function CSSExample(){
//     return(
//         <>
//             <h1>This is Example of Functional Component</h1>
//             <h1>CSS/Images Example</h1>
//             <img src={pic1} width="33%" height="300px"/>
//             <img src={pic2} width="33%" height="300px"/>
//             <img src={pic3} width="33%" height="300px"/>
//         </>
//     )
// }