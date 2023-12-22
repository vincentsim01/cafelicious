import React, { useState,useEffect } from 'react';
import Header2 from '../Header2';

const baseUrl = "http://localhost:9120";
const QuickAbout = () => {



    return(
        <>
        <Header2/>
        <div id="quickSearch">

            <span className="AboutHeader">About Cafelicious</span><br></br>
            <span className="AboutSubHeader">Find Your Favourite cafe globally</span>

        </div>
        </>
    )
}

export default QuickAbout;