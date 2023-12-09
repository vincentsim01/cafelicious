import React,{useState,useEffect} from 'react';
import './listing.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ListingDisplay from './listingDisplay';


const baseUrl = "http://localhost:9120"

const Listing = () => {

    let params = useParams();
    const [restList,setRestList] = useState();

    //console.log(params.mealId);
    let mealId = params.mealId;

    useEffect(() => {
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${baseUrl}/restaurants?foodType.foodtype_id=${mealId}`)
        .then((res) => {
            setRestList(res.data)
        })
    },[])

    return(
        <>
            <div className="row">
                <div id="mainListing">
                    <div id="filter">

                    </div>
                    <ListingDisplay  listData={restList}/>
                </div>
                
            </div>
        </>
    )
}


export default Listing