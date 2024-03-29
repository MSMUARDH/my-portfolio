import React, { useState } from "react";
import { LuDownload } from "react-icons/lu";
import img1 from "../assets/images/HryFine.jpg";
import img2 from "../assets/images/E-Ticketing.jpg";

import img3 from "../assets/images/CML.jpg";
import img4 from "../assets/images/Rythose.jpg";
import img5 from "../assets/images/HealthCare.jpg";

import img6 from "../assets/images/Chity.jpg";

import img7 from "../assets/images/Note Manager.jpg";

import img8 from "../assets/images/Employee.jpg";

// import img9 from "../assets/images/E-Ticketing.jpg";

// import img2 from "../assets/images/HryFine.jpg";
// import img6 from "../assets/images/test2.PNG";

// import img3 from "../assets/images/Health Care.jpg";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Doctor Appointment Booking App",
      description: "(Web Application)",
      img: img1,
      tech: "React,Node.js,Express.js,MongoDB,Bootstrap",
      link: "https://github.com/MSMUARDH/HryFine.git",
    },
    {
      id: 2,
      title: "Railway Seat Reservation System",
      description: "(Web Application)",
      img: img2,
      tech: "React,Node.js,Express.js,MongoDB,JWT,Ant Design",
      link: "https://github.com/MSMUARDH/Train-Seat-reservation-system.git",
    },
    {
      id: 3,
      title: "Clean My Land",
      description: "(Mobile Application)",
      img: img3,
      tech: "React Native,Node.js,Express.js,MongoDB,JWT,Android Studio",
      link: "https://github.com/MSMUARDH/CML.git",
    },
    {
      id: 4,
      title: "Rythose Flight Manufacturing",
      description: "(Web Application)",
      img: img4,
      tech: "ASP.NET Core,JavaScript,jQuery,Ajax,SQL,MVC",
      link: "https://github.com/MSMUARDH/Rythose-Aerospace.git",
    },
    {
      id: 5,
      title: "Hospital Management System",
      description: "(Desktop Application)",
      img: img5,
      tech: "Windows Forms,SQL Server Management Studio,Visual Studio,ADO.NET",
      link: "https://github.com/MSMUARDH/HealthCare-Plus.git",
    },
    {
      id: 11,
      title: "Chatbot for an institute website",
      description: "Web Application",
      img: img6,
      tech: "HTML,CSS,JavaScript,Node.js,MongoDB",
      link: "https://github.com/MSMUARDH/ChatBot.git",
    },
    {
      id: 6,
      title: "Note Manager",
      description: "Web Application",
      img: img7,
      tech: "React,Node.js,Express.js,MongoDB,JWT,Flowbite",
      link: "https://github.com/MSMUARDH/Note-Manager.git",
    },
    {
      id: 7,
      title: "Employee Management",
      description: "Design & Development",
      img: img8,
      tech: "React,Node.js,Express.js,MongoDB,JWT,MUI",
      link: "https://github.com/MSMUARDH/Employee-Management.git",
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          {/* this is project summary line change below line  */}
          Here, you'll find a collection of my diverse and innovative projects.
          Each project showcases my skills and expertise in development. By
          clicking on the project below, you'll have access to the source code
          on GitHub, enabling you to delve deeper into the project's
          implementation details.
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
          {/* <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            Text-1
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Text-2
          </button> */}
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>

        <div className="btn py-3 flex justify-center ">
          <a
            href="https://drive.google.com/file/d/1uNFFg8wN_Wx8mfYca_Pl331lwCOj2XRI/view?usp=drive_link"
            target="_blank"
          >
            <button className="flex justify-center content-center text-2xl border-2   border-[#b0aaaa] font-bold text-white bg-[linear-gradient(180deg,#38097a,#b004b0)]  hover:bg-[linear-gradient(180deg,#38097a,#38097a)] py-4 px-5  rounded-2xl ">
              <div className="py-1 pr-3">
                <LuDownload />
              </div>
              Resume
            </button>
          </a>
        </div>

        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            atque porro quasi dolorum facere tempore maxime nemo quia nulla
            blanditiis doloribus, dolore, voluptas aspernatur harum facilis
            cumque magni soluta sapiente.
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi.
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
