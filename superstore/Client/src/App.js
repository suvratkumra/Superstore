import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components";

import React from 'react';
import {Container, Button, View} from "react-bootstrap";
import logo from "./images/logo.png";
import {Helmet} from 'react-helmet';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: bottom;
  justify-content: center;
`;


function App() {
  return (
    <>
  
    <div className="application">
      <Helmet>
          <style>{'body { background-color: salmon; }'}</style>
      </Helmet>
    </div>
    
    <div>
      <text style={{fontSize:40, backgroundColor:'darkslateblue', width:50, marginLeft:600, color:'white' }}>Welcome To Superstore</text>
    </div>
    

    <span className="block-example border border-primary"></span>


    <AppContainer>
      <AccountBox />
    </AppContainer>
    <Container style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'space-between', marginLeft:675}}>
      <div className='Guest_link'>
        <a href="https://www.realcanadiansuperstore.ca/" target="_blank" rel="noreferrer noopener">
          <text style={{fontSize:20}}>
            Continue as a guest
          </text>
        </a>
      </div>
    </Container>


    
    <Container style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'space-between', marginLeft:1200}}>
    
    <Button style={{width:300,backgroundColor:'navy',marginTop:200, borderWidth: 4,borderColor: "#20232a", color: "white"}}>
      <text style={{marginLeft:10, fontSize:20}}>Continue as a Manager</text>
    </Button>
  </Container>

    </>
  )
}


export default App;
