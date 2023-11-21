import React, { Component } from "react";
import { MdPermIdentity, MdAssignment, MdPoll } from "react-icons/md";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions";
import { RiLogoutBoxLine } from "react-icons/ri";
import {
  MdSettings,
  MdRecentActors,
  MdAddCircle,
  MdFormatListBulleted,
  MdDelete,
  MdEqualizer,
} from "react-icons/md";

class Admin_Sidenav extends Component {
  handleLogout = () => {
    const { logout } = this.props;
    logout();
    window.location.href = "/";
  };

  render() {
    const activeNow = this.props.activeComponent;
    return (
      <>
        <h4 className="text-light text-center mt-2">PICT IMS</h4>
        <p className="mt-4">Menu</p>
        <ul id="ul">
          <li id="li" className={activeNow === 1 ? "sidenav-active" : ""}>
            <Link to="/admin/" className="adminProfile">
              <span className="mx-2">
                <MdPermIdentity style={{ margin: -1, padding: -1 }} />
              </span>
              Profile
            </Link>
          </li>
          <li id="li" className={activeNow === 2 ? "sidenav-active" : ""}>
            <Link to="/all" className="facultyList">
              <span className="mx-2">
                <MdFormatListBulleted style={{ margin: -1, padding: -1 }} />
              </span>
              Faculty List
            </Link>
          </li>
          <li id="li" className={activeNow === 3 ? "sidenav-active" : ""}>
            <Link to="/allStudents" className="studentList">
              <span className="mx-2">
                <MdRecentActors style={{ margin: -1, padding: -1 }} />
              </span>
              Student List
            </Link>
          </li>
          <li id="li" className={activeNow === 4 ? "sidenav-active" : ""}>
            <Link to="/add" className="addFaculty">
              <span className="mx-2">
                <MdAddCircle style={{ margin: -1, padding: -1 }} />
              </span>
              Add New Faculty
            </Link>
          </li>
          <li id="li" className={activeNow === 5 ? "sidenav-active" : ""}>
            <Link to="/deleteFaculty" className="deleteFaculty">
              <span className="mx-2">
                <MdDelete style={{ margin: -1, padding: -1 }} />
              </span>
              Delete Faculty
            </Link>
          </li>
          <li id="li" className={activeNow === 6 ? "sidenav-active" : ""}>
            <Link to="/stats" className="stats">
              <span className="mx-2">
                <MdEqualizer style={{ margin: -1, padding: -1 }} />
              </span>
              Stats
            </Link>
          </li>
          <li id="li" className={activeNow === 7 ? "sidenav-active" : ""}>
            <Link to="/studentReport" className="studentReport">
              <span className="mx-2">
                <MdAssignment style={{ margin: -1, padding: -1 }} />
              </span>
              Student Report
            </Link>
          </li>
          <li id="li" className={activeNow === 8 ? "sidenav-active" : ""}>
            <Link to="/aicteReport" className="report">
              <span className="mx-2">
                <MdPoll style={{ margin: -1, padding: -1 }} />
              </span>
              AICTE Report
            </Link>
          </li>
          <li id="li" className={activeNow === 9 ? "sidenav-active" : ""}>
            <Link to="/settings" className="setting">
              <span className="mx-2">
                <MdSettings style={{ margin: -1, padding: -1 }} />
              </span>
              Change Password
            </Link>
          </li>
          <li id="li" className="nav-item logout">
            <span className="mx-2">
              <RiLogoutBoxLine style={{ margin: -1, padding: -1 }} />
            </span>
            <a onClick={this.handleLogout}>Logout</a>
          </li>
        </ul>
      </>
    );
  }
}

export default connect((store) => ({ auth: store.auth }), { logout })(
  Admin_Sidenav
);
