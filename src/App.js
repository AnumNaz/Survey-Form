import React, {Component} from "react";
import './App.css';
import Container from "./container.js";



class App extends Component{
  constructor(props){
    super(props);
    this.props=props;
    console.log(this.props.name);
  this.state={
    currentPage: 'main',
    isReg:false,
    name:null,
    email:null,
    password:null,
    show:false,
          persons:[
            { id:1,
              name:"anum",
              age:20
            },
            { id:2,
              name:"muqaddas",
              age:21
            },{ id:3,
              name:"rida",
              age:21
            },
    
          ], isShow:true,
        }
        this.toggleHandler=this.toggleHandler.bind(this);
  }

  toggleHandler(){
    this.setState({isShow:!this.state.isShow});
  };
  removeHandler(personIndex){
    let perCopy=this.state.persons;
    perCopy.splice(personIndex,1);
    this.setState({persons:perCopy})
  }

  submithandler=(event)=>{
    // event.preventDefault();
    this.setState({
      name:event.target.name.value,
      password:event.target.password.value,
  email:event.target.email.value,
  isReg:true
    },()=>{
      alert("done")
      console.log(this.state)
    })
    
  }
  
  passHandler=()=>{
    this.setState({show:!this.state.show});
  }

  render(){
    
    return <div className="body">
      
      
         <Container />
        
         
         
      
         
      </div>
  }

}
export default App;