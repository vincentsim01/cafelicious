import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header2 from '../Header2';

const baseUrl = "http://localhost:9120";

const Menu = () => {
    let params = useParams();

    const [menuz,setmenuz]=useState();

    let restaurant_Id=params.restaurant_Id;

    useEffect(() => {

        axios.get(`${baseUrl}/menu/${restaurant_Id}`)
        .then((res) => {
            setmenuz(res.data)

        })
    },[]);

console.log("This is the menuz "+menuz);





    return(
        <>
        <Header2/>
        <h1>This is menu</h1>
  
        
        
        </>

    )
}

export default Menu;
