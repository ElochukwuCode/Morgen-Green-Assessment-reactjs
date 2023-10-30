import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Access.css";

const Signup = () => {
  return (
    <div className="signupBody">
      <div className=" login">
        <div className="logo">
          <a href="/">
            {" "}
            <img src="/images/Frame 1.png" alt="logo" />
          </a>
          <p>Create an Account</p>
        </div>
        <div className="signup-form">
          <form action="#">
            <label className="login-label">Username</label>
            <br />
            <input type="text" name="username" id="username" />
            <br />
            <label className="login-label">Email</label>
            <br />
            <input type="email" name="email" id="email" />
            <br />
            <label className="login-label">Password</label>
            <br />
            <input type="password" name="password" id="password" />
            <br />
            <label className="login-label"> Confirm Password</label>
            <br />
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
            />
            <br />
            <input type="checkbox" name="terms" id="terms" /> By creating an
            account, you agree with the{" "}
            <span className="color-purple">terms and conditions</span> <br />
            <a href="/verification">
              <button
                style={{ cursor: "pointer" }}
                type="button"
                className="login-btn"
              >
                Signup
              </button>
            </a>
          </form>
        </div>
        <div className="anAccount">
          <p>
            Already have an account?{" "}
            <a href="/login" style={{ textDecoration: "none" }}>
              <span className="color-purple">Login</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
