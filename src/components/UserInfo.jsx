import React from 'react'

const UserInfo = ({name, email, gen, id, removeUser}) => {
    const handleClick = () => {
        removeUser(id)
    }
    return (
        <div>
             <h3>Name:{name}</h3>
              <p>Email:{email}</p>
              <h3>Gen{gen}</h3>
              <button onClick={handleClick}>Remove User</button>
              <hr />
        </div>
    );
};

export default UserInfo;   
