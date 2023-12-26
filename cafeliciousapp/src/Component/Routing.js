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
import PlaceOrder from './Order/PlaceOrder';
import Register from './login/registerComponent';
import Login from './login/loginComponent';
import ViewOrder from './Order/ViewOrder'
import QuickFAQ from './FAQ/faq';
import QuickPromotion from './promotion/promotion';
import Menu from './menu/menu';


const Routing = () => {
    return(
        <>
            <BrowserRouter>
            {/* <Header/> */}
     

                <Routes>

                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="listing/:foodTypeId" element={<Listing/>}/>
                        <Route path="details" element={<Details/>}/>
                        <Route path="about" element={<QuickAbout/>}/>
                        <Route path="contact" element={<QuickContact/>}/>
                        <Route path="placeOrder/:restName" element={<PlaceOrder/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="Register" element={<Register/>}/>
                        <Route path="ViewOrder" element={<ViewOrder/>}/>
                        <Route path="FAQ" element={<QuickFAQ/>}/>
                        <Route path="promotion" element={<QuickPromotion/>}/>
                        <Route path="menu/:restaurant_id" element={<Menu/>}/>


                    </Route>
                </Routes>
            <Footer/>

            </BrowserRouter>
        </>
    )
}

export default Routing;