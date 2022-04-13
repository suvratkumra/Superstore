import React from 'react';
import "./AccountSettings.css";
import { Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import Axios from 'axios'
import { useState, useEffect } from 'react';

function AccountSettings() {
    const [emailAddress, setemailAddress] = useState({val: ""});
    const [password, setpassword] = useState({val: ""});

    Axios.post("http://localhost:3001/api/Menu/AccountSettings", {
        emailAddress: emailAddress.val,
        password: password.val,

    }).then((res) => {
        setemailAddress(res.data)
        setpassword(res.data)
        console.log(res.data)

    })
    
    Axios.post("http://localhost:3001/api/Menu/UpdateAccountSettings", {
        emailAddress: emailAddress.val,
        password: password.val,
    })
    


    return (
        <>
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
               
                />
            </div>
                
            <br/>
                
        
           <div>
           <span>Old Password      </span>
                <input className = 'password' 
                    type = "text" 
                    name = "password" 
                    placeholder='Type'
                    
                />
           </div>
           <div>
           <span>New Password      </span>
                <input className = 'password' 
                    type = "text" 
                    name = "password" 
                    placeholder='Type'
                    
                />
           </div>
               <br/>
         
           
            <br/>
            
            <div className="update_profile">
            <Button variant="primary" onClick={this.UpdateProfileHandler}>Update Profile</Button>

            </div>
         </div>       
    
        </div>
     
        </>
    )
}


export default AccountSettings;
