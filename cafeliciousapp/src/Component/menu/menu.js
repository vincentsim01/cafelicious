import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header2 from '../Header2';



const Menu = () => {

    const [menuz,setmenuz]=useState('');







    return(
        <>
        <Header2/>
        <h1>This is menu</h1>
        
        
        </>

    )
}

export default Menu;
