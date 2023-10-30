import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Access.css";

const Verification = () => {
  setTimeout(() => {
    window.location.replace("/login");
  }, 5000);

  return (
    <div className="signupBody">
      <div style={{}}>
        <div className="verification-modal-content">
          <div className="modal-icon">
            <img src="images/check-circle.png" alt="" height="100px" />
          </div>
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
