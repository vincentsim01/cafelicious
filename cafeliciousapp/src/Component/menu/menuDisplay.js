import React from 'react';
import {useSearchParams,Link} from 'react-router-dom';

const MenuDisplay=(props)=>{

    let [searchParams] = useSearchParams();

    let restId = searchParams.getAll('restId');

    
    sessionStorage.setItem('restId2',restId);      



    const renderData = ({listData}) => {
        console.log("This is ListData"+listData);
        if(listData){
            if(listData.length > 0 ){
                // console.log("This is ListData"+listData);
                return listData.map((item) => {
                    return(
                        <div class="container-fluid menucontainer">
                            <div class="col-4">

                                <img src={item.menu_image} className="menuthumb"></img>

                            </div>
                            <div class="col-8">

                                <div className="menuparts">Food Name:  {item.menu_name}</div>
                                <div className="menuparts">Description:  {item.description}</div>

                                <Link to={`/details?restId=${item.restaurant_id}`} class="btn btn-info">Back to {restaurantData(props)} Page</Link>

                            </div>


    
                        </div>
                    )
                })



            }
        }
        // else{
        //     return(

        //     <>                
        //         <h1>
        //         Ini saja dapatnya: ${item.menu_name}
        //         </h1>
        //     </>

        //     )
        // }
    }


    const restaurantData = ({restData})=>{
        if(restData){
            if(restData.length > 0 ){
                // console.log("This is ListData"+listData);
                return restData.map((item2) => {
                    return(


                                <div>

                                    {item2.restaurant_name}
                      


                                </div>
                            
                                
         
                    )
            
                })
            }
        }

    }




    return(
        <>
        <div id="contenta">

            {/* <span id="thisisthe">This is the menu from cafe: <Link to={`/details?restId=${restId}`}>{restaurantData(props)}</Link></span> */}

            &nbsp;&nbsp;&nbsp;&nbsp;<br/>
            {renderData(props)}
            
        </div>
        </>
    )


}

export default MenuDisplay;