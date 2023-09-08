import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1> ZKD Media</h1>
          <h6>Explore the ideas throught the word</h6>
        </div>
      </div>
      <LogIn />
      {/* <SignUp/> */}
    </div>
  );
};
function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!{" "}
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
// function SignUp() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Sign up</h3>
//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             className="infoInput"
//             name="firstname"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="infoInput"
//             name="lastname"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             className="infoInput"
//             name="username"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Password"
//             className="infoInput"
//             name="password"
//           />
//           <input
//             type="text"
//             placeholder="ConfirmPass"
//             className="infoInput"
//             name="confirm password"
//           />
//         </div>
//         <div>
//           <span style={{fontSize:"12px"}}>Already have an account. Login! </span>
//               </div>
//               <button className="button infoButton" type="submit">Sign up</button>
//       </form>
//     </div>
//   );
// }
export default Auth;
