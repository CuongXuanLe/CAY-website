import React from "react";

const Home = () => {

    return (
        <div>

            {/* StartPage1 */}
            <div className=" bg-slate-500 h-[100vh]">
                <div className="bg-[url('https://images.unsplash.com/photo-1574025876844-6c9ba8602866')] h-full w-full bg-cover"></div>
                <div className="absolute bottom-7 left-7">
                    <h1 className="text-3xl font-thin"><span className="font-semibold">CREATE</span> FORM IN OUR <span className="font-semibold">DESIGN</span><br /><h2 className="text-[18px] font-normal tracking-wider">CAY STUDIO</h2></h1>
                    <p className="w-[55%]">Our agents are engaged and experienced in the Miami real
                        estate market and well informed about the communities
                        they services.</p>
                </div>
            </div>
            {/* EndPage1 */}


            <div className="bg-red-500 h-[calc(100vh-96px)]">

            </div>

        </div>
    )
}

export default Home;