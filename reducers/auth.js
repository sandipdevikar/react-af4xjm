const initialState ={
  name:"sandip ramdas Devikar",
  email:"sandipdevikar007@gmail.com",
  password:"asdfssf",
  user:null

}

export default function(state=initialState,action){
  switch(action.type){

    case "ADD_USER":
    return{
      ...state,
  user:action.payload
    }
    default:
    return state;

  }
}