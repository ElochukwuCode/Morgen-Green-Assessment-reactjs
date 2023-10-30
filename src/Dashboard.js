import "./Dashboard.css";
import "./DashboardStyleGuide.css";

const TestDashboard = () => {
  return (
    <div className="dashboard">
      <div className="div">
        <div className="search">
          <div className="overlap-group">
            <input className="input" placeholder="Search" type="text" />{" "}
            <img className="img" src="/images/search 1.png" />
          </div>
        </div>
        <div className="text-wrapper">Hello Bolaji 👋🏼,</div>
        <div className="frame">
          <div className="frame-2">
            <div className="group">
              <img className="vuesax-linear" src="/images/profile-2user.png" />
            </div>
            <div className="frame-3">
              <div className="text-wrapper-2">Total Customers</div>
              <div className="text-wrapper-3">5,423</div>
            </div>
          </div>
          <div className="frame-2">
            <div className="group">
              <img className="vuesax-linear-2" src="/images/profile-tick.png" />
            </div>
            <div className="frame-3">
              <div className="text-wrapper-2">Premium Users</div>
              <div className="text-wrapper-3">1,893</div>
            </div>
          </div>
          <div className="frame-2">
            <div className="group">
              <img className="vuesax-linear-3" src="/images/monitor.png" />
            </div>
            <div className="frame-3">
              <div className="text-wrapper-2">Active Now</div>
              <div className="text-wrapper-3">189</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="e-change-wrapper">
                <div className="e-change">e&nbsp;&nbsp; change</div>
              </div>
              <img className="vector" src="img/vector-2.svg" />
            </div>
          </div>
        </div>
        <div className="table">
          <div className="div-wrapper">
            <div className="text-wrapper-4">All Customers</div>
          </div>
          <div className="content">
            <div className="input-dropdown">
              <div className="input-dropdown-base">
                <div className="input-with-label">
                  <div className="content-wrapper">
                    <div className="content-2">
                      <img className="img-2" src="/images/search 1.png" />{" "}
                      <input
                        className="text"
                        placeholder="Search"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="button">
                <button className="button-base" id="myBtn">
                  <img className="img-2" src="/images/sort-descending.png" />
                  <div className="text-2">Sort</div>
                </button>
                {/* <div id="myModal" className="modal">

                                    <!-- Modal content -->
                                    <div className="modal-content">
                                      <!-- <span className="close">&times;</span> -->
                                      <p>Sort - Date</p>
                                      <div className="close">
                                        <img src="/images/sort-descending.png" alt="icon" />
                                        <p>Most recent</p>
                                      </div>
                                      <div className="close">
                                        <img src="/images/sort-descending.png" alt="icon" />
                                        <p>Oldest</p>
                                      </div>
                                    </div>
                                  
                                </div> */}
              </button>

              <button className="button">
                <div className="button-base-2">
                  <img className="img-2" src="/images/Filters lines.png" />
                  <div className="text-2">Filters</div>
                </div>
              </button>
            </div>
          </div>
          <div className="content-3">
            <div className="column">
              <div className="table-header-cell">
                <div className="table-header">
                  <div className="text-3">Customer Name</div>
                </div>
              </div>
              <div className="table-cell">
                <div className="text-4">Joel Abiodun Bisola</div>
              </div>
              <div className="table-cell">
                <div className="text-4">James Jameson James</div>
              </div>
              <div className="table-cell">
                <div className="text-4">Wah izit Tuya</div>
              </div>
              <div className="table-cell">
                <div className="text-4">Abubakar Rukayat</div>
              </div>
            </div>
            <div className="column-2">
              <div className="table-header-cell">
                <div className="table-header">
                  <div className="text-5">Phone number</div>
                </div>
              </div>
              <div className="table-cell">
                <div className="text-6">(+234) 90-0118-1343</div>
              </div>
              <div className="table-cell">
                <div className="text-6">(+234) 90-0118-1343</div>
              </div>
              <div className="table-cell">
                <div className="text-6">(+234) 90-0118-1343</div>
              </div>
              <div className="table-cell">
                <div className="text-6">(+234) 90-0118-1343</div>
              </div>
            </div>
            <div className="column-3">
              <div className="table-header-cell">
                <div className="table-header">
                  <div className="text-5">Country</div>
                </div>
              </div>
              <div className="table-cell">
                <div className="text-7">Nigeria</div>
              </div>
              <div className="table-cell">
                <div className="text-7">Nigeria</div>
              </div>
              <div className="table-cell">
                <div className="text-7">Nigeria</div>
              </div>
              <div className="table-cell">
                <div className="text-7">Nigeria</div>
              </div>
            </div>
            <div className="column-4">
              <div className="table-header-cell">
                <div className="table-header">
                  <div className="text-5">Email</div>
                </div>
              </div>
              <div className="table-cell">
                <div className="text-8">example@example.com</div>
              </div>
              <div className="table-cell">
                <div className="text-8">example@example.com</div>
              </div>
              <div className="table-cell">
                <div className="text-8">example@example.com</div>
              </div>
              <div className="table-cell">
                <div className="text-8">example@example.com</div>
              </div>
            </div>
            <div className="column-5">
              <div className="table-header-cell">
                <div className="table-header">
                  <div className="text-3">Status</div>
                </div>
              </div>
              <div className="table-cell">
                <div className="badge">
                  <div className="badge-base">
                    <div className="dot">
                      <div className="dot-2"></div>
                    </div>
                    <div className="text-9">Premium</div>
                  </div>
                </div>
              </div>
              <div className="table-cell">
                <div className="badge">
                  <div className="badge-base">
                    <div className="dot">
                      <div className="dot-2"></div>
                    </div>
                    <div className="text-10">Premium</div>
                  </div>
                </div>
              </div>
              <div className="table-cell">
                <div className="badge-base-wrapper">
                  <div className="badge-base-2">
                    <div className="dot">
                      <div className="dot-3"></div>
                    </div>
                    <div className="text-11">Standard</div>
                  </div>
                </div>
              </div>
              <div className="table-cell">
                <div className="badge-base-wrapper">
                  <div className="badge-base-2">
                    <div className="dot">
                      <div className="dot-3"></div>
                    </div>
                    <div className="text-12">Standard</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-6">
              <div className="table-header-cell-2"></div>
              <div className="dropdown-wrapper">
                <div className="div-2">
                  <img className="img-2" src="/images/Group 1.png" />
                </div>
              </div>
              <div className="dropdown-wrapper">
                <div className="div-2">
                  <img className="img-2" src="/images/Group 1.png" />
                </div>
              </div>
              <div className="dropdown-wrapper">
                <div className="div-2">
                  <img className="img-2" src="/images/Group 1.png" />
                </div>
              </div>
              <div className="dropdown-wrapper">
                <div className="div-2">
                  <img className="img-2" src="/images/Group 1.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="pagination">
            <button className="button-base-3">
              <img className="img-2" src="/images/arrow-left.png" />
              <div className="text-13">Previous</div>
            </button>
            <div className="pagination-numbers">
              <div className="number">1</div>
              <div className="number-2">2</div>
              <div className="number-2">3</div>
            </div>
            <button className="button-base-3">
              <div className="text-13">Next</div>
              <img className="img-2" src="/images/arrow-right.png" />
            </button>
          </div>
        </div>
        <div className="rower">
          <div className="card-task">
            <div className="cadr-body">
              <div className="frame-4">
                <div className="title">
                  <div className="text-wrapper-5">Sales Performance</div>
                </div>
                <div className="select-wrapper">
                  <div className="select">
                    <div className="input-content">
                      <div className="input-content-2">
                        <div className="label">Duration</div>
                        <div className="placehoder">This Week</div>
                      </div>
                      <img className="img-3" src="/images/chevron-down.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="conent">
                <div className="graph-wrapper">
                  <div
                    className="graph"
                    style={{ backgroundImage: "url('/images/graph.png')" }}
                  >
                    <div className="overlap-group-3">
                      {/* <img className="ellipse" src="img/ellipse-6.svg" /> <img className="ellipse-2" src="img/ellipse-5.svg" />  */}
                    </div>
                  </div>
                </div>
                <div className="frame-5">
                  <div className="div-3">
                    <img className="img-3" src="/images/check-circle.png" />
                    <div className="frame-6">
                      <div className="text-wrapper-6">76%</div>
                      <div className="text-wrapper-7">Profit</div>
                    </div>
                  </div>
                  <div className="div-3">
                    <img className="img-3" src="/images/trending-up.png" />
                    <div className="frame-6">
                      <div className="text-wrapper-6">32%</div>
                      <div className="text-wrapper-7">Expenses</div>
                    </div>
                  </div>
                  <div className="div-3">
                    <img className="img-3" src="/images/trending-down.png" />
                    <div className="frame-6">
                      <div className="text-wrapper-6">13%</div>
                      <div className="text-wrapper-7">Loses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-team">
            <div className="content-4">
              <div className="title-2">
                <div className="text-wrapper-5">Staff</div>
              </div>
              <div className="frame-7">
                <div className="th">
                  <div className="tr">
                    <div className="td">
                      <div className="text-wrapper-8">Name</div>
                    </div>
                    <div className="td">
                      <div className="text-wrapper-8">Role</div>
                    </div>
                  </div>
                </div>
                <div className="div-3">
                  <div className="team-tr">
                    <div className="frame-8">
                      <div
                        className="frame-9"
                        style={{
                          backgroundImage: "url('/images/Frame 576.png')",
                        }}
                      ></div>
                      <div className="frame-10">
                        <div className="div-2">
                          <div className="jitu-chauhan">Chidinma Amanda</div>
                          <div className="jitu-example-com">
                            Chi.ama@example.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-director-wrapper">
                      <div className="project-director">Human Resources</div>
                    </div>
                    <img className="frame-11" src="/images/Frame 572.png" />
                  </div>
                </div>
                <div className="div-3">
                  <div className="team-tr">
                    <div className="frame-8">
                      <div
                        className="frame-12"
                        style={{
                          backgroundImage: "url ('images/Ellipse 496.png')",
                        }}
                      ></div>
                      <div className="frame-13">
                        <div className="div-2">
                          <div className="jitu-chauhan">Umar Sultan</div>
                          <div className="jitu-example-com">
                            Umar.s@example.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-director-wrapper">
                      <div className="project-director">Project Manager</div>
                    </div>
                    <img className="frame-11" src="/images/Frame 572.png" />
                  </div>
                </div>
                <div className="div-3">
                  <div className="team-tr">
                    <div className="frame-8">
                      <div
                        className="frame-14"
                        style={{
                          backgroundImage: "url('/images/Frame 576 (1).png')",
                        }}
                      ></div>
                      <div className="frame-15">
                        <div className="div-2">
                          <div className="jitu-chauhan">Oyinloye Afolabi</div>
                          <div className="jitu-example-com">
                            Oyin@example.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-director-wrapper">
                      <div className="project-director">Graphic Designer</div>
                    </div>
                    <img className="frame-11" src="/images/Frame 572.png" />
                  </div>
                </div>
                <div className="div-3">
                  <div className="team-tr">
                    <div className="frame-8">
                      <div
                        className="frame-16"
                        style={{
                          backgroundImage: "url('/images/Ellipse 496 (1).png')",
                        }}
                      ></div>
                      <div className="frame-17">
                        <div className="div-2">
                          <div className="jitu-chauhan">Enemuo Johnson</div>
                          <div className="jitu-example-com">
                            John@example.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-director-wrapper">
                      <div className="project-director">Backend Developer</div>
                    </div>
                    <img className="frame-11" src="/images/Frame 572.png" />
                  </div>
                </div>
                <div className="div-3">
                  <div className="team-tr">
                    <div className="frame-8">
                      <div
                        className="frame-18"
                        style={{
                          backgroundImage: "url('/images/Ellipse 496 (2).png')",
                        }}
                      ></div>
                      <div className="frame-19">
                        <div className="div-2">
                          <div className="jitu-chauhan">Omosofe Oludayo</div>
                          <div className="jitu-example-com">
                            O.O@example.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-director-wrapper">
                      <div className="project-director">Digital Marketer</div>
                    </div>
                    <img className="frame-11" src="/images/Frame 572.png" />
                  </div>
                </div>
                <div className="div-3">
                  <div className="team-tr">
                    <div className="frame-8">
                      <div
                        className="frame-20"
                        style={{
                          backgroundImage: "url('/images/Ellipse 496 (2).png')",
                        }}
                      ></div>
                      <div className="frame-19">
                        <div className="div-2">
                          <div className="jitu-chauhan">Omosofe Oludayo</div>
                          <div className="jitu-example-com">
                            O.O@example.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-director-wrapper">
                      <div className="project-director">Digital Marketer</div>
                    </div>
                    <img className="frame-11" src="/images/Frame 572.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="chart">
            <div className="summary-heading">
              <div className="frame-21">
                <div className="text-wrapper-9">Summary</div>
              </div>
              <div className="frame-22">
                <div className="input-content-wrapper">
                  <div className="input-content-3">
                    <div className="input-content-2">
                      <div className="label-2">Duration</div>
                      <div className="placehoder">This Week</div>
                    </div>
                    <img
                      className="fi-chevron-down"
                      src="/images/chevron-down.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-bar">
              <div className="x-axis">
                <div className="text-wrapper-10">100k</div>
                <div className="text-wrapper-11">80k</div>
                <div className="text-wrapper-11">60k</div>
                <div className="text-wrapper-11">40k</div>
                <div className="text-wrapper-11">20k</div>
              </div>
              <div className="bar">
                <div className="rectangle-wrapper">
                  <div className="rectangle"></div>
                </div>
                <div className="text-wrapper-12">Oct 10</div>
              </div>
              <div className="bar">
                <div className="rectangle-wrapper">
                  <div className="rectangle-2"></div>
                </div>
                <div className="text-wrapper-12">Oct 11</div>
              </div>
              <div className="bar">
                <div className="rectangle-wrapper">
                  <div className="rectangle-3"></div>
                </div>
                <div className="text-wrapper-12">Oct 12</div>
              </div>
              <div className="bar">
                <div className="rectangle-wrapper">
                  <div className="rectangle-4"></div>
                </div>
                <div className="text-wrapper-12">Oct 13</div>
              </div>
              <div className="bar">
                <div className="rectangle-wrapper">
                  <div className="rectangle-5"></div>
                </div>
                <div className="text-wrapper-12">Oct 14</div>
              </div>
              <div className="bar">
                <div className="rectangle-wrapper">
                  <div className="rectangle-6"></div>
                </div>
                <div className="text-wrapper-12">Oct 15</div>
              </div>
              <div className="bar">
                <div className="rectangle-wrapper">
                  <div className="rectangle-5"></div>
                </div>
                <div className="text-wrapper-12">Oct 16</div>
              </div>
              <div className="bar">
                <div className="rectangle-wrapper">
                  <div className="rectangle-5"></div>
                </div>
                <div className="text-wrapper-12">Oct 16</div>
              </div>
              <div className="bar">
                <div className="rectangle-wrapper">
                  <div className="rectangle-5"></div>
                </div>
                <div className="text-wrapper-12">Oct 16</div>
              </div>
              <div className="bar">
                <div className="rectangle-wrapper">
                  <div className="rectangle-5"></div>
                </div>
                <div className="text-wrapper-12">Oct 16</div>
              </div>
              <div className="bar">
                <div className="rectangle-wrapper">
                  <div className="rectangle-5"></div>
                </div>
                <div className="text-wrapper-12">Oct 16</div>
              </div>
              <div className="bar">
                <div className="rectangle-wrapper">
                  <div className="rectangle-5"></div>
                </div>
                <div className="text-wrapper-12">Oct 16</div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-menu">
          <div className="overlap">
            <div className="overlap-2">
              <div className="text-wrapper-13">Dashboard</div>
              <img className="grid-fill" src="/images/GridFill.png" />
            </div>
            <div className="list-menu">
              <img className="img-3" src="/images/Folder.png" />
              <div className="text-wrapper-14">Products and Orders</div>
            </div>
            <div className="list-menu-2">
              <div className="frame-23">
                <img className="img-3" src="/images/user-square 1.png" />
                <div className="text-wrapper-15">Customers</div>
              </div>
            </div>
            <div className="list-menu-3">
              <div className="frame-23">
                <img className="img-3" src="/images/2 User.png" />
                <div className="text-wrapper-15">Staff</div>
              </div>
            </div>
            <div className="frame-24">
              <img className="ellipse-3" src="/images/Ellipse 8.png" />
              <div className="frame-25">
                <div className="group-2">
                  <div className="overlap-group-4">
                    <div className="text-wrapper-16">Bolaji Adeleke</div>
                    <div className="text-wrapper-17">Admin</div>
                  </div>
                </div>
                <img className="img-3" src="/images/chevron-down.png" />
              </div>
            </div>
            <a href="/">
              <img className="frame-26" src="/images/Frame 1.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDashboard;
