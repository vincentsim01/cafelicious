import React, { useState,useEffect } from 'react';
import './QuickSearch.css';
import QuickDisplay  from './QuickDisplay';

const baseUrl = "http://localhost:9120";
const QuickSearch = () => {

    const [mealType,setMealType] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/quicksearch`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMealType(data)

        })
    },[])

    return(
        <div id="quickSearch">
            <span className="quickHeading">Cafe Quick Search</span><br></br>
            <span className="quickSubHeading">Find Your Favourite Type Of Food</span>
            <QuickDisplay mealData={mealType}/>
        </div>
    )
}

export default QuickSearch;

