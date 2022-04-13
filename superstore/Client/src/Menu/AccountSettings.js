import React from 'react';
import "./AccountSettings.css";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
const axios = require('axios');


class AccountSettings extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:this.props.username,
            email:this.props.email,
            password:this.props.password,
            msg:this.props.msg,
            uploadedFile:null
        }
    }

render(){

    

    return (
      
        <div className='overall'>

       <div className="profile">
       <span class = "profile_name">USER PROFILE </span>

        </div>

               
        <div className="formCategory1" >
            <div>
            <span>Email     </span>
                <input className = 'email' 
                    type = "text" 
                    name = "email" 
                    placeholder='Type'
                    defaultValue={this.state.email} 
                />
            </div>
                
            <br/>
                
        
           <div>
           <span>Password      </span>
                <input className = 'password' 
                    type = "text" 
                    name = "password" 
                    placeholder='Type'
                    defaultValue={this.state.password} 
                />
           </div>
               <br/>
         
           
            <br/>
            
            <div className="update_profile">
            <Button variant="primary" onClick={this.UpdateProfileHandler}>Update Profile</Button>

            </div>

         </div>       
    
        </div>
     

    )
}
}

const mapStatetoProps=(state)=>{
    return{
        username:state.user.userDetails.userid,
        username:state.user.userDetails.username,
        email:state.user.email,
        profileImage: state.user.profileImage,
        msg:state.user.msg
    }
}


export default AccountSettings;
