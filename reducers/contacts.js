const initialState ={
      contact : []
}

export default function(state=initialState,action){
  switch(action.type){

    case "ADD_CONTACT":
    return{
      ...state,
      contact:state.contact.concat(action.payload)
    }
    default:
    return state;

  }
}