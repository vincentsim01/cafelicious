import React from 'react';

const MenuDisplay=(props)=>{


    const renderData = ({listData}) => {
        console.log("This is ListData"+listData);
        if(listData){
            if(listData.length > 0 ){
                // console.log("This is ListData"+listData);
                return listData.map((item) => {
                    return(
                        <div>

                        <h1>Food Name:  {item.menu_name}</h1>
    
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




    return(
        <>
        <div id="content">
            {renderData(props)}
            
        </div>
        </>
    )


}

export default MenuDisplay;