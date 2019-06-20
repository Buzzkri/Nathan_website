import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios"


const Navbar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        About
      </Menu.Item>
    </Link>
    <Link to="/paintings">
      <Menu.Item>
        View Paintings
      </Menu.Item>
    </Link>
    <Link to="/login">
      <Menu.Item>
        Login
      </Menu.Item>
    </Link>
    <Link to="/register">
      <Menu.Item>
        Register
      </Menu.Item>
    </Link>
  </Menu>
);

export default Navbar;

