import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import  App from './App';
import EditForm from './components/EditForm';
import Register from './components/Register';
import Login from './components/Login';

const Router = () => {
    return (
        <BrowserRouter>   

         <Route exact path="/"  component={App} />
         <Route exact path="/edit/:id"  component={EditForm} />
         <Route exact path="/register"  component={Register} />
         <Route exact path="/login"  component={Login} />
        </BrowserRouter>
        
    );
};

export default Router;
