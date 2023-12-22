import React from 'react';
import axios from 'axios';

const baseUrl = "http://localhost:9120";

const CuisineFilter = (props) => {

    const handleFilter = (event) => {
        let foodTypeId = props.foodTypeId;
        let mealId = event.target.value;
        let mealUrl = "";




    

            if(mealId === ""){
                mealUrl = `${baseUrl}/filter/${mealId}`
            }
            else if(mealId == 0){
                mealUrl=`${baseUrl}/restaurants?foodTypeId=${foodTypeId}`
      

            }

            // else if(err){
            //     mealUrl=`${baseUrl}/restaurants?foodTypeId=${foodTypeId}`
            //     console.log("this is when error: ")

            // }
            
            
            
            
            else{
                mealUrl = `${baseUrl}/filter/${mealId}?foodtypeId=${foodTypeId}`
                // mealUrl = `${baseUrl}/filter/${mealId}`
            }

        
        

        axios.get(mealUrl)
            .then((res) => {props.restPerCuisine(res.data)})

    }

    return(
        <>
            <center><h3>mealType Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                <label className='radio'>
                    <input type="radio" name="cuisine" checked="checked" value="0"/>All
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="1"/>Breakfast
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="2"/>Lunch
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="3"/>Dinner
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="4"/>Dessert
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="5"/>Snack
                </label>
            </div>
        </>
    )
}

export default CuisineFilter;