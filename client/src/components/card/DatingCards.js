import React from 'react';
import {useState,useEffect} from 'react';
import DatingCard from 'react-tinder-card';
import './DatingCards.scss';
import axios from '../axios';
const Datingcards = () => {
    const [people,setPeople]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const req=await axios.get("/dating/card");
            setPeople(req.data.data.card);
            console.log(req.data.data.card);
        }
        fetchData();
    },[])
    const swiped=(direction)=>{
        console.log("You swiped "+direction)
    }
    const outOfFrame=(myIdentifier)=>{
        console.log(myIdentifier+"left the screen")
    }
    return (
        <div className="dating__card">
            <div className="dating__card__container">
               {
                   people.map((person)=>(
                       <DatingCard className="swipe" key={person.name} 
                       preventSwipe={["up","down"]} 
                       onSwipe={(dir)=>swiped(dir,person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}
                       >
                           <div className="card" style={{backgroundImage:`url(${person.imageUrl})`}}>
                               <h3>{person.name}</h3> 
                           </div>
                       </DatingCard>
                   ))
               }
            </div>
        </div>
    );
}

export default Datingcards;
