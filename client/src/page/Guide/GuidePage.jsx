import React from 'react';
import { Sidebar, GuideNav, GuideRental, GuideOption, GuideFacility } from "../../components";
import {
    Routes,
    Route,
} from 'react-router-dom';

const GuidePage = () => {
    return(
        <>
            <div className='pt-32 h-screen w-4/5 mx-auto'>
                <GuideNav/>
                <Routes>
                    <Route exact path="/" element={<GuideRental/>} />
                    <Route path="/option" element={<GuideOption/>} />
                    <Route path="/facility" element={<GuideFacility/>} />
                </Routes>
            </div>
            <Sidebar />
        </>
    )
}

export default GuidePage