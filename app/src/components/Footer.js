import React from 'react';
import { Footer, Container } from 'react-bootstrap';
import styled from 'styled-components';
import LogTracker from '../assets/LogTracker.svg';

const Styles = styled.div`
  .navbar {
    background-color: #fff;
    padding: 2rem 0;    
  }

  .container {
    justify-content: center;
  }

  .navbar-brand, .navbar-nav, .nav-link{
    color: #000;
    
    .logo {
      height: 50px;
    }

    &:hover {
      color: #FBC900;
    }
  }
`;

export const Navigation = () => (
  <Styles>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={LogTracker} className="logo"/></Navbar.Brand>
      </Container>
    </Navbar>
  </Styles>
)