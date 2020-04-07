import { v4 as uuid } from 'uuid';

const initialState = {
    users:[
        {
        id: "1",    
        name:"Derrick Darku",
        email:"derrickdarku@gmaul.com",
        gen:3
      },
      {
        id: "2",
       name:"Joseph Sundane",
       email:"Joe@ymail.com",
       gen:5
     },
     {  
        id: "3",
       name:"Sarah Graham",
       email:"SaraG@yahoo.com",
       gen:9
     }

    ]

}

const userReducer = (state = initialState, action) =>{
     switch (action.type) {
         case "ADD_USER":  
            const newUser= {
                id: uuid(),
                name: action.payload.name,
                email: action.payload.email,
                gen: action.payload.gen
              };

              return {...state, users:[...state.users, newUser]};
              case "DELETE_USER":
                const filteredUsers = state.users.filter(user => user.id !== action.payload);  
                return {...state, users: filteredUsers}

                
            default:
                return state;
     }
};
 
export default userReducer;