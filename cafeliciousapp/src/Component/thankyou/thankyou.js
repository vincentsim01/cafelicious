import React, { useState,useEffect } from 'react';
import Header2 from '../Header2';

const baseUrl = "http://localhost:9120";
const QuickThankYou = () => {



    return(
        <>
        <Header2/>
        <div id="quickSearch">

            <span className="AboutHeader">Thank You</span><br></br>
            <span className="AboutSubHeader">Thank You for your input</span>

        </div>
        </>
    )
}

export default QuickThankYou;