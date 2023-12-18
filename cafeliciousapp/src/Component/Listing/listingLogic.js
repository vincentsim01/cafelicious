import React,{useState,useEffect} from 'react';
import './listing.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import CostFilter from '../filters/costFilter';
import CuisineFilter from '../filters/cuisineFilter';


const baseUrl = "http://localhost:9120"

const Listing = () => {

    let params = useParams();
    const [restList,setRestList] = useState();

    //console.log(params.mealId);
    let foodTypeId = params.foodTypeId;
    // let mealId = params.mealId;
   

    useEffect(() => {
        sessionStorage.setItem('foodTypeId',foodTypeId)
        axios.get(`${baseUrl}/restaurants?foodTypeId=${foodTypeId}`)
        .then((res) => {
            setRestList(res.data)

        })
    },[]);



    const setDataPerFilter = (data) => {
        setRestList(data)
    }



    return(
        <>
            <div className="row">
                <div id="mainListing">
                    <div id="filter">
                    {/* <CuisineFilter restPerCuisine={(data) => {setDataPerFilter(data)}}/> */}
                        <br></br>
                        {/* <CostFilter restPerCost={(data) => {setDataPerFilter(data)}} mealId={mealId}/> */}


                    </div>
                    <ListingDisplay  listData={restList}/>
                </div>
                
            </div>
        </>
    )
}


export default Listing