import React from 'react';
import { connect } from 'react-redux';
import { loginWithEmail, loginWithGoogle } from '../store/authActions';

function Login(props) {

       const handleSubmit = (e) => {
            e.preventDefault();
            let email = e.target.elements.email.value;
            let password = e.target.elements.password.value;
            props.loginWithEmail(email, password);
            
       }
        
       return (
        <div>
            <h1>Login</h1>
              <form onSubmit={ handleSubmit }>
                <div>
                    <label>Email</label>
                    <input name="email" type="email" placeholder="email" />
                </div>

                <div>
                    <label>Password</label>
                    <input name="password" type="password" placeholder="password" />
                </div>
                 
                 <hr />
                  
                  <button type = "submit">Login</button>


                  <hr/>
                  <button onClick={props.loginWithGoogle}>
                      <img src="https://openthread.google.cn/images/ot-contrib-google.png" 
                      width = "100" 
                      alt="google button"
                       />
                  </button>
            

            </form>
        </div>
    );
}


const mapStateToProps = () => {

}

const mapDispatchToProps = {
 loginWithEmail,
 loginWithGoogle,
};

export default connect( mapStateToProps, mapDispatchToProps )(Login);  


