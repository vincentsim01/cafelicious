import React, { useState,useEffect } from 'react';
import Header2 from '../Header2';
import './promotion.css';

const baseUrl = "http://localhost:9120";
const QuickPromotion = () => {



    return(
        <>
        <Header2/>
        <div id="quickpromotion">

            <span className="PromotionHeader">Promotion This Month</span><br></br>
            <span className="PromotionSubHeader">Don't miss our special deal this month! buy from any store and get free flower banquet</span>

        </div>
        </>
    )
}

export default QuickPromotion;