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
} from "reactstrap";
import Gallery from "react-photo-gallery";
import { photos } from "./Photos";
import Footer from "react-footer-comp";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal_new, setModal_new] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle_modal = () => setModal(!modal);
  const toggle_modal_new = () => setModal_new(!modal_new);

  return (
    <div>
      <Navbar
        color="light"
        light
        expand="md"
        style={{ paddingLeft: "3%", paddingRight: "3%" }}
      >
        <NavbarBrand href="/" style={{ color: "#259be4" }}>
          Cuvette_Logo
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
          <h4 style={{ textAlign: "center", margin: "3%" }}>Register Here!</h4>
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
              {/* <Label for="password">Password</Label> */}
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                style={{ borderRadius: "20px" }}
              />
            </FormGroup>
            <FormGroup style={{ margin: "2% 0" }}>
              {/* <Label for="confirmpassword">Confirm Password</Label> */}
              <Input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Re-Enter Your Password"
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
              Register Here
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
          <h4 style={{ textAlign: "center", margin: "3%" }}>Login Here!</h4>
        </center>
        <ModalBody>
          <Form>
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
              {/* <Label for="password">Password</Label> */}
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                style={{ borderRadius: "20px" }}
              />
            </FormGroup>
            <FormGroup style={{ margin: "2% 0" }}>
              {/* <Label for="confirmpassword">Confirm Password</Label> */}
              <Input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Re-Enter Your Password"
                style={{ borderRadius: "20px" }}
              />
            </FormGroup>
            <center>
              <a href="#" style={{ textDecoration: "none", color: "grey" }}>
                Forgot Password? Click Here
              </a>
            </center>
          </Form>
          <br />
          <center>
            <Button
              outline
              color="primary"
              onClick={toggle_modal_new}
              style={{ borderRadius: "20px" }}
            >
              Login Here
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
            padding: "2%",
            textAlign: "left",
          }}
        >
          <Card style={{ border: "none" }}>
            <CardBody>
              <CardTitle tag="h1">
                Welcome to{" "}
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#259be4" }}
                >
                  Cuvette
                </a>
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </CardText>
              <Button
                outline
                color="link"
                onClick={toggle_modal}
                style={{
                  marginRight: "1%",
                  borderColor: "#259be4",
                  color: "#259be4",
                  borderRadius: "20px",
                }}
              >
                Register Here
              </Button>
              <Button
                outline
                color="link"
                onClick={toggle_modal_new}
                style={{
                  marginLeft: "1%",
                  borderColor: "#259be4",
                  color: "#259be4",
                  borderRadius: "20px",
                }}
              >
                Login Here
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} style={{ padding: "2%" }}>
          <img src="home.gif" alt="" style={{ width: "100%" }} />
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#259be4",
          color: "white",
          textAlign: "center",
          padding: "5% 8%",
        }}
      >
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <br />
      </Row>
      <br />
      <br />
      <br />
      <h2>
        Photo{" "}
        <a href="#" style={{ textDecoration: "none", color: "#259be4" }}>
          Gallery
        </a>
      </h2>
      <br />
      <br />
      <div style={{ padding: "0 10% 8% 10%" }}>
        <Gallery photos={photos} />
      </div>
      <Footer bgColor={"#259be4"} text={"All Rights Reserved © 2021 AlphaX"} />
    </div>
  );
};

export default Example;
