import React, { useEffect, useState } from "react";
import { PenTool } from "react-feather";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label,
  Table,
} from "reactstrap";
import Moment from "moment";
import { API_URL } from "../../constant";
import axios from "axios";
import SearchBar from "../../layout/searchbar";
const HR = (props) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [NIC, setNIC] = useState("");
  const [Civil, setCivil] = useState("Married");
  const [UserRole, setUserRole] = useState("Junior Executive");
  const [Address, setAddress] = useState("");
  const [DOB, setDOB] = useState("");
  const [Gender, setGender] = useState("");
  const [Response, setResponse] = useState("");
  const [Keyword, setKeyword] = useState("");
  const [id, setId] = useState("");
  const [updateToggle, setUpdateToggle] = useState(false)

  const hrRouter = "hrRouter/";
  //Notification
  const notify = () => toast.success("Successfully Saved !!");
  const sendData = () => {
    let model = {
      nic: NIC,
      civilStatus: Civil,
      phoneNumber: Number(PhoneNumber),
      address: Address,
      dob: DOB,
      gender: Gender,
      fName: FirstName,
      lName: LastName,
      userRole: UserRole,
      joinDate: new Date(),
    };

    if(updateToggle) {
      axios.put(API_URL + hrRouter + "update" + `/${id}`, model).then((response) => {
        getData();
        notify();
      });
      setUpdateToggle(false);
    } else {
      axios.post(API_URL + hrRouter + "save/", model).then((response) => {
        getData();
        notify();
      });
    }
  };


  const getData = () => {
    axios.get(API_URL + hrRouter + "get").then((response) => {
      setResponse(response.data);
    });
  };
  useEffect(() => {
    if (!Response) {
      getData();
    }
  });

  const updateData =(id)=> {
    setUpdateToggle(true);
    setId(id)
    axios.get(API_URL + hrRouter + "get" + `/${id}`).then((response) => {
      console.log(response.data);
      console.log(response.data[0]);

      setFirstName(response.data[0].fName)
      setLastName(response.data[0].lName)
      setNIC(response.data[0].nic)
      setPhoneNumber(response.data[0].phoneNumber)
      setCivil(response.data[0].civilStatus)
      setUserRole(response.data[0].userRole)
      setAddress(response.data[0].address)
      setDOB(response.data[0].dob)
      setGender(response.data[0].gender)

      // setResponse(response.data);
    });
  }
  const deleteData =(id)=> {
    console.log("test")
    axios.delete(API_URL + hrRouter + "delete" + `/${id}`).then((response) => {
      getData();
    });
  }



  return (
    <div>
      <br></br>
      <br></br>
      <SearchBar
        Keyword={Keyword}
        setKeyword={setKeyword}
        Response={Response}
        setResponse={setResponse}
        Router={hrRouter}
      ></SearchBar>
      <br></br>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Card>
            <CardHeader>{updateToggle ? "Update Employee Details" : "Create Employee Details"}</CardHeader>
            <CardBody>
              <Form>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>First Name</Label>
                      <Input
                        type="text"
                        placeholder="First Name"
                        value={FirstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Last Name</Label>
                      <Input
                        type="text"
                        placeholder="Last Name"
                        value={LastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>NIC</Label>
                      <Input
                        type="text"
                        placeholder="NIC"
                        value={NIC}
                        onChange={(e) => {
                          setNIC(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Phone Number</Label>
                      <Input
                        type="text"
                        placeholder="Phone Number"
                        value={PhoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Civil Status</Label>
                      <select
                        className="form-control"
                        onChange={(e) => {
                          setCivil(e.target.value);
                        }}
                        value={Civil}
                      >
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                      </select>
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>User Role</Label>
                      <select
                        className="form-control"
                        onChange={(e) => {
                          setUserRole(e.target.value);
                        }}
                        value={UserRole}
                      >
                        <option value="Junior Executive">
                          Junior Executive
                        </option>
                        <option value="Executive">Executive</option>
                        <option value="Senior Executive">
                          Senior Executive
                        </option>
                        <option value="Associate Manager">
                          Associate Manager
                        </option>
                        <option value="Manager">Manager</option>
                        <option value="Genaral Manager">Genaral Manager</option>
                        <option value="Director">Director</option>
                      </select>
                    </FormGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Address</Label>
                      <Input
                        type="text"
                        placeholder="Address"
                        value={Address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Date of Birth</Label>
                      <Input
                        type="date"
                        placeholder="NIC"
                        value={DOB}
                        onChange={(e) => {
                          setDOB(Moment().format(e.target.value));
                        }}
                      />
                    </FormGroup>
                  </div>
                </div>
                <FormGroup>
                  <Label>Gender</Label>
                  <select
                    className="form-control"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    value={Gender}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </FormGroup>
              </Form>
              <br></br>
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-6">
                  <Button
                    color="primary"
                    onClick={() => {
                      sendData();
                    }}
                  >
                    {updateToggle ? "Update Employee Details" : "Create Employee Details"}
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-3"></div>
      </div>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Card>
            <CardHeader>All Employee Details</CardHeader>
            <CardBody>
              <Table>
                <tr>
                  <th style={{ textAlign: "center" }}>Record Id</th>
                  <th style={{ textAlign: "center" }}>First Name</th>
                  <th style={{ textAlign: "center" }}>Last Name</th>
                  <th style={{ textAlign: "center" }}>NIC</th>
                  <th style={{ textAlign: "center" }}>Phone Number</th>
                  <th style={{ textAlign: "center" }}>Civil Status</th>
                  <th style={{ textAlign: "center" }}>Address</th>
                  <th style={{ textAlign: "center" }}>User Roles</th>
                  <th style={{ textAlign: "center" }}>Gender</th>
                  <th style={{ textAlign: "center" }}>Date of Birth</th>
                  <th style={{ textAlign: "center" }}>Date of Joined</th>
                  <th style={{ textAlign: "center" }}>Actions</th>
                </tr>
                {Response &&
                  Response.map((item, index) => {
                    return (
                      <tr>
                        <td style={{ textAlign: "center" }} >{Number(index) + 1}</td>
                        <td style={{ textAlign: "center" }}>{item.fName}</td>
                        <td style={{ textAlign: "center" }} >{item.lName}</td>
                        <td style={{ textAlign: "center" }}>{item.nic}</td>
                        <td style={{ textAlign: "center" }} >{item.phoneNumber}</td>
                        <td style={{ textAlign: "center" }}>{item.civilStatus}</td>
                        <td style={{ textAlign: "center" }}>{item.address}</td>
                        <td style={{ textAlign: "center" }}>{item.userRole}</td>
                        <td style={{ textAlign: "center" }}>{item.gender}</td>
                        <td style={{ textAlign: "center" }}>{Moment(item.dob).format("yyyy-DD-MM")}</td>
                        <td style={{ textAlign: "center" }}>{Moment(item.joinDate).format("yyyy-DD-MM")}</td>
                        
                        <td>
                          <div>
                            <div>
                              <Button color="primary" onClick={() => updateData(item._id)}>Edit</Button>
                            </div>
                            <div>
                              <Button onClick={() => deleteData(item._id)}>Delete</Button>
                            </div>
                          </div>
                        </td>
                        
                      </tr>
                    );
                  })}
              </Table>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};
export default HR;
//hr


