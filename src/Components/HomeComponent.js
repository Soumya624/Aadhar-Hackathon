import React, { useState } from "react";
import { FaUndoAlt } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  InputGroup,
  Alert,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import Footer from "react-footer-comp";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(true);
  const [modal_new, setModal_new] = useState(false);
  const [modal_new_1, setModal_new_1] = useState(false);
  const [modal_request, setModal_request] = useState(false);
  const [modal_request_client, setModal_request_client] = useState(false);
  const [showText, setShowText] = useState(false);
  const [captchaErr, setCaptchaErr] = useState(null);
  const [uid, setUid] = useState("");
  const onClick = () => setShowText(true);
  const [showText1, setShowText1] = useState(false);
  const onClick1 = () => {
    setShowText1(true);
    if (showText === true) {
      setShowText(false);
    }
  };
  const [showText2, setShowText2] = useState(false);
  const onClick2 = () => {
    setShowText2(true);
    if (showText1 === true) {
      setShowText1(false);
    }
  };
  const [showText3, setShowText3] = useState(false);
  const onClick3 = () => {
    setShowText3(true);
    if (showText2 === true) {
      setShowText2(false);
    }
  };

  const toggle = () => setIsOpen(!isOpen);
  const toggle_modal = () => {
    setModal(!modal);
    if (uid !== "") {
      toggle_modal_new();
    }
  };
  const toggle_modal_new = () => {
    setModal_new(!modal_new);
    // if (modal_new && captchaValue) {
    //   toggle_modal_new_1();
    // }
  };
  const toggle_modal_new_1 = () => setModal_new_1(!modal_new_1);
  const toggle_modal_request = () => setModal_request(!modal_request);
  const toggle_modal_request_client = () =>
    setModal_request_client(!modal_request_client);
  const [captchaTxnId, setCaptchaTxnId] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [imgValue, setImgValue] = useState(null);
  const [otpValue, setOtpValue] = useState(null);
  const [txnId, setTxnId] = useState(null);

  function eKyc() {
    var config = {
      headers: { "Content-Type": "application/json" },
    };

    let data = {
      uid: "999924638810",
      txnId: txnId,
      otp: otpValue,
    };
    let url = "https://stage1.uidai.gov.in/onlineekyc/getEkyc/";

    axios
      .post(url, data, config)
      .then((res) => {
        console.log(res);

        let xhr = new XMLHttpRequest();
        const responseType = "json";
        xhr.responseType = responseType;
        xhr.open("GET", res.data.eKycString);
        xhr.onload = function () {
          console.log(xhr.response);
        };

        xhr.send();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getCaptcha() {
    let url =
      "https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/get/captcha";
    let data = {
      langCode: "en",
      captchaLength: "3",
      captchaType: "2",
    };
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(url, data, config)
      .then((res) => {
        // alert("Successfully Generated Captcha");
        console.log(res);
        setCaptchaTxnId(res.data.captchaTxnId);
        setImgValue("data:image/png;base64," + res.data.captchaBase64String);
        if (res.data.status === "Success") {
          // toggle_modal_new();
        }
        if (res.data.status === "Failure") {
          // setCaptchaErr(false)
        }
      })
      .catch((err) => {
        alert("Error In Generating Captcha");
        console.log(err);
      });
  }

  function getOtp() {
    let uiid = uuidv4();

    let headers = {
      "x-request-id": uiid,
      appid: "MYAADHAAR",
      "Accept-Language": "en_in",
      "Content-Type": "application/json",
    };

    let config = {
      headers: headers,
    };

    let data = {
      uidNumber: "999924638810",
      captchaTxnId: captchaTxnId,
      captchaValue: captchaValue,
      transactionId: "MYAADHAAR:" + uiid,
    };

    console.log(data);

    let url =
      "https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/generate/aadhaar/otp";

    axios
      .post(url, data, config)
      .then((res) => {
        alert("OTP Sent Successfully");
        console.log(res);
		setTxnId(res.data.txnId);
        if (res.data.status !== "Failure") {
          setModal_new(false);
          toggle_modal_new_1();
        } else {
          setCaptchaErr(res.data.message);
        }
      })
      .catch((err) => {
        alert("Unable To Sent OTP");
        console.log(err);
      });
  }

  return (
    <div>
      <Navbar
        color="light"
        light
        expand="md"
        style={{ paddingLeft: "3%", paddingRight: "3%" }}
      >
        <NavbarBrand href="/" style={{ color: "#02dbd3" }}>
          Aadhar_Logo
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        {/* <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About Us</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Join Now
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={toggle_modal}>Register</DropdownItem>
                <DropdownItem onClick={toggle_modal_new}>Login</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse> */}
      </Navbar>
      <Modal
        isOpen={modal}
        toggle={toggle_modal}
        style={{ borderRadius: "10px" }}
      >
        <center>
          <br />
          <img
            src="form12.png"
            alt=""
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          />

          <h4 style={{ textAlign: "center", margin: "3%" }}>Welcome User!</h4>
        </center>
        <ModalBody>
          <Form autoComplete="off">
            <FormGroup style={{ margin: "2% 0" }}>
              {/* <Label for="aadhar">Aadhar Number</Label> */}
              <Input
                type="text"
                name="aadhar"
                id="aadhar"
                placeholder="Enter Your Aadhar Number"
                style={{ borderRadius: "20px" }}
                onChange={(e) => {
                  setUid(e.target.value);
                }}
              />
            </FormGroup>
          </Form>
          <br />
          <center>
            <Button
              outline
              color="primary"
              onClick={() => {
                toggle_modal();
                getCaptcha();
              }}
              style={{ borderRadius: "20px" }}
            >
              Get Captcha
            </Button>{" "}
          </center>
        </ModalBody>
      </Modal>
      <Modal
        isOpen={modal_new}
        toggle={toggle_modal_new}
        style={{ borderRadius: "10px" }}
      >
        <center>
          <br />
          <img
            src={imgValue}
            alt=""
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          />
          {/* <Button>
            <FaUndoAlt
              onClick={(e) => {
                e.preventDefault();
                getCaptcha();
              }}
            />
          </Button> */}

          <h4 style={{ textAlign: "center", margin: "3%" }}>
            Captcha Verification!
          </h4>
        </center>
        <ModalBody>
          <Form autoComplete="off">
            <FormGroup style={{ margin: "2% 0" }}>
              {/* <Label for="otp">OTP Number</Label> */}
              <Input
                type="text"
                onChange={(e) => {
                  setCaptchaValue(e.target.value);
                }}
                name="captcha"
                id="captcha"
                placeholder="Enter The Captcha"
                style={{ borderRadius: "20px" }}
              />
            </FormGroup>
          </Form>
          <br />
          <center>
            <Button
              outline
              color="primary"
              onClick={() => {
                getOtp();
              }}
              style={{ borderRadius: "20px" }}
            >
              Verify Captcha
            </Button>{" "}
            <br />
            <br />
            <Alert
              style={{ display: captchaErr ? "block" : "none", height: "90%" }}
              color="danger"
            >
              {" "}
              {captchaErr}{" "}
            </Alert>
          </center>
        </ModalBody>
      </Modal>
      <Modal
        isOpen={modal_new_1}
        toggle={toggle_modal_new_1}
        style={{ borderRadius: "10px" }}
      >
        <center>
          <br />
          <img
            src="form12.png"
            alt=""
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          />
          <h4 style={{ textAlign: "center", margin: "3%" }}>
            OTP Verification!
          </h4>
        </center>
        <ModalBody>
          <Form autoComplete="off">
            <FormGroup style={{ margin: "2% 0" }}>
              {/* <Label for="otp">OTP Number</Label> */}
              <Input
                type="text"
                onChange={(e) => {
                  setOtpValue(e.target.value);
                }}
                name="otp"
                id="otp"
                placeholder="Enter Your One Time Password"
                style={{ borderRadius: "20px" }}
              />
            </FormGroup>
          </Form>
          <br />
          <center>
            <Button
              outline
              color="primary"
              onClick={() => {
                toggle_modal_new_1();
              }}
              style={{ borderRadius: "20px" }}
            >
              Verify OTP
            </Button>{" "}
          </center>
        </ModalBody>
      </Modal>

      <Row>
        <Col md={1}></Col>
        <Col
          md={5}
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            padding: "2% 0%",
            textAlign: "justify",
          }}
        >
          <br />
          <Card style={{ border: "none" }}>
            <CardBody>
              <center>
                <CardTitle tag="h1">
                  Welcome to{" "}
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#02dbd3" }}
                  >
                    Aadhar
                  </a>
                </CardTitle>
              </center>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minima veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex venia
              </CardText>
              {showText ? (
                <div>
                  <br />
                  <InputGroup>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setUid(e.target.value);
                      }}
                      name="landlord_aadhar"
                      id="landlord_aadhar"
                      placeholder="Enter The Aadhar Number"
                    />
                    <Button
                      onClick={() => {
                        onClick1();
                        getCaptcha();
                      }}
                    >
                      Submit
                    </Button>
                  </InputGroup>
                  <br />
                </div>
              ) : null}
              {showText1 ? (
                <div>
                  <br />
                  <center>
                    <img
                      src={imgValue}
                      alt=""
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: "70%",
                      }}
                    />
                  </center>
                  <br />
                  <InputGroup>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setCaptchaValue(e.target.value);
                      }}
                      name="demo_captcha"
                      id="demo_captcha"
                      placeholder="Enter The Captcha"
                    />
                    <Button
                      onClick={() => {
                        getOtp();
                        onClick2();
                      }}
                    >
                      Submit
                    </Button>
                  </InputGroup>
                  <br />
                  <Alert
                    style={{
                      display: captchaErr ? "block" : "none",
                      height: "90%",
                    }}
                    color="danger"
                  >
                    {" "}
                    {captchaErr}{" "}
                  </Alert>
                </div>
              ) : null}
              {showText2 ? (
                <div>
                  <br />
                  <InputGroup>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setOtpValue(e.target.value);
                      }}
                      name="landlord_otp"
                      id="landlord_otp"
                      placeholder="Verify The One Time Password"
                    />
                    <Button
                      onClick={() => {
                        eKyc();
                        onClick3();
                      }}
                    >
                      Sumbit
                    </Button>
                  </InputGroup>
                  <br />
                </div>
              ) : null}
              {showText3 ? (
                <div>
                  <br />
                  <InputGroup>
                    <Input
                      type="text"
                      name="landlord_address"
                      id="landlord_address"
                      placeholder="Here The Address Will be Fetched"
					  disabled
                    />
                    <Button>Save Changes</Button>
                  </InputGroup>
                  <br />
                </div>
              ) : null}
              <center>
                <Button
                  outline
                  color="link"
                  onClick={onClick}
                  style={{
                    marginRight: "1%",
                    borderColor: "#02dbd3",
                    color: "#02dbd3",
                    borderRadius: "20px",
                  }}
                >
                  Ask For An Address
                </Button>
              </center>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} style={{ padding: "2%" }}>
          <img src="home_new.png" alt="" style={{ width: "80%" }} />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Footer
        bgColor={"#02dbd3"}
        text={"All Rights Reserved © 2021 Firmware_rebel"}
      />
    </div>
  );
};

export default Example;
