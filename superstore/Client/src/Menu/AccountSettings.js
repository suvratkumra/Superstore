import React from 'react';
import "./AccountSettings.css";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import DefaultUserPic from "../images/team-male.png";
const axios = require('axios');


class AccountSettings extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user_id:this.props.user_id,
            username:this.props.username,
            email:this.props.email,
            profileImage:this.props.profileImage,
            msg:this.props.msg,
            uploadedFile:null
        }
    }
    fetchUserDetails=(user_id)=>{
        //console.log(user_id);
        axios.get("http://localhost:3000/api/login"+user_id,{
            headers: {
                "content-type": "application/json"
              }
        }).then(res=>{
            console.log(res);
            this.setState({email:res.data.results[0].email});
            this.setState({profileImage:res.data.results[0].profileImage})
        })

    }

    changeProfileImage=(event)=>{
       
        this.setState({uploadedFile:event.target.files[0]});
    }

    UpdateProfileHandler=(e)=>{
        e.preventDefault();
        //create object of form data
        const formData=new FormData();
        // formData.append("profileImage",this.state.uploadedFile);
        formData.append("user_id",this.state.user_id);

        //update-profile
        axios.post("http://localhost:3001/api/Menu/AccountSettings",formData,{
            headers: {
                "content-type": "application/json"
              }
        }).then(res=>{
            console.log(res);
           this.setState({msg:res.data.message});
           this.setState({profileImage:res.data.results.profileImage});
        })
        .catch(err=>console.log(err))
    }


    componentDidMount(){
     this.fetchUserDetails(this.state.user_id);
    }

render(){

    if(this.state.profileImage){
        var imagestr=this.state.profileImage;
        imagestr = imagestr.replace("public/", "");
        var profilePic="http://localhost:3000/"+imagestr;
    }else{
         profilePic=DefaultUserPic;
    }

    return (
      
        <div>
       

        <div className="ProfilePic"> 
       <img src={profilePic} alt="profils pic" />
        </div>

       <div className="profile">
        <span>User Profile</span>

        </div>

               
        <div className="formCategory1" width='600'>
                <span>Username</span>
                <input className = 'username' 
                    type = "text" 
                    name = "username" 
                    placeholder='Type'
                    defaultValue={this.state.username} 
                />

                
        
            </div>
            <div className="formCategory2">
                <span>Email</span>
                <input className = 'email' 
                    type = "text" 
                    name = "email" 
                    placeholder='Type'
                    defaultValue={this.state.email} 
                />
        
            </div>
            
 
 
            <div className="formCategory4">
                <span>Profile Image</span>
                <Form.Control type="file" name="profileImage" onChange={this.changeProfileImage}/>
                </div>
            <Button variant="primary" onClick={this.UpdateProfileHandler}>Update Profile</Button>

            
    
        </div>
     

    )
}
}

const mapStatetoProps=(state)=>{
    return{
        user_id:state.user.userDetails.userid,
        username:state.user.userDetails.username,
       email:state.user.email,
       profileImage: state.user.profileImage,
       msg:state.user.msg
    }
}


export default AccountSettings;
