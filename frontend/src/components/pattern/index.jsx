import axios from "axios";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Table,
} from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { API_URL } from "../../constant";
import SearchBar from "../../layout/searchbar";

const PatternRouter = "patternMakingRouter/";
const notify = () => toast.success("Successfully Saved !!");
const Pattern = (props) => {
  const [DesignName, setDesignName] = useState("");
  const [Material, setMaterial] = useState("");
  const [MaterialCost, setMaterialCost] = useState("");
  const [Color, setColor] = useState("");
  const [Price, setPrice] = useState("");
  const [Gender, setGender] = useState("");
  const [Size, setSize] = useState("");
  const [Response, setResponse] = useState("");
  const [Keyword, setKeyword] = useState("");
  const clearData = () => {
    setDesignName("");
    setColor("");
    setMaterial("");
    setMaterialCost("");
    setPrice("");
  };
  const PostData = () => {
    let model = {
      designName: DesignName,
      material: Material,
      materialCost: Number(MaterialCost),
      color: Color,
      price: Number(Price),
      genderType: Gender,
      size: Size,
    };
    axios.post(API_URL + PatternRouter + "save", model).then((response) => {
      clearData();
      getAllData();
      notify();
    });
  };
  const getAllData = () => {
    axios.get(API_URL + PatternRouter + "get/").then((response) => {
      setResponse(response.data);
    });
  };
  useEffect(() => {
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
        Router={PatternRouter}
      ></SearchBar>
      <br></br>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Card>
            <CardHeader>Create New Pattern</CardHeader>
            <CardBody>
              <Form>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <label>Design Name</label>
                      <Input
                        value={DesignName}
                        type="text"
                        placeholder="Desing Name"
                        onChange={(e) => {
                          setDesignName(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <label>Material</label>
                      <Input
                        value={Material}
                        type="text"
                        placeholder="Material"
                        onChange={(e) => {
                          setMaterial(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <label>Material Cost</label>
                      <Input
                        value={MaterialCost}
                        type="text"
                        placeholder="Material Cost"
                        onChange={(e) => {
                          setMaterialCost(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <label>Color</label>
                      <Input
                        value={Color}
                        type="text"
                        placeholder="Color"
                        onChange={(e) => {
                          setColor(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <label>Price</label>
                      <Input
                        value={Price}
                        type="text"
                        placeholder="Price"
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <label>Gender Type</label>
                      <select
                        className="form-control"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </FormGroup>
                  </div>
                </div>
                <FormGroup>
                  <label>Size</label>
                  <select
                    className="form-control"
                    onChange={(e) => {
                      setSize(e.target.value);
                    }}
                  >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </FormGroup>
                <Button
                  color="primary"
                  onClick={() => {
                    PostData();
                  }}
                >
                  Create Pattern
                </Button>
              </Form>
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
            <Table>
              <tr>
                <th style={{ textAlign: "center" }}>Record Id</th>
                <th style={{ textAlign: "center" }}>Pattern Name</th>
                <th style={{ textAlign: "center" }}>Material</th>
                <th style={{ textAlign: "center" }}>Material Cost</th>
                <th style={{ textAlign: "center" }}>Color</th>
                <th style={{ textAlign: "center" }}>Price </th>
                <th style={{ textAlign: "center" }}>Gender Type</th>
                <th style={{ textAlign: "center" }}>Size</th>
                <th style={{ textAlign: "center" }}>Actions</th>
              </tr>
              {Response &&
                Response.map((item, index) => {
                  return (
                    <tr>
                      <td className="tr" style={{ textAlign: "center" }}>
                        {Number(index) + 1}
                      </td>
                      <td className="tr" style={{ textAlign: "center" }}>
                        {item.designName}
                      </td>
                      <td className="tr" style={{ textAlign: "center" }}>
                        {item.material}
                      </td>
                      <td className="tr" style={{ textAlign: "center" }}>
                        {item.materialCost}
                      </td>
                      <td className="tr" style={{ textAlign: "center" }}>
                        {item.color}
                      </td>
                      <td className="tr" style={{ textAlign: "center" }}>
                        {item.price}
                      </td>
                      <td className="tr" style={{ textAlign: "center" }}>
                        {item.genderType}
                      </td>
                      <td className="tr" style={{ textAlign: "center" }}>
                        {item.size}
                      </td>
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
          </Card>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};
export default Pattern;
