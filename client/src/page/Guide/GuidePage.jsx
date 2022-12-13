import React from 'react';
import { Sidebar, GuideNav } from "../../components";


const GuidePage = () => {
    return(
        <>
            <div className='pt-32 h-screen w-4/5 mx-auto'>
                <GuideNav/>
            </div>
            <Sidebar />
        </>
    )
}

export default GuidePage