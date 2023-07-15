//import React from 'react';
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login With Google
      </Button>{" "}
      <Button variant="outline-secondary">
        <FaGithub /> Login With GitHub
      </Button>{" "}
      <div>
        <h4 className="mt-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebookF /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram /> Instragram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
