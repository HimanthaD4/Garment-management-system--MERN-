import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { API_URL } from "../../constant";
import SearchBar from "../../layout/searchbar";
const IndustrialEngineering = (props) => {
  const [ProductMethod, setProductMenthod] = useState("");
  const [ResearchStatus, setResearchStatus] = useState("");
  const [Description, setDescription] = useState("");
  const [Cost, setCost] = useState("");
  const [Response, setResponse] = useState("");
  const [Keyword, setKeyword] = useState("");
  const industrialEngineeringRouter = "industrialEngineeringRouter/";
  //Notification
  const notify = () => toast.success("Successfully Saved !!");
  const setData = () => {
    let model = {
      poductMethod: ProductMethod,
      researchStatus: ResearchStatus,
      description: Description,
      cost: Number(Cost),
    };
    console.log("Model==>", model);
    axios.post(API_URL + industrialEngineeringRouter + "save", model);
    getData();
    notify();
  };
  const getData = () => {
    axios
      .get(API_URL + industrialEngineeringRouter + "get/")
      .then((response) => {
        setResponse(response.data);
      });
  };
  useEffect(() => {
    if (!Response) {
      getData();
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
        Router={industrialEngineeringRouter}
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
                      <Label>Research Status </Label>
                      <select
                        className="form-control"
                        onChange={(e) => {
                          setResearchStatus(e.target.value);
                        }}
                      >
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Product Method</Label>
                      <Input
                        type="text"
                        placeholder="Product Method"
                        onChange={(e) => {
                          setProductMenthod(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Description</Label>
                      <Input
                        type="text"
                        placeholder="Description"
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label> Cost</Label>
                      <Input
                        type="text"
                        placeholder=" Cost"
                        onChange={(e) => {
                          setCost(Number(e.target.value));
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
                    onClick={() => {
                      setData();
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
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Card>
            <CardHeader>All Account Details</CardHeader>
            <CardBody>
              <Table>
                <tr>
                  <th style={{ textAlign: "center" }}>Record Id</th>
                  <th style={{ textAlign: "center" }}>Product Method</th>
                  <th style={{ textAlign: "center" }}>Research Status</th>
                  <th style={{ textAlign: "center" }}>Description</th>
                  <th style={{ textAlign: "center" }}> Cost</th>
                  <th style={{ textAlign: "center" }}>Actions</th>
                </tr>
                {Response &&
                  Response.map((item, index) => {
                    return (
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          {Number(index) + 1}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {item.poductMethod}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {item.researchStatus}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {item.description}
                        </td>
                        <td style={{ textAlign: "center" }}>{item.cost}</td>

                        <td style={{ textAlign: "center" }}>
                          <div className="row">
                            <div className="col-md-5">
                              <Button type="">Delete</Button>
                            </div>
                            <div className="col-md-5 ml-1">
                              <Button color="primary">Edit</Button>
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
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};
export default IndustrialEngineering;

//IT21129476 N.N.M.H.Hirushan 
