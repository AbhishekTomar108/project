import React from 'react';
import  "./style2.css";
// import PropTypes from 'prop-types';
import  './index.js';
const item = (props) => {

 const showdetails =()=>{
  console.log(props.user)
  const index = props.user;
  const btn = document.getElementsByClassName("btn")[index];
console.log(btn);

       const btntext = btn.innerHTML;
      console.log(btntext);
      if (btntext === "View Details") {
         const little_container =
           document.getElementsByClassName("little-container")[index];
         little_container.style.visibility = "visible";
       
         document.getElementsByClassName("small-container")[index].style.height = "581px";
         document.getElementsByClassName("btn")[index].innerHTML = "Hide Details";
       }
       else if (btntext === "Hide Details") {
         const little_container =
         document.getElementsByClassName("little-container")[index];
       little_container.style.visibility = "hidden";
     
       document.getElementsByClassName("small-container")[index].style.height = "125px";
       document.getElementsByClassName("btn")[index].innerHTML = "View Details";
         
         
       }

      



       

 }
  

  return (
    <>
    
       
          <li className="newlist first-element">{props.companyname}</li>
         <li className="newlist"> <strong>CONTACT</strong>
          <p className="text">{props.username}</p></li>        
          <li className="newlist"><strong>CITY</strong>
          <p className="text">{props.city}</p></li>
          
          <li className="newlist"><button className="btn" onClick={showdetails}>View Details</button></li>
            
          
          <div className="little-container">
            <strong>Description</strong>
            <p>{props.catchPhrase}.</p>

            <div className="detail-container">
              <strong>Contact Person</strong>
              <strong>Address</strong>

              <p>{props.username}</p>
              <p>{props.address}</p>

              <strong>Designation</strong>
              <strong>City</strong>

              <p>{props.bs}</p>
              <p>{props.city}</p>

              <strong>Email</strong>
              <strong>Zipcode</strong>

              <p>{props.email}</p>
              <p>{props.zipcode}</p>

              <strong>Phones</strong>
              <strong>Country</strong>

              <p>{props.phone}</p>
              <p>India</p>
            </div>
          </div>
        
         
       </>
          
           
   
  );
}

export default item;
