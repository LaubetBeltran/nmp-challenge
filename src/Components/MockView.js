import React, {useEffect, useState} from 'react'
import firebase from '../Firebase/firebase'
import '../Styles/RecruiterView.css'
import MockPrueba from './MockPrueba'


export default function MockView() {
  const db = firebase.firestore();
  const [list, setList] = useState([]);


  const getDatos =  () => {
        db.collection("candidates").onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setList(docs);
        console.log(docs);
      });
    };

    
    useEffect(()=>{
        getDatos();   

    }, []);

return (
         <div>

            {list.map(applicant => {
                
                return ( 

                  <MockPrueba
                    vacant = {applicant.vacant}
                    name= {applicant.name}
                    phone = {applicant.phone}
                    cv= {applicant.cv}
                    email = {applicant.email}
                    status = {applicant.status}
                   
                 
                  />
           
            
                ) 
                
                        
            })}  
        
   
            </div>
            
         
    )
}






