const initialState = {
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

    ]

}

const userReducer = (state = initialState, action) =>{
     switch (action.type) {
         case "ADD_USER":
            const newUser= {
                name:this.state.name,
                email:this.state.email,
                gen:this.state.gen
              };
              return {...state, users:[...state.users, newUser]}
            default:
                return state;
     }
};

export default userReducer;