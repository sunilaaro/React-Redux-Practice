import React from 'react';
import Contact from './Contact';
import ContactList from './ContactList';
import Avatar from './images/Avatar';

const createCard = (CtList)=>{
    return(
        <Contact 
                   key={CtList.id}
                   name={CtList.name}
                   img={CtList.imgUrl}
                   phone={CtList.phone}
                   email={CtList.email}
                 />
    )
}
const Card = () =>{
    
    //console.log(ContactList[0].name);
    const avatar={
          float:'0',
          margin:'auto',
        }
    
    return(
        <div>
             <h1>Contact List using Props</h1>
             <div style={avatar}><Avatar img="https://i.udemycdn.com/user/200_H/31334738_a13c_2.jpg" alt="profile" /></div>
             {/* <Contact name={ContactList[0].name} img={ContactList[0].imgUrl} phone={ContactList[0].phone} email={ContactList[0].email}/> */}
             {ContactList.map(createCard)}
        </div>
    )
}
export default Card;

