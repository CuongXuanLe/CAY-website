import React from "react";
import dataBlog from "./dataBlog";

const Blog = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute top-0 -z-10 h-full w-full bg-blur"></div>
      <div className="h-full w-full px-3 py-5 text-slate-100">
        {dataBlog.map((title, index) => (
          <div className="">
            <h3 key={index} className="my-1.5 cursor-pointer">
              {title.title}
            </h3>
            <div className="h-px bg-slate-100"></div>
          </div>
        ))}
        <div className="absolute right-[20px] mt-2 w-16 cursor-pointer tracking-widest duration-500 hover:translate-x-2 hover:scale-110">
          +MORE
        </div>
      </div>
    </div>
  );
};

export default Blog;
