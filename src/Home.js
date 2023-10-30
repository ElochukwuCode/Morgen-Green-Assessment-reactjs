import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <div className="nav-items">
          <img src="/images/Frame 1.png" alt="logo" />
          <p>Home</p>
          <div className="nav-products">
            <p>Products</p>
            <img
              src="/images/chevron-down.png"
              alt="arrow"
              style={{ marginBottom: "8px" }}
            />
          </div>
          <div className="nav-products">
            <p>Resources</p>
            <img
              src="/images/chevron-down.png"
              alt="arrow"
              style={{ marginBottom: "8px" }}
            />
          </div>
          <p>Pricing</p>
        </div>
        <div>
          <a href="/login">
            <button className="home-login-btn">Log in</button>
          </a>
          <a href="/signup">
            <button className="home-signup-btn">Sign up</button>
          </a>
        </div>
      </nav>
      <hr />

      <div className="providing">
        <div className="d-flex justify-content-center mt-5">
          <div>
            <h1 className="text-center d-flex">
              Providing
              <div className="mx-2 text_change">
                <span className="mb-2">Optimal</span>
                <span className="mb-2">Efficient</span>
                <span className="mb-2">Simple</span>
              </div>
              Customer Service
            </h1>
          </div>
        </div>
        <p>
          Sort your customers needs in one place and ensure efficient user
          management
        </p>
        <div className="providing-btns">
          <button className="get-started">Get Started</button>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="laptop-div">
          <div>
            <div className="slanty d-flex align-items-center">
              <marquee
                scrollamount="20"
                className="d-flex"
                behavior="alternate"
                direction=""
              >
                <div className="d-flex align-items-center pp">
                  <h5 className="me-5">* ALL YOU NEED, WHAT YOU WANT</h5>
                  <h5 className="me-5">* ALL YOU NEED, WHAT YOU WANT</h5>
                  <h5 className="me-5">* ALL YOU NEED, WHAT YOU WANT</h5>
                  <h5 className="me-5">* ALL YOU NEED, WHAT YOU WANT</h5>
                  <h5 className="me-5">* ALL YOU NEED, WHAT YOU WANT</h5>
                  <h5 className="me-5">* ALL YOU NEED, WHAT YOU WANT</h5>
                  <h5 className="me-5">* ALL YOU NEED, WHAT YOU WANT</h5>
                  <h5 className="me-5">* ALL YOU NEED, WHAT YOU WANT</h5>
                  <h5 className="me-5">* ALL YOU NEED, WHAT YOU WANT</h5>
                  <h5 className="me-5">* ALL YOU NEED, WHAT YOU WANT</h5>
                </div>
              </marquee>
            </div>
          </div>

          <img
            src="/images/Group 300.png"
            alt="rainbow arc"
            className="rainbow"
          />
          <img
            src="/images/Surface Laptop Studio.png"
            alt="laptop"
            className="laptop"
          />
        </div>
      </div>
      <div className="forbes">
        <h1>
          "YOUR BUSINESS WILL THANK YOU,
          <br />
          IT HAS ALL YOU NEED."
        </h1>
        <img src="/images/Frame 1000005523.png" alt="stars" />
      </div>
      <div className="logos-div">
        <div>
          <p className="partners">Partners</p>
          <div className="logoss">
            <img
              src="/images/Frame 1000005532.png"
              alt="google"
              id="logo-grp-1"
            />
            <img
              src="/images/Frame 1000005533.png"
              alt="stripe"
              id="logo-grp-1"
            />
            <img src="/images/Pitch svg.png" alt="pitch logo" id="logo-grp-1" />
            <img
              src="/images/Greenlight - jpeg.png"
              alt="greenlight"
              id="logo-grp-2"
            />
            <img src="/images/Group.png" alt="wellsfargo" id="logo-grp-2" />
          </div>
        </div>
      </div>
      <div className="why-exchange-div">
        <div className="why-exchange-text">
          <h1>Why eXchange?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Nihil <br />{" "}
            sit eaque aliquam quos, eveniet delectus? Placeat!
          </p>
        </div>
        <div className="widgets">
          <img src="/images/Frame 1000005373.png" alt="widget" />
          <img src="/images/Frame 1000005374.png" alt="widget" />
          <img src="/images/Frame 1000005375.png" alt="widget" />
          <img src="/images/Frame 1000005377.png" alt="widget" />
        </div>
        <hr className="before-pricing-hr" />
        <div className="pricing-plans">
          <h2>Pricing Plans</h2>
          <p>
            Got questions? Find clarity and answers to commonly asked <br />
            questions
          </p>
        </div>
        <div className="plans">
          <div className="standard-plan">
            <h3>Standard plan</h3>
            <hr className="plans-horizoltal-rule" />
            <img src="/images/Price.png" alt="price" /> <br />
            <button>Get Started</button>
            <hr className="plans-horizoltal-rule" />
            <img src="/images/List.png" alt="list" />
          </div>
          <div className="standard-plan">
            <h3>Premium plan</h3>
            <hr className="plans-horizoltal-rule" />
            <img src="/images/Price (1).png" alt="price" />
            <br />
            <button>Get Started</button>
            <hr className="plans-horizoltal-rule" />
            <img src="/images/List (1).png" alt="list" />
          </div>
        </div>
      </div>
      <hr className="before-stories-hr" />
      <div className="story-div">
        <div className="story-head">
          <h1>
            Real Stories From
            <br />
            Real Customers
          </h1>
          <p>Get inspired by these stories</p>
        </div>
        <div className="stories">
          <div className="story">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum
              deserunt at tempore perferendis ullam ducimus, voluptatum sapiente
              quod aspernatur illo, accusantium velit optio eius!
            </p>
            <h6>Teg Handley</h6>
            <p className="CTO">CTO Worldview</p>
            <img src="/images/“.png" alt="guillemet" className="story-comma" />
          </div>
          <div className="story second">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum
              deserunt at tempore perferendis ullam ducimus, voluptatum sapiente
              quod aspernatur illo, accusantium velit optio eius!
            </p>
            <h6>Teg Handley</h6>
            <p className="CTO">CTO Worldview</p>
            <img src="/images/“.png" alt="guillemet" className="story-comma" />
          </div>
          <div className="story">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum
              deserunt at tempore perferendis ullam ducimus, voluptatum sapiente
              quod aspernatur illo, accusantium velit optio eius!
            </p>
            <h6>Teg Handley</h6>
            <p className="CTO">CTO Worldview</p>
            <img src="/images/“.png" alt="guillemet" className="story-comma" />
          </div>
        </div>
        <img src="/images/“.png" alt="comma" className="comma" />
        <img src="/images/“ (1).png" alt="comma 2" className="comma2" />
      </div>
      <hr className="hr-before-FAQ" />
      <div className="FAQ-div">
        <div className="FAQ-head">
          <h2>Frequently Asked Questions</h2>
          <p>
            Got questions? Find clarity and answers to commonly asked <br />
            questions
          </p>
        </div>
        <div className="FAQ-body">
          <div className="FAQ">
            <div className="faqs">
              <h4>Why is it called eXchange?</h4>
              <p>
                You'll make a better win in digital if you know how to work
                around their creative contents and how to amplify them to the
                markets that need it most.
              </p>
              <img src="/images/Button Icon.png" alt="button icon" />
            </div>
            <hr />
            <div className="faqs">
              <h4>Why does my Business need eXchange's CRM?</h4>
              <p>
                You'll make a better win in digital if you know how to work
                around their creative contents and how to amplify them to the
                markets that need it most.
              </p>
              <img src="/images/Button Icon.png" alt="button icon" />
            </div>
            <hr />
            <div className="faqs">
              <h4>What Licenses or Accreditations does eXchange have?</h4>
              <p>
                You'll make a better win in digital if you know how to work
                around their creative contents and how to amplify them to the
                markets that need it most.
              </p>
              <img src="/images/Button Icon.png" alt="button icon" />
            </div>
            <hr />
          </div>
        </div>
      </div>

      <div className="blog-posts">
        <div className="overlap">
          <div className="rectangle"></div>
          <div className="frame">
            <div className="div">
              <div
                className="blog"
                style={{ backgroundImage: "url('images/Rectangle 8.png')" }}
              >
                <div className="overlap-group">
                  <p className="text-wrapper">
                    Why war is a sly means for super powers to sell their
                    arsenal.
                  </p>
                  <div className="text-wrapper-2">12.10.2023</div>
                  <p className="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
              <div
                className="blog"
                style={{ backgroundImage: "url('images/Rectangle 8 (1).png')" }}
              >
                <div className="overlap-2">
                  <p className="text-wrapper-3">
                    Customer Service Issues?
                    <br />
                    We have the Solution!
                  </p>
                  <div className="text-wrapper-2">01.01.2023</div>
                  <p className="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
              <div
                className="blog"
                style={{ backgroundImage: "url('images/Rectangle 8 (1).png')" }}
              >
                <div className="overlap-3">
                  <p className="text-wrapper-3">
                    Customer Service Issues?
                    <br />
                    We have the Solution!
                  </p>
                  <div className="text-wrapper-2">01.01.2023</div>
                  <p className="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
              <div
                className="blog"
                style={{ backgroundImage: "url('images/Rectangle 8 (1).png')" }}
              >
                <div className="overlap-4">
                  <p className="text-wrapper-3">
                    Customer Service Issues?
                    <br />
                    We have the Solution!
                  </p>
                  <div className="text-wrapper-2">01.01.2023</div>
                  <p className="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
              <div
                className="blog"
                style={{
                  backgroundImage:
                    "url('images/WhatsApp Image 2023-10-28 at 09.26.52.jpeg')",
                }}
              >
                <div className="overlap-5">
                  <p className="text-wrapper-3">
                    You get Light?
                    <br />
                    We’ve got something better
                  </p>
                  <div className="text-wrapper-2">01.01.2023</div>
                  <p className="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-4">Our Blog Posts</div>
            <p className="text-wrapper-5">
              Find stories and compelling arguments around the world’s Issues
            </p>
          </div>
        </div>
      </div>

      <hr className="hr-before-start-journey" />
      <div className="start-journey-div">
        <div className="start-journey">
          <h2>Start your Journey</h2>
          <p>Join over 4,000+ startups already growing with exchange.</p>
          <a href="./signup">
            <button>Get Started</button>
          </a>
        </div>
        <div className="start-journey-img">
          <img src="/images/Vector 3.png" alt="A lady on the phone" />
        </div>
      </div>
      <div className="subscribe-div">
        <form action="">
          <input type="text" placeholder="Enter your Email" name="email" />
          <button>Subscribe</button>
        </form>
      </div>
      <footer>
        <div>
          <img src="/images/Frame 1.png" alt="logo" />
        </div>
        <div className="footer-items">
          <ul>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Pricing</li>
            <li>Careers</li>
            <li>Help</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="copyright">
          <p>
            &copy; 2023 exchange.
            <br />
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
