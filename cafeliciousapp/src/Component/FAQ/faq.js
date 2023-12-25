import React, { useState,useEffect } from 'react';
import Header2 from '../Header2';

const baseUrl = "http://localhost:9120";
const QuickFAQ = () => {



    return(
        <>
        <Header2/>
        <div id="quickfaq">

            <span className="AboutHeader">Cafelicious FAQ</span><br></br>
            <span className="AboutSubHeader">Ask Questions</span>

        </div>
        </>
    )
}

export default QuickFAQ;