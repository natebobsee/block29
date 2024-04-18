import {useState, useEffect} from 'react'

import PlayerCard from './PlayerCard.jsx'
import { fetchAllPlayers } from './API/index.js';

export default function AllPlayers() {
const [players, setPlayers] = useState();
console.log(fetchAllPlayers);
useEffect(()=>{
 async function resultsPlayers(){
 try {
    const result=await fetchAllPlayers();
    console.log(result)
    setPlayers(result);
   
 } catch (error) {
    console.log(error)
 }
   
 }
 resultsPlayers();
 
}, [])
   console.log(players)
return(
    <>
   { players.map((players)=>{
        return <PlayerCard key={players.id} players={players}/>
    })}
    </>
)
}
