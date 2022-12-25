import React from "react";
import Tippy from '@tippyjs/react';

const PopupInfo = () => {
    return(
        <Tippy content={<div className="bg-slate-200 p-2 rounded-xl shadow-xl"><h2>Khach hang vjp</h2>
            <p>12/2/22, 9:30 AM - 12/2/22, 11:30 AM</p></div>}>
            <button>My button</button>
        </Tippy>
    );
};

export default PopupInfo;