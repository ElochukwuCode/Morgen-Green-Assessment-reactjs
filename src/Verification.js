import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Access.css";

const Verification = () => {
  // let modality = document.getElementById("verificationModal");
  // let btn = document.getElementById("verification-btn");
  // let span = document.getElementsByClassName("close-verification-modal")[0];
  function showPopUp() {
    document.getElementById("verifyDiv").style.display = "hide";
    document.getElementById("verificationModal").style.display = "block";
    setTimeout(() => {
      window.location.replace("/login");
    }, 5000);
  }

  return (
    <div className="signupBody">
      <div className="login" id="verifyDiv">
        <div className="logo">
          <Link to="/">
            <img src="images/Frame 1.png" alt="logo" />
          </Link>
          <p>Create an Account</p>
        </div>
        <div className="signup-form">
          <form action="#">
            <h3>Enter Verification Code</h3>
            <p>
              A six digit Verification code has been sent to your email address
              example@example.com
            </p>
            <div className="input-field">
              <input type="number" />
              <input type="number" disabled />
              <input type="number" disabled />
              <input type="number" disabled />
              <input type="number" disabled />
              <input type="number" disabled />
            </div>
            <p>Resend after 59 seconds</p>
            <a href="/verification-success">
              <button type="button" className="login-btn" id="verification-btn">
                Verify Email Address
              </button>
            </a>
          </form>
        </div>
        <div className="anAccount">
          <p>
            Already have an account?{" "}
            <a href="./login.html" style={{ textDecoration: "none" }}>
              <span className="color-purple">Sign in</span>
            </a>
          </p>
        </div>
      </div>
      {/* The Modal  */}
      <div id="verificationModal" style={{}} className="modal">
        {/* Modal content  */}
        <div className="verification-modal-content">
          <span className="close-verification-modal">&times;</span>
          <div className="modal-text">
            <h1>Verification Successful</h1>
            <p>
              You will automatically be redirected to your login page after{" "}
              <b>10 seconds</b>.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
