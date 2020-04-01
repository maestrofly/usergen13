import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import UsersForm from './components/UsersForm';
import UserInfo from './components/UserInfo';
 export class App extends Component {
  




   addNewUser=(newUser) => { 
     this.setState({
       users:[...this.state.users,newUser]
     });
   };

  

  render() {
    return (
      
      <div className="App">
        <UsersForm  addUser = {this.addNewUser}/> 
        <div className= "App__User-info"></div>
        {this.props.users.map((user, index)=>{
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

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps) (App);