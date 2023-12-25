import React,{useEffect, useState} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';
import Header from '../Header';
import Header2 from '../Header2';

const baseUrl = "localhost:9120";

const ViewOrder = () => {
    const [orders,setOrder] = useState();
    let sessionData = sessionStorage.getItem('userInfo');
    let data = JSON.parse(sessionData)

    useEffect(() => {
        axios.get(`${baseUrl}/orders?email=${data.email}`).then((res) => {setOrder(res.data)})
    })

    return(
        <>
            <Header2/>
            <DisplayOrder orderData={orders}/>
        </>
    )
}

export default ViewOrder;                    