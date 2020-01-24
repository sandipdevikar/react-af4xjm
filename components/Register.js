import React,{useState} from 'react'
import {connect} from 'react-redux'
import store from '../store/store'
const Register = ({auth:{name,email,password},dispatch}) =>{

  const [formdata,setFormdata]=useState({
    name:"",
    email:"",
    password:""
  })
  const {name,email,password}=formdata
  const onSubmit=(e)=>{
      e.preventDefault()
      dispatch({
        type:"ADD_USER",
        payload:{
          name,
          email,password
        }
      })
      console.log('clicked');
      store.getState();
  }
const onChange=(e)=>{
  setFormdata({...formdata,[e.target.name]:e.target.value})

}
  return(

    <div className="container">
    <div className="row">
      <div className="col-md-4 offset-md-4">
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} name="name" onChange={(e)=>onChange(e)} className="form-control"/>
          </div>
          <div className="form-group">
            <label>email</label>
            <input type="text" value={email} name="email" onChange={(e)=>onChange(e)}  className="form-control"/>
          </div>
          <div className="form-group">
            <label>password</label>
            <input type="password" value={password} name="password" onChange={(e)=>onChange(e)}  className="form-control"/>
          </div>
         <div className="form-group">
          <button class="btn btn-primary">Register</button>
         </div>
          </form>
      </div>
    </div>
    </div>
  )
}

const mapStateToProps = (state,own={
  dev:true
})=>{
  return{
    auth:state.auth,
    
  }
  console.log(dev);
}
export default connect(mapStateToProps)(Register);