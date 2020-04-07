import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUser, deleteUser } from './store/usersActions';
import UsersForm from './components/UsersForm';
import UserInfo from './components/UserInfo';
 export class App extends Component {
  




   addNewUser= newUser => { 
     this.props.addUser(newUser)
   };

   deleteUser = user_id  => {
     this.props.deleteUser(user_id);
   };

  

  render() {
    return (
      
      <div className="App">
        <UsersForm  addUser = {this.addNewUser}/> 
        <div className= "App__User-info"></div>
        {this.props.users.map((user, index)=>{
          return(
           <UserInfo 
           key={user.id}
           id={user.id} 
           name={user.name}
            email={user.email} 
            gen={user.gen}
            removeUser={this.deleteUser} 
            />
          );
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = {
addUser: addUser,
deleteUser: deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps) (App);