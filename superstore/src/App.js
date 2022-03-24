import React from 'react';
import login from './components/login.js';
import {Container, Button, View} from "react-bootstrap";
import logo from "./images/logo.png";
import {Helmet} from 'react-helmet';

function App() {
  return (
    <>
    <div className="application">
            <Helmet>
                <style>{'body { background-color: salmon; }'}</style>
            </Helmet>
        </div>
    <div>
      <text style={{fontSize:40, backgroundColor:'darkslateblue', width:2000, marginLeft:600, color:'white' }}>Welcome To Superstore</text>
    </div>
    <img src={logo} alt="logo_superstore" width={300}/>

    <span className="block-example border border-primary"></span>

 

    <Container style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'space-between', marginLeft:650}}>
      
      <Button style={{width:200,backgroundColor:'teal',marginTop:180,borderWidth: 4,borderColor: "#20232a"}}>
        <text style={{marginLeft:10, fontSize:40}}>LOGIN</text>
      </Button>
    </Container>

    <Container style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'space-between', marginLeft:675}}>
      <div className='Guest_link'>
        <a href="https://www.realcanadiansuperstore.ca/" target="_blank" rel="noreferrer noopener">
          <text style={{fontSize:20}}>
            Continue as a guest
          </text>
        </a>
      </div>
    </Container>


    <Container style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'space-between', marginLeft:650}}>
    
      <Button style={{width:200,backgroundColor:'teal',marginTop:70, borderWidth: 4,borderColor: "#20232a"}}>
        <text style={{marginLeft:10, fontSize:40}}>SIGN UP</text>
      </Button>
    </Container>

    
    <Container style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'space-between', marginLeft:1200}}>
    
    <Button style={{width:300,backgroundColor:'navy',marginTop:200, borderWidth: 4,borderColor: "#20232a", color: "white"}}>
      <text style={{marginLeft:10, fontSize:20}}>Contiue as a Manager</text>
    </Button>
  </Container>

    </>
  )
}


export default App;
