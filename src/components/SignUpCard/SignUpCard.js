import "./../../styles/card.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function SignUpCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
    
    <div className="box">
        <h2>Sign Up</h2>
        <form action="submit" method="post"  onSubmit={handleSignupSubmit}>
          <div className="inputBox">
            <i className="material-icons" style={{ borderRadius: "10px",color:"white" }}>
              person
            </i>
            <input type="text" name="name" required="" placeholder="Username" value={name} onChange={handleName} />
          </div>
          <div className="inputBox">
            <i className="material-icons" style={{ borderRadius: "10px",color:"white" }}>
              email
            </i>
            <input type="email" name="email" required="" placeholder="Email"  value={email} onChange={handleEmail}/>
          </div>
          <div className="inputBox">
            <i className="material-icons" style={{ borderRadius: "10px",color:"white" }}>
              lock
            </i>
            <input type="password" name="password" required="" placeholder="Password"   value={password}
          onChange={handlePassword}/>
          </div>
          <input type="submit" name="submit" value="Sign Up" />
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </>
  );
}

export default SignUpCard;
