import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Access.css";
const Login = () => {
  return (
    <div className="signupBody">
      <div className="login">
        <div className="logo">
          <a href="/">
            <img src="/images/Frame 1.png" alt="logo" />
          </a>
          <p>Sign into your Account</p>
        </div>
        <div className="signup-form">
          <form action="#">
            <label className="login-label">Username</label>
            <br />
            <input type="text" name="username" id="username" />
            <br />
            <label className="login-label">Password</label>
            <br />
            <input type="password" name="password" id="password" />
            <br />
            <input type="checkbox" name="terms" id="terms" /> Remember me
            <br />
            <a href="/dashboard">
              <button type="button" className="login-btn">
                Sign in
              </button>
            </a>
          </form>
        </div>
        <div className="anAccount">
          <a href="/signup" style={{ textDecoration: "none" }}>
            <p className="color-purple">Create An Account</p>
          </a>
          <p>Forgot Password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
