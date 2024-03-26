import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination, Autoplay } from "swiper";
import img1 from "../assets/images/Skills/JS.png";
import img2 from "../assets/images/Skills/.NET.png";
import img3 from "../assets/images/Skills/Boostrap.png";
import img4 from "../assets/images/Skills/Express-Js-256.png";
import img5 from "../assets/images/Skills/MongoDB.png";
import img6 from "../assets/images/Skills/Mui.png";
import img7 from "../assets/images/Skills/NextJS.png";
import img8 from "../assets/images/Skills/Node.png";
import img9 from "../assets/images/Skills/React.png";
import img10 from "../assets/images/Skills/ReactNative.png";
import img11 from "../assets/images/Skills/SQL.png";
import img12 from "../assets/images/Skills/Tailwind.png";
import img13 from "../assets/images/Skills/git.png";
import img14 from "../assets/images/Skills/figma.png";
import img15 from "../assets/images/Skills/jira.png";

import img16 from "../assets/images/Skills/Postman.png";
import img17 from "../assets/images/Skills/TS.png";
import img18 from "../assets/images/Skills/Redux.png";

import bg from "../assets/images/banner-bg.png";

function Skills() {
  // new code below
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      // Adjust slidesPerView based on screen width
      if (window.innerWidth <= 768) {
        setSlidesPerView(3); // Adjust this value for the number of slides you want on mobile
      } else {
        setSlidesPerView(4); // Default value for larger screens
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //

  return (
    <>
      <div
        id="skills"
        style={{ backgroundImage: `url(${bg})` }}
        className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
      >
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Skills</h1>
          <p className="text-lg py-3">
            Proficient in designing responsive and user-centric interfaces for
            effective experiences.
          </p>
          <div className="box flex  justify-between  items-center bg-[#171717] my-6">
            <Swiper
              autoplay={{
                delay: 1300,
                disableOnInteraction: false,
              }}
              // allowTouchMove
              style={{ cursor: "grab" }}
              slidesPerView={slidesPerView}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img1} alt="" />
                  <h1 className="font-bold text-2xl my-2">JavaScript</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img9} alt="" />
                  <h1 className="font-bold text-2xl my-2">React</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img7} alt="" />
                  <h1 className="font-bold text-2xl my-2">Next.js</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img8} alt="" />
                  <h1 className="font-bold text-2xl my-2">Node.js</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img5} alt="" />
                  <h1 className="font-bold text-2xl my-2">MongoDB</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img18} alt="" />
                  <h1 className="font-bold text-2xl my-2">Redux</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img17} alt="" />
                  <h1 className="font-bold text-2xl my-2">TypeScript</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img11} alt="" />
                  <h1 className="font-bold text-2xl my-2">SQL</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img4} alt="" />
                  <h1 className="font-bold text-2xl my-2">Express.js</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img10} alt="" />
                  <h1 className="font-bold text-2xl my-2">React Native</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img2} alt="" />
                  <h1 className="font-bold text-2xl my-2">.NET</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img12} alt="" />
                  <h1 className="font-bold text-2xl my-2">Tailwind CSS</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img6} alt="" />
                  <h1 className="font-bold text-2xl my-2">Mui</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img3} alt="" />
                  <h1 className="font-bold text-2xl my-2">Bootstrap</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img13} alt="" />
                  <h1 className="font-bold text-2xl my-2">Git</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img14} alt="" />
                  <h1 className="font-bold text-2xl my-2">Figma</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img15} alt="" />
                  <h1 className="font-bold text-2xl my-2">Jira</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img16} alt="" />
                  <h1 className="font-bold text-2xl my-2">Postman</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
