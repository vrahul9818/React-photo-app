import React from "react";
import { useState,useEffect } from "react";
import Loadimages from "./front";
import { useNavigate } from 'react-router-dom';
import "./front.css"


const Header = () => {
    const navigate = useNavigate();
const[input ,setinput] = useState("");
const [query,setquery] = useState("");

console.log(input,query)
    return(
        <>
        <div className="upper-portion">
        <h1>React Photo Search </h1>
        <div > 
            <button onClick={()=>{navigate("/bookmark")}}>Bookmark</button>
            </div>
       
        <input placeholder="search for high resolution images" type="search" id="Search" onChange={(e)=>{setinput(e.target.value)}}/>
        <button  onClick={() => setquery(input)}>search</button>
        </div>
        <Loadimages query={query}/>
        </>
    )
}
export default Header