import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    email: "",
    username: "",
    password: "",
    isAdmin: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setData({ ...data, [target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://honest-bear-95.loca.lt/auth/signup";
      const { data: res } = await axios.post(url, data);
      // navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
 return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Login
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="FirstName"
              name="FirstName"
              onChange={handleChange}
              value={data.FirstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="LastName"
              name="LastName"
              onChange={handleChange}
              value={data.LastName}
              required
              className={styles.input}
            />
             <input
              type="tel"
              placeholder="PhoneNumber"
              name="PhoneNumber"
              onChange={handleChange}
              value={data.PhoneNumber}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            <label>
              <input
                type="checkbox"
                name="isAdmin"
                checked={data.isAdmin}
                onChange={handleChange}
              />
              Admin 
            </label>
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;

// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";

// const Signup = () => {
//   const [data, setData] = useState({ username: "", email: "", password: "", isAdmin: false });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = ({ target }) => {
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     setData({ ...data, [target.name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = "https://eventmanagement.loca.lt/api/auth/register"; // Replace with your API URL
//       const { data: res } = await axios.post(url, data);
//       navigate("/login");
//       console.log(res.message);
//     } catch (error) {
//       if (
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status <= 500
//       ) {
//         setError(error.response.data.message);
//       }
//     }
//   };

//   return (
//     <div className={styles.signup_container}>
//       <div className={styles.signup_form_container}>
//         <div className={styles.left}>
//           <h1>Welcome Back</h1>
//           <Link to="/">
//             <button type="button" className={styles.white_btn}>
//               Login
//             </button>
//           </Link>
//         </div>
//         <div className={styles.right}>
//           <form className={styles.form_container} onSubmit={handleSubmit}>
//             <h1>Create Account</h1>
//             <input
//               type="text"
//               placeholder="Username"
//               name="username"
//               onChange={handleChange}
//               value={data.username}
//               required
//               className={styles.input}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleChange}
//               value={data.email}
//               required
//               className={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//               value={data.password}
//               required
//               className={styles.input}
//             />
//             <label>
//               <input
//                 type="checkbox"
//                 name="isAdmin"
//                 checked={data.isAdmin}
//                 onChange={handleChange}
//               />
//               Admin
//             </label>
//             {error && <div className={styles.error_msg}>{error}</div>}
//             <button type="submit" className={styles.green_btn}>
//               SignUp
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
