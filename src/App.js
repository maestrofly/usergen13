import './App.css';
import React, { Component } from 'react'
import UsersForm from './components/UsersForm';
import UserInfo from './components/UserInfo';
 class App extends Component {
   constructor(props){
     super(props);
     this.state={
       users:[{
         name:"Derrick Darku",
         email:"derrickdarku@gmaul.com",
         gen:3
       },
       {
        name:"Joseph Sundane",
        email:"Joe@ymail.com",
        gen:5
      },
      {
        name:"Sarah Graham",
        email:"SaraG@yahoo.com",
        gen:9
      }

       ],
       name:"",
       email:"",
       gen:""
     };

   }




   addNewUser=(newUser) => { 
     this.setState({
       users:[...this.state.users,newUser]
     });
   };

  

  render() {
    return (
      
      <div className="App">
        <UsersForm  addUser = {this.addNewUser}/> 
        {this.state.users.map((user, index)=>{
          return(
           <UserInfo 
           key={index} 
           name={user.name}
            email={user.email} 
            gen={user.gen} 
            />
          );
        })}
      </div>
    )
  }
}
export default App;