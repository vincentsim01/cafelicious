import React, { useState,useEffect } from 'react';
import Header2 from '../Header2';

const baseUrl = "http://localhost:9120";
const QuickPromotion = () => {



    return(
        <>
        <Header2/>
        <div id="quickpromotion">

            <span className="AboutHeader">Promotion This Month</span><br></br>
            <span className="AboutSubHeader">Don't miss it</span>

        </div>
        </>
    )
}

export default QuickPromotion;