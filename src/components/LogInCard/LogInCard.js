import "./../../styles/card.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <div className="box">
        <h2 className>Log In</h2>
        <form action="submit" method="post" onSubmit={handleLoginSubmit}>
          <div className="inputBox">
            <i
              className="material-icons"
              style={{ borderRadius: "10px", color: "#FFE6E6" }}
            >
              email
            </i>
            <input
              type="email"
              name=""
              required=""
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div className="inputBox">
            <i
              className="material-icons"
              style={{ borderRadius: "10px", color: "#FFE6E6" }}
            >
              lock
            </i>
            <input
              type="password"
              name=""
              required=""
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <input type="submit" name="" value="Log In" />
        </form>
        <span className="extraInfo">
          Dont have an account ? <a href="/">SignUp Here</a>
        </span>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </>
  );
}

export default LoginPage;
