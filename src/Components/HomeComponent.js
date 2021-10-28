import React, { useState } from "react";
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
} from "reactstrap";
import Footer from "react-footer-comp";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(true);
  const [modal_new, setModal_new] = useState(false);
  const [showText, setShowText] = useState(false);
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

  const toggle = () => setIsOpen(!isOpen);
  const toggle_modal = () => {
    setModal(!modal);
    if (modal) {
      toggle_modal_new();
    }
  };
  const toggle_modal_new = () => setModal_new(!modal_new);

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
          <Form>
            <Row>
              <Col md={6} style={{ margin: "1% 0" }}>
                <FormGroup>
                  {/* <Label for="firstname">First Name</Label> */}
                  <Input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter Your First Name"
                    style={{ borderRadius: "20px" }}
                  />
                </FormGroup>
              </Col>
              <Col md={6} style={{ margin: "1% 0" }}>
                <FormGroup>
                  {/* <Label for="lastname">Last Name</Label> */}
                  <Input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter Your Last Name"
                    style={{ borderRadius: "20px" }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup style={{ margin: "2% 0" }}>
              {/* <Label for="email">Email</Label> */}
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                style={{ borderRadius: "20px" }}
              />
            </FormGroup>
            <FormGroup style={{ margin: "2% 0" }}>
              {/* <Label for="aadhar">Aadhar Number</Label> */}
              <Input
                type="text"
                name="aadhar"
                id="aadhar"
                placeholder="Enter Your Aadhar Number"
                style={{ borderRadius: "20px" }}
              />
            </FormGroup>
          </Form>
          <br />
          <center>
            <Button
              outline
              color="primary"
              onClick={toggle_modal}
              style={{ borderRadius: "20px" }}
            >
              Get One Time Password
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
          <Form>
            <FormGroup style={{ margin: "2% 0" }}>
              {/* <Label for="otp">OTP Number</Label> */}
              <Input
                type="text"
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
              onClick={toggle_modal_new}
              style={{ borderRadius: "20px" }}
            >
              Verify One Time Password
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
                      name="landlord_aadhar"
                      id="landlord_aadhar"
                      placeholder="Enter The Aadhar Number"
                    />
                    <Button onClick={onClick1}>Submit</Button>
                  </InputGroup>
                  <br />
                </div>
              ) : null}
              {showText1 ? (
                <div>
                  <br />
                  <InputGroup>
                    <Input
                      type="text"
                      name="landlord_otp"
                      id="landlord_otp"
                      placeholder="Enter The One Time Password"
                    />
                    <Button onClick={onClick2}>Submit</Button>
                  </InputGroup>
                  <br />
                </div>
              ) : null}
              {showText2 ? (
                <div>
                  <br />
                  <InputGroup>
                    <Input
                      type="text"
                      name="landlord_otp"
                      id="landlord_otp"
                      placeholder="Verify Your Address"
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
                  Enter Landlord's Aadhar Number
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
