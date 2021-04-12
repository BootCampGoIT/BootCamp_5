import React, { useState } from "react";
import { signUp } from "../../services/AuthAPI";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    signUp({ email, password, returnSecureToken: true });
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={email}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Password:
        <input
          type='text'
          name='password'
          value={password}
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default AuthForm;

// class AuthForm extends Component {
//     state = {
//       email: "",
//       password: "",
//     };

//     onHandleChange = (e) => {
//       const { name, value } = e.target;
//       this.setState({ [name]: value });
//     };
//     onHandleSubmit = (e) => {
//       e.preventDefault();
//       signUp({ ...this.state, returnSecureToken: true });
//     };

//     render() {
//       return (
//         <form onSubmit={this.onHandleSubmit}>
//           <label>
//             Email:
//             <input
//               type='text'
//               name='email'
//               value={this.state.email}
//               onChange={this.onHandleChange}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type='text'
//               name='password'
//               value={this.state.password}
//               onChange={this.onHandleChange}
//             />
//           </label>
//           <button type='submit'>Sign Up</button>
//         </form>
//       );
//     }
//   }

//   export default AuthForm;
