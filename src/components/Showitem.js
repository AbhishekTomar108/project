import React, {useState, useEffect} from 'react';
import Item from'./Item';
import './style2.css';

const Showitem = () => {
  const [details, setdetails] = useState([]);
  const [list, setlist] = useState(0);
  // const [address, setaddress]= useState('');

  useEffect(()=>{
    
    showDetails();
    document.getElementById('one').style.backgroundColor="#f11240";
    
  }, [])

  const showDetails = async()=>{

    let url = "https://jsonplaceholder.typicode.com/users";
    let data = await fetch(url);
    let parsedData = await data.json();
      

    setdetails(parsedData);
  }

  const minusnumber = ()=>{
   const number = list-3;
   if(number<3)
   {
    document.getElementById('two').style.backgroundColor="#f1f7fd";
    document.getElementById('three').style.backgroundColor="#f1f7fd";
    document.getElementById('four').style.backgroundColor="#f1f7fd";
    document.getElementById('one').style.backgroundColor="#f11240";
   }

   else if(number>=3 && number<6)
   {
    document.getElementById('one').style.backgroundColor="#f1f7fd";
    document.getElementById('three').style.backgroundColor="#f1f7fd";
    document.getElementById('four').style.backgroundColor="#f1f7fd";
    document.getElementById('two').style.backgroundColor="#f11240";
   }

   else if(number>=6 && number<9)
   {
    document.getElementById('one').style.backgroundColor="#f1f7fd";
    document.getElementById('two').style.backgroundColor="#f1f7fd";
    document.getElementById('three').style.backgroundColor="#f11240";
    document.getElementById('four').style.backgroundColor="#f1f7fd";
   }
   else{
    document.getElementById('two').style.backgroundColor="#f1f7fd";
    document.getElementById('three').style.backgroundColor="#f1f7fd";
    document.getElementById('four').style.backgroundColor="#f11240";
    document.getElementById('one').style.backgroundColor="#f1f7fd";
   }
    
    setlist(list-3);
  }

  const plusnumber = ()=>{
    const number = list+3;
    if(number<3)
    {
     document.getElementById('two').style.backgroundColor="#f1f7fd";
     document.getElementById('three').style.backgroundColor="#f1f7fd";
     document.getElementById('one').style.backgroundColor="#f11240";
    }
 
    else if(number>=3 && number<6)
    {
     document.getElementById('one').style.backgroundColor="#f1f7fd";
     document.getElementById('three').style.backgroundColor="#f1f7fd";
     document.getElementById('two').style.backgroundColor="#f11240";
    }
 
    else if(number>=6 && number<9)
    {
     document.getElementById('one').style.backgroundColor="#f1f7fd";
     document.getElementById('two').style.backgroundColor="#f1f7fd";
     document.getElementById('three').style.backgroundColor="#f11240";
    }
    else{
      document.getElementById('two').style.backgroundColor="#f1f7fd";
      document.getElementById('three').style.backgroundColor="#f1f7fd";
      document.getElementById('four').style.backgroundColor="#f11240";
      document.getElementById('one').style.backgroundColor="#f1f7fd";
     }
    
    setlist(list+3);
  }
  return (
    <>
    <div className="container container-color">

    {details.slice(list,list+3).map((element, index)=>{
      
       const address = `${element.address.street} ${element.address.suite} ${element.address.city} ${element.address.zipcode}`;
       return <div className="small-container" key={element.id}>
        
         <Item 
         user={index}
         companyname={element.company.name}
        username={element.username} 
        city={element.address.city}
        catchPhrase={element.company.catchPhrase}
        address={address}
        bs={element.company.bs}
        email={element.email}
        zipcode={element.address.zipcode}
        phone={element.phone}
        />
      
   </div> })}
       <span className="numberlist">{list>=3 && <li className="downlist"> <i className="fa-solid fa-angle-left" onClick={minusnumber}></i></li>}
       <li className="downlist" id="one"> 1</li>  
  <li className="downlist" id="two">2</li>
  <li className="downlist" id="three"> 3 </li>
  <li className="downlist" id="four"> 4 </li>
   {list<9 && <li className="downlist"> <i className="fa-solid fa-angle-right" onClick={plusnumber}></i></li>}</span>
    
        </div>
    </>
  );
}

export default Showitem;
