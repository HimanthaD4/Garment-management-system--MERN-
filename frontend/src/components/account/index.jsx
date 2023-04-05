import React, { useEffect, useState } from "react";
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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Account = (props) => {
  //Form Detail Variables
  const [EmpId, setEmpId] = useState("");
  const [Salary, setSalary] = useState("");
  const [SalaryType, setSalaryType] = useState("");
  const [LabourCost, setLabourCost] = useState("");
  //Employee Dropdown Data Variable
  const [Dropdown, setDropdown] = useState("");
  //Table Data Variable
  const [Response, setResponse] = useState("");
  //Search Keyword Variable
  const [Keyword, setKeyword] = useState("");
  //Account Router
  const accountRouter = "accountRouter/";
  //HR Router
  const hrRouter = "hrRouter/";
  //Notification
  const notify = () => toast.success("Successfully Saved !!");
  //Table Data Load Function
  const getAllData = () => {
    axios.get(API_URL + accountRouter + "/get").then((response) => {
      setResponse(response.data);
    });
  };
  //Dropdown Data Load Function
  const getEmployeeDetails = () => {
    axios.get(API_URL + hrRouter + "get").then((response) => {
      setDropdown(response.data);
    });
  };
  //Save Data Function
  const saveData = () => {
    let model = {
      empId: EmpId,
      salary: Number(Salary),
      salaryType: SalaryType,
      laborCost: Number(LabourCost),
    };
    axios
      .post(API_URL + accountRouter + "/save/", model)
      .then((response) => {});
    getAllData();
    notify();
  };
  //Form Load Function
  useEffect(() => {
    if (!Dropdown) {
      getEmployeeDetails();
    }
    if (!Response) {
      getAllData();
    }
  });
  return (
    <div>
      <br></br>
      <br></br>
      <SearchBar
        Keyword={Keyword}
        setKeyword={setKeyword}
        Response={Response}
        setResponse={setResponse}
        Router={accountRouter}
      ></SearchBar>
      <br></br>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Card>
            <CardHeader>Create Account Details</CardHeader>
            <CardBody>
              <Form>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Employee </Label>
                      <select
                        className="form-control"
                        //Set Data to the variable
                        onChange={(e) => {
                          setEmpId(e.target.value);
                        }}
                      >
                        {Dropdown &&
                          Dropdown.map((item) => {
                            return (
                              <option value={item.fName}>{item.fName}</option>
                            );
                          })}
                      </select>
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Salary</Label>
                      <Input
                        type="text"
                        placeholder="Salary"
                        onChange={(e) => {
                          setSalary(Number(e.target.value));
                        }}
                      />
                    </FormGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Salary Type</Label>
                      <select
                        className="form-control"
                        onChange={(e) => {
                          setSalaryType(e.target.value);
                        }}
                      >
                        <option value="Card">Card</option>
                        <option value="Cash">Cash</option>
                        <option value="Cheque">Cheque</option>
                      </select>
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Labour Cost</Label>
                      <Input
                        type="text"
                        placeholder="Labour Cost"
                        onChange={(e) => {
                          setLabourCost(Number(e.target.value));
                        }}
                      />
                    </FormGroup>
                  </div>
                </div>
              </Form>
              <br></br>
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-6">
                  <Button
                    color="primary"
                    //Call Create Data Function
                    onClick={() => {
                      saveData();
                    }}
                  >
                    Create Account Details
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
            <CardHeader>All Account Details</CardHeader>
            <CardBody>
              <Table>
                <tr>
                  <th style={{ textAlign: "center" }}>Record Id</th>
                  <th style={{ textAlign: "center" }}>Account Id</th>
                  <th style={{ textAlign: "center" }}>Salary</th>
                  <th style={{ textAlign: "center" }}>Salary Type</th>
                  <th style={{ textAlign: "center" }}>Labour Cost</th>
                  <th style={{ textAlign: "center" }}>Employee Name </th>
                  <th style={{ textAlign: "center" }}>Actions</th>
                </tr>
                {
                  //Loop Table Data
                  Response &&
                    Response.map((item, index) => {
                      return (
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            {Number(index) + 1}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {item.accountId}
                          </td>
                          <td style={{ textAlign: "center" }}>{item.salary}</td>
                          <td style={{ textAlign: "center" }}>
                            {item.salaryType}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {item.laborCost}
                          </td>
                          <td style={{ textAlign: "center" }}>{item.empId}</td>
                          <td style={{ textAlign: "center" }}>
                            <div className="row">
                              <div className="col-md-5">
                                <Button type="">Delete</Button>
                              </div>

                              <div className="col-md-5 ml-3">
                                <Button color="primary">Edit</Button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                }
              </Table>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};
export default Account;
