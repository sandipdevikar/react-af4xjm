
export const addContact = (name,mobileNo) => async dispatch => {
  
  console.log(name);
    
    dispatch({
      type:"ADD_CONTACT",
      payload:{
        name,
        mobileNo
      }
    })
  

}