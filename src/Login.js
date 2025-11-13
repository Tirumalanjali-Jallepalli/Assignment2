// import React, { Component } from "react";

// class Item extends Component {
//   state = {
//     listitems: ["List Item 1", "List Item 2", "List Item 3"]
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <ul className="list-group">
//           {this.state.listitems.map(listitem => (
//             <li className="list-group-item list-group-item-primary" />
//           ))}
//         </ul>
//       </React.Fragment>
//     );
//   }
// }

// export default Item; 
 
// import React, { Component } from "react";

// class Item extends Component {
//   state = {
//     listitems: ['List Item 1','List Item 2', 'List Item 3']
//   };

//   render() {
//     return (
//       <React.Fragment>

//       </React.Fragment>
//     );
//   }
// }

// export default Item; 


// import React, { Component } from "react";

// class Item extends Component {
//   state = {
//     listitems: ["Spring", "Summer", "Fall"]
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <ul className="list-group">
//           {this.state.listitems.map(listitem => (
//             <li
//               key={listitem}
//               className="list-group-item list-group-item-primary"
//             >
//               {listitem}
//             </li>
//           ))}
//         </ul>
//       </React.Fragment>
//     );
//   }
// }

// export default Item;

import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

const Login=(props)=>{
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[emailError,setEmailError]=useState("")
    const[passwordError,setPasswordError]=useState("")

    const navigate=useNavigate();

    const onButtonClick=()=>{
        // Set initial error values to empty
    setEmailError("")
    setPasswordError("")

    // Check if the user has entered both fields correctly
    if ("" === email) {
        setEmailError("Please enter your email")
        return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError("Please enter a valid email")
        return
    }

    if ("" === password) {
        setPasswordError("Please enter a password")
        return
    }

    if (password.length < 7) {
        setPasswordError("The password must be 8 characters or longer")
        return
    }

    // Authentication calls will be made here...       

    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
            value={email}
            placeholder="enter your email here"
            onChange={ev =>setEmail(ev.target.value)}
            className={"inputBox"}/>
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
            value={password}
            placeholder="enter your password here"
            onChange={ev =>setPassword(ev.target.value)}
            className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputcontainer"}>
            <input 
            className={"inputcontainer"}
            type="button"
            onClick={onButtonClick}
            value={"Log in"} />
        </div>
    </div>
}

export default Login

 
