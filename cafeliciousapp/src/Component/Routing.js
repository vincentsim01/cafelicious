import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './Main';
import Home from './Home/Home';
import Header from './Header';
import Footer from './Footer';
import Listing from './Listing/listingLogic';
import Details from './Details/detailsLogic';
import QuickAbout from './About/About';
import QuickContact from './Contact/contact';


const Routing = () => {
    return(
        <>
            <BrowserRouter>
            <Header/>

                <Routes>

                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="listing/:foodTypeId" element={<Listing/>}/>
                        <Route path="details" element={<Details/>}/>
                        <Route path="about" element={<QuickAbout/>}/>
                        <Route path="contact" element={<QuickContact/>}/>
                    </Route>
                </Routes>
            <Footer/>

            </BrowserRouter>
        </>
    )
}

export default Routing;