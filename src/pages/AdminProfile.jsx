import React, { Component } from "react";
import { connect } from "react-redux";
import AdminSidenav from "../components/Admin_Sidenav";
import { getAdmin, updateAdmin } from "../store/actions/admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorBoundary } from "react-error-boundary";
class AdminProfile extends Component {
  state = {
    isLoading: true,
    data: {
      _id: null,
      name: {
        firstname: "",
        lastname: "",
      },
      department: "",
      designation: "",
      emailId: "",
      username: "",
    },
    isEditing: false,
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const { getAdmin } = this.props;
    await getAdmin();
    const { admin } = this.props;
    if (admin) {
      this.setState({
        data: { ...admin },
        isLoading: false,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { updateAdmin } = this.props;
    const formData = new FormData(event.target);
    const updatedata = {
      name: {
        firstname:
          formData.get("firstname") || this.state.data.name.firstname,
        lastname: formData.get("lastname") || this.state.data.name.lastname,
      },
      department: formData.get("department") || this.state.data.department,
      designation: formData.get("designation") || this.state.data.designation,
      emailId: formData.get("emailId") || this.state.data.emailId,
      username: this.state.data.username,
    };
    updateAdmin(this.state.data._id, updatedata);
    window.location.reload(false);
  };

  toggleEditForm = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
  };

  render() {
    const { data, isLoading, isEditing } = this.state;
    return (
      <ErrorBoundary>
        <div>
          <div className="row no-gutters">
            <div className="col-sm-2 sidenav">
              <AdminSidenav activeComponent="1" />
            </div>
            <div className="col-sm-10">
              <div className="container-fluid mt-2">
                <h4>My Profile</h4>
                <div className="text-muted">Username: {data.username}</div>
                <hr />
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <form id="form" onSubmit={this.handleSubmit}>
                    <div className="alert alert-info">
                      Click <strong>Edit</strong> to fill in the details and{" "}
                      <strong>Update</strong> the information:
                    </div>
                    <hr />
                    <div className="container-fluid">
                      <div className="form-row my-2">
                        <div className="col-sm-6">
                          First Name:
                          <input
                            readOnly={!isEditing}
                            type="text"
                            name="firstname"
                            id="firstname"
                            className="form-control"
                            value={data.name.firstname}
                          />
                        </div>
                        <div className="col-sm-6">
                          Last Name:
                          <input
                            readOnly={!isEditing}
                            type="text"
                            name="lastname"
                            id="lastname"
                            className="form-control"
                            value={data.name.lastname}
                          />
                        </div>
                      </div>
                      <div className="form-row my-2">
                        <div className="col-sm-6">
                          Designation:
                          <select
                            id="designation"
                            name="designation"
                            className="form-control"
                            defaultValue={data.designation}
                            disabled={!isEditing}
                          >
                            <option value="ClassCoordinator">
                              Class Coordinator
                            </option>
                            <option value="DepartmentIntershipCoordinator">
                              Department Internship Coordinator
                            </option>
                            <option value="CollegeInternshipCoordinator">
                              College Internship Coordinator
                            </option>
                            <option value="Principal">Principal</option>
                            <option value="Admin">Admin</option>
                          </select>
                        </div>
                        <div className="col-sm-6">
                          Department:
                          <input
                            readOnly={!isEditing}
                            type="text"
                            name="department"
                            id="department"
                            className="form-control"
                            value={data.department}
                          />
                        </div>
                      </div>
                      <div className="form-row my-2">
                        <div className="col-sm-6">
                          Email:
                          <input
                            readOnly={!isEditing}
                            type="email"
                            name="emailId"
                           id="emailId"
                            className="form-control"
                            value={data.emailId}
                          />
                        </div>
                      </div>
                      <div className="form-row my-2">
                        <div className="col-sm-12">
                          <button
                            id="editButton"
                            type="button"
                            className="btn btn-danger"
                            onClick={this.toggleEditForm}
                          >
                            {isEditing ? "Cancel" : "Edit"}
                          </button>
                          <button
                            id="updateBtn"
                            type="submit"
                            className="btn btn-primary ml-2"
                            disabled={!isEditing}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state) => ({
  admin: state.admin?.admin,
});

const mapDispatchToProps = {
  getAdmin,
  updateAdmin,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile);