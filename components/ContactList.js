import React,{useState} from 'react';
import {connect} from 'react-redux'
import {addContact} from  '../actions/contacts'
const ContactList = ({addContact,contact}) =>{

  const [name , setName] = useState('');
  const [mobileNo , setMobileNo] = useState('');
  const onSubmit = (e) => {
      e.preventDefault();

      addContact(name,mobileNo);
  }

  
  return(
    <div>
          <form onSubmit={(e)=>onSubmit(e)}>
              <input type='text'  value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
               <input type='number' value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} placeholder="Enter Number"/>
              <input type="submit" value="Add Contact"/>
          </form>
    <table className="table table-bordered">
     <tr><td>Name</td><td>Mobile No</td><td>Action</td></tr>

  {
    contact&&contact.length>0&&contact.map((data)=>(
       
      <tr key={data.index}><td>{data.name}</td><td>{data.mobileNo}</td><td><button  className="btn btn-primary">Update</button> <button  className="btn btn-danger">Delete</button></td></tr>
         
      
      
    ))
  }
  </table>
    </div>)
}

const mapStateToProps = state => {
  return{
    contact:state.contact.contact
  }
}

export default connect(mapStateToProps,{addContact})(ContactList)