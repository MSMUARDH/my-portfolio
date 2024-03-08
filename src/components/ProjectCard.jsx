import React from "react";

function ProjectCard({ item }) {
  return (
    <>
      {/* // window.open('https://yourlink.com', '_blank'); */}
      <div
        onClick={() => window.open(`${item.link}`, "_blank")}
        style={{ cursor: "pointer" }}
        className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl"
      >
        <img src={item.img} alt="" className="w-full" />
        <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
          <h1 className="font-bold text-2xl">{item.title}</h1>
          <p className="font-bold text-xl">{item.description}</p>
          <p>-Technology- </p>
          <p className="font-bold ">{item.tech}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
