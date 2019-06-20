import React from 'react';
// import { Header, Container, } from "semantic-ui-react";
// import "./components/Header.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => (

  <div>
    <img src="./images/prince_eric.jpg" alt="Prince Eric" style={{
      // backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
    </img>
    <Header1>Hello</Header1>
    <Link to="paintings" >
    <StyledButton>
      View Paintings
    </StyledButton>
    </Link>
    <Link to="About" >
    <StyledButton>
      About Us
    </StyledButton>
    </Link>
    <Link to="contact" >
    <StyledButton>
      Contact
    </StyledButton>
    </Link>
  </div>  
  
);

const StyledButton = styled.div`
  display: flex;
  background: #312d2d;
  color: white;
  padding: 15px 25px;
  justify-content: center;
  transition: background 0.2s ease;
  cursor: pointer;
  width: 150px;
  /* border-radius: 3px; */
  /* margin: 20px; */

  &:hover {
    background: #606060;
    transition: background 0.2s ease;
  }
`;

const Header1 = styled.div`
display: flex;
justify-content: center;
font-Size: 40px;

`

const img 
 = styled.div`
  background-Image: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  background-Position: 'center',
  background-Size: 'cover',
  background-Repeat: 'no-repeat'
`


export default Home;