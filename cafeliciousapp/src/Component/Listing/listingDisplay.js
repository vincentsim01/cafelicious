import React from 'react';
import {Link} from 'react-router-dom'

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0 ){
                return listData.map((item) => {
                    return(
                        <div className='item' key={item._id}>
                            <div className='row rowi'>
                                <div className='col-md-5'>
                                    <img src={item.restaurant_thumb} alt={item.restaurant_name}
                                    className='Image'/>
                                </div>
                                <div className='col-md-7'>
                                    <div className='hotel_name'>
                                        <Link to={`/details?restId=${item.restaurant_id}`}>
                                            {item.restaurant_name}
                                        </Link>
                                    </div>
                                    <div className='city_name'>{item.address}</div>
                                    <div className='city_name'>{item.rating_text}</div>
                                    <div className='city_name'>{item.cost}</div>
                                    <div className='labelDiv'><br></br>
                                        <span className='btn btn-danger'>
                                            {item.mealTypes[0].mealtype_name}
                                        </span> &nbsp;&nbsp;
                                        <span className='btn btn-danger'>
                                            {item.mealTypes[1].mealtype_name}
                                        </span> &nbsp;&nbsp;
                                        <span className='btn btn-danger'>
                                            {item.mealTypes[2].mealtype_name}
                                        </span> 
                                    </div>
                                    <div className='labelDiv'>
                                        <span className='btn btn-primary'>
                                            {item.foodType[0].foodtype_name}
                                        </span> &nbsp;&nbsp;
                                        <span className='btn btn-primary'>
                                            {item.foodType[1].foodtype_name}
                                        </span> &nbsp;&nbsp;
                                        <span className='btn btn-primary'>
                                            {item.foodType[2].foodtype_name}
                                        </span> 

                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }else{
                return(
                    <h2>No Data Found</h2>
                )
            }
        }else{
            return(
                <div>
                    <h2>Loading....</h2>
                    <img src="/images/loader.gif" alt="loader"/>
                </div>
            )
        }
        
    }


    return(
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay;
