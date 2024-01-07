import React, { Component } from 'react';
import Detail from './detail';
import Ques from "./ques";
import Greet from './greet';
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from 'firebase/app';
// import { getDatabase } from "firebase/database";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD-ebBxtBVBwEfpZY4X_-PGbSJ-aoWHajs",
    authDomain: "survey-2ee75.firebaseapp.com",
    projectId: "survey-2ee75",
    storageBucket: "survey-2ee75.appspot.com",
    messagingSenderId: "1031907630957",
    appId: "1:1031907630957:web:47a363823ffb4297bb0464"
  };
 
    const app = initializeApp(firebaseConfig);
  


export class container extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id:uuidv4(),
         name:null,
         email:null,
         q1:null,
         q2:null,
         q3:null,
         other:null,
         issubmit:false,
         final:false,
      }
    }
    submithandler=(event)=>{
        event.preventDefault();
        console.log(this.state);
        this.setState({
          name:event.target.name.value,
          
      email:event.target.email.value,
      issubmit:true
        },()=>{
          alert("done")
          console.log(this.state)
        })
        
      }
      queshandler=(event)=>{
        event.preventDefault();
        this.setState({
            q1:event.target.q1.value,
            q2:event.target.q2.value,
            q3:event.target.q3.value,
            other:event.target.other.value,
            final:true,
        },()=>{
            const db = getDatabase();
            set(ref(db, 'survey/' + this.state.id), {
                Ques1:this.state.q1,
              Ques2:this.state.q2,
              Ques3:this.state.q3,
              Other: this.state.other,
              username: this.state.name,
              email: this.state.email,
              
            });
            console.log(this.state)
        })
        
           
        }
          
      
  render() {
    return (
        <div className='container-fluid'>
        <div className='container card  mt-2 '>
            <h1 className='text-center ' >Survey Form</h1>
        </div>
        
        {/* {this.state.name===null && this.state.email===null ? (<Detail submit={this.submithandler}/>): (<Ques submit={this.queshandler} />) }
        
        {this.state.final===false? " ": <Greet name={this.state.name} email={this.state.email}/>} */}
        {this.state.final === false ? (
  this.state.name === null && this.state.email === null ? (
    <Detail submit={this.submithandler} />
  ) : (
    <Ques submit={this.queshandler} />
  )
) : (
  <Greet name={this.state.name} email={this.state.email} />
)}

        </div>
        
      
    )
  }
}

export default container

