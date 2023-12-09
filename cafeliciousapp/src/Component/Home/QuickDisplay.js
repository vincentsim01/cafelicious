import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {


    //console.log(">>>",props);
    const listMeal = ({mealData}) =>{
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.foodtype_id}`} key={item.foodtype_id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt="drinks"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="compHeading">
                                    <a href="../listing/listing.html">{item.foodtype}</a>

                                </div>
                                <div className="compSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                    
                )
            })
        }
    }

    return (
            <div id="tileBox">
                {listMeal(props)}
            </div>
    )

}


export default QuickDisplay;