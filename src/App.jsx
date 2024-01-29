import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Netflix from "../src/assets/netlifx.png";
import OldPortFolio from "../src/assets/port-old.png";
import NewPortFolio from "../src/assets/port-new.png";
import DashBoard from "../src/assets/dashy.png";
import Resort from "../src/assets/resort.png";
import TapTap from "../src/assets/g1.jpg";
import IntroMe from "../src/assets/work-office.gif";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import MeAc from "../src/assets/withac.jpg";
import "./App.css";
export default function App() {
  const [isSticky, setIsSticky] = useState(false);
  const projects = [
    {
      image: Netflix,
      name: "Netflix Clone ~ Live Demo",
      link: "https://pharaohnetflixclone.netlify.app",
    },
    {
      image: OldPortFolio,
      name: "Basic PortFolio ~ Live Demo",
      link: "https://rishik-site.netlify.app/",
    },
    {
      image: Resort,
      name: "Restaurant Web App ~ Live Demo",
      link: "https://crystalwaterresort.netlify.app/",
    },
    {
      image: DashBoard,
      name: "Simple DashBoard ~ Live Demo",
      link: "https://pharaohdashboard.netlify.app",
    },
    {
      image: NewPortFolio,
      name: "Medium Level Portfolio ~ Live Demo",
      link: "https://pharaohdevil.netlify.app/",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const isScrolledPast = window.scrollY > 6.5 * 16;
      setIsSticky(isScrolledPast);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1000;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1000;
  };
  return (
    <div className="text-center">
      <div
        className={
          isSticky
            ? "flex fixed z-[1] top-0 w-[100%] h-[12vh] justify-between items-center bg-[white] text-[#0077cc] shadow-container font-semibold transition-all duration-300 ease-in-out"
            : "flex fixed z-[1] top-0 w-[100%] h-[12vh] justify-between items-center text-white transition-all duration-300 ease-in-out"
        }
      >
        <div className="flex ml-[5rem] items-center justify-center">
          <h1 className={"font-semibold text-[2rem]"}>R</h1>
        </div>
        <div className="flex mr-[5rem] items-center">
          <span
            className={
              "mx-[1rem] cursor-pointer" +
              (isSticky ? " nav-span" : " nav-span-white")
            }
          >
            Home
          </span>
          <span
            className={
              "mx-[1rem] cursor-pointer" +
              (isSticky ? " nav-span" : " nav-span-white")
            }
          >
            Services
          </span>
          <span
            className={
              "mx-[1rem] cursor-pointer" +
              (isSticky ? " nav-span" : " nav-span-white")
            }
          >
            About
          </span>
          <span
            className={
              "mx-[1rem] cursor-pointer" +
              (isSticky ? " nav-span" : " nav-span-white")
            }
          >
            Contact
          </span>
        </div>
      </div>
      {/* Home section */}
      <div className="flex w[100%] h-[100vh] relative bg-[#0077cc] ">
        <div className="flex flex-col w-[100%] h-[100%] relative justify-end pb-[5rem] pl-[3rem] ">
          <h1 className="font-[400] absolute left-[4.2rem] bottom-[5rem] text-[6rem] text-white">
            Rishik
          </h1>
          <p className="text-white absolute left-[4.7rem] bottom-[5rem] ">
            <span className="mr-[1rem]">
              <span className="font-semibold">F</span>rontend
            </span>
            <span className="mr-[1rem]">
              <span className="font-semibold">D</span>evelopment
            </span>
            <span className="font-semibold">E</span>ngineer
          </p>
        </div>
        <div className="flex w-[100%] h-[100%] flex-col items-center justify-end">
          <div
            style={{
              background: `url(${IntroMe})`,
              backgroundSize: "cover",
              "background-position": "center",
            }}
            className="flex w-[50%] h-[50%] "
          ></div>
          <p className="text-white text-[1rem] mb-[5rem] mt-[3rem] ">
            "An idiot admires complexity, a genius admires simplicity"
          </p>
        </div>
      </div>
      {/* Home section */}
      {/* about seciton */}
      <div className="flex w-[100%] h-[100vh]">
        <div className="flex w-[100%] h-[100%] p-[5rem] justify-start items-start flex-col ">
          <h1 className="text-[#0077cc] text-[2rem] font-semibold ">
            About Me
          </h1>
          <ul className="flex flex-col w-[100%] h-[100%] mt-[2rem]">
            <li className="mb-[1rem]" style={{ textAlign: "left" }}>
              Hello, I'm
              <span className="text-[#0077cc] font-semibold "> Rishik</span>, a
              dedicated Frontend Development Engineer (FDE) deeply immersed in
              the world of web development. Proficient in Python and adept at
              solving LeetCode problems, my journey in programming has been
              marked by impactful projects and valuable experiences.
            </li>
            <li className="mb-[1rem]" style={{ textAlign: "left" }}>
              I've served as a Software Development Engineer at
              <span className="text-[#0077cc] font-semibold "> Kranium</span>,
              contributing innovative solutions and gaining valuable insights.
              Currently, I'm a Junior Developer at
              <span className="text-[#0077cc] font-semibold "> Svarm</span>,
              where I continue to explore new challenges and learning
              opportunities.
            </li>
            <li style={{ textAlign: "left" }}>
              Passionate about coding, I find joy in crafting seamless user
              experiences and delving into the intricacies of backend
              development. Beyond the professional realm, I enjoy tackling
              real-world problems through creative and efficient solutions.
              Excited about the endless possibilities in the ever-evolving tech
              landscape, I look forward to the continuous exploration of my
              skills and knowledge.
            </li>
            <button className="px-[1rem] py-[0.5rem] text-[#0077cc] rounded font-semibold border border-[#0077cc] hover:bg-[#0077cc] transition-all duration-300 hover:text-[white]  my-[2rem]">
              Resume
            </button>
          </ul>
        </div>
        <div className="flex w-[100%] h-[100%] flex-col justify-center items-center">
          <div
            style={{
              "clip-path": "polygon(0 71%, 0 0, 100% 0, 100% 70%, 52% 100%)",
              background: `url(${TapTap})`,
              backgroundSize: "cover",
              backgroundPositionY: "-11rem",
            }}
            className="flex w-[50%] h-[50%]"
          ></div>
        </div>
      </div>
      {/* about section */}
      {/* skills sections */}
      <div className="flex w-[100%] h-[100vh] bg-[#0077cc]">
        <div className="flex w-[100%] h-[100%] flex-col items-start justify-center">
          <h1 className="text-[white] font-[700] text-[2rem] ml-[2.5rem] mb-[1rem] ">
            My Skills
          </h1>
          <p
            style={{ textAlign: "left", padding: "1rem 2.5rem" }}
            className="text-white"
          >
            "I specialize in Front-End Development, bringing proficiency in
            React, Angular, ExpressJS, and contemporary web development
            frameworks/libraries like Django to the table. My focus is on
            creating engaging and seamless user experiences through the latest
            technologies in the ever-evolving landscape of web development."
          </p>
          <button className="py-[0.5rem] w-[90%] px-[1rem] text-[#0077cc] bg-[white] rounded font-semibold border-2 hover:border-[white] hover:bg-[#0077cc] transition-all duration-300 hover:text-white  m-[2rem]">
            Hire Me
          </button>
        </div>
        <div className="flex w-[100%] h-[100%] flex-col justify-center items-center">
          <div className="flex w-[100%] h-[50%] flex-wrap items-center justify-center ">
            <svg
              id="react"
              className="bg-[white] transition-all duration-300 w-[6rem] h-[6rem] p-[0.5rem] rounded m-[1rem] hover:bg-[#0077cc] hover:text-[white] cursor-pointer "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#0077cc"
            >
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
            </svg>
            <svg
              id="angular"
              className="bg-[white] transition-all duration-300 w-[6rem] h-[6rem] p-[0.5rem] rounded m-[1rem] hover:bg-[#0077cc] hover:text-[white] cursor-pointer "
              fill="#0077cc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" />
            </svg>
            <svg
              id="python"
              className="bg-[white] transition-all duration-300 w-[6rem] h-[6rem] p-[0.5rem] rounded m-[1rem] hover:bg-[#0077cc] hover:text-[white] cursor-pointer "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="#0077cc"
            >
              <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
            </svg>
            <svg
              id="java"
              className="bg-[white] transition-all duration-300 w-[6rem] h-[6rem] p-[0.5rem] rounded m-[1rem] hover:bg-[#0077cc] hover:text-[white] cursor-pointer "
              fill="#0077cc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M277.7 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.8 0 242.8 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.2 12.2 0 0 1 -2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.3 17.3 0 0 0 -8.2 6.3 70.5 70.5 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6 .7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.8 509.4 401 461.3 348 437.4zM124.4 396c-78.7 22 47.9 67.4 148.1 24.5a185.9 185.9 0 0 1 -28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.6 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.4 60.4 0 0 1 -21.1-12.8z" />
            </svg>
            <svg
              id="github"
              className="bg-[white] transition-all duration-300 w-[6rem] h-[6rem] p-[0.5rem] rounded m-[1rem] hover:bg-[#0077cc] hover:text-[white] cursor-pointer "
              fill="#0077cc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            <svg
              id="mysql"
              className="bg-[white] transition-all duration-300 w-[6rem] h-[6rem] p-[0.5rem] rounded m-[1rem] hover:bg-[#0077cc] hover:text-[white] cursor-pointer "
              fill="#0077cc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
            </svg>
            <svg
              id="js"
              className="bg-[white] transition-all duration-300 w-[6rem] h-[6rem] p-[0.5rem] rounded m-[1rem] hover:bg-[#0077cc] hover:text-[white]  cursor-pointer"
              fill="#0077cc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
            </svg>
            <svg
              id="scss"
              className="bg-[white] transition-all duration-300 w-[6rem] h-[6rem] p-[0.5rem] rounded m-[1rem] hover:bg-[#0077cc] hover:text-[white]  cursor-pointer"
              fill="#0077cc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M301.8 378.9c-.3 .6-.6 1.1 0 0zm249.1-87a131.2 131.2 0 0 0 -58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.3 5.9a122.8 122.8 0 0 0 -5.3 19.1c-2.3 11.7-25.8 53.5-39.1 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.9 77.3-42.1 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4 .8-.7 1.3-.9 1.7 .3-.5 .5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4 .3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.4-42.4c-18.4 0-44 20.2-56.6 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.8-38.2-101.9-65.2-99.1-116.5 1-18.7 7.5-67.8 127.1-127.4 98-48.8 176.4-35.4 189.8-5.6 19.4 42.5-41.9 121.6-143.7 133-38.8 4.3-59.2-10.7-64.3-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.8 28.9 18.7 6.1 64.2 9.5 119.2-11.8 61.8-23.8 109.9-90.1 95.8-145.6C386.5 18.3 293-.2 204.6 31.2c-52.7 18.7-109.7 48.1-150.7 86.4-48.7 45.6-56.5 85.3-53.3 101.9 11.4 58.9 92.6 97.3 125.1 125.7-1.6 .9-3.1 1.7-4.5 2.5-16.3 8.1-78.2 40.5-93.7 74.7-17.5 38.8 2.9 66.6 16.3 70.4 41.8 11.6 84.6-9.3 107.6-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.3-4.9 16.4-9.4 23.5-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.5 5 15.4 5 13.8 0 20-11.4 26.9-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.4 0 18.8-12.1 23-18.3v.1s.2-.4 .7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.6-46 16.2-31.8 31.7-71.5 31.7-71.5a201.2 201.2 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.3 .3 0 0 0 .1 .2c-3 4-6.4 8.3-9.9 12.5-12.8 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.7 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.2-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.7 450.1 270 450.1 270a201.2 201.2 0 0 0 6.2 25.8c2.4 8.1 7.1 17 11.4 25.7-18.6 15.1-30.1 32.6-34.1 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.5 79.5 0 0 0 21.6-11.1c12.5-9.2 24.6-22.1 23.8-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.1-10.2 62.1-7.2 55.7 6.5 66.6 41.3 64.5 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.2-11.8 30.3-38.7 1.6-34-31.1-71.4-89-71.1zm-429.2 144.7c-18.4 20.1-44.2 27.7-55.3 21.3C54.6 451 59.3 421.4 82 400c13.8-13 31.6-25 43.4-32.4 2.7-1.6 6.6-4 11.4-6.9 .8-.5 1.2-.7 1.2-.7 .9-.6 1.9-1.1 2.9-1.7 8.3 30.4 .3 57.2-19.1 78.3zm134.4-91.4c-6.4 15.7-19.9 55.7-28.1 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.1-11.3 21.2-14.9 23.8-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.9-13.9 0 .5 .1 1 .1 1.6-.1 17.9-17.3 30-25.1 34.8zm85.6-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.6-15.3 19-24.5a36.2 36.2 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.9 34.4z" />
            </svg>
          </div>
        </div>
      </div>
      {/* skills sections */}
      {/* services section */}
      <div className="flex h-[70vh] flex-col relative">
        <h1 className="font-semibold text-[#0077cc] absolute top-[1rem] left-[3rem] text-[2rem]">
          Projects
        </h1>
        <MdChevronLeft
          onClick={slideLeft}
          className="rounded-full opacity-50 hover:opacity-100 bg-[#0077cc] text-white transition duration-300 absolute top-[14rem] left-[2rem] cursor-pointer z-10"
          size={40}
        />
        <div
          id={"slider"}
          className="flex w-[100%] h-[100%] group items-center pt-[6rem] pb-[3rem] px-[4rem] overflow-x-scroll scroll-smooth scrollbar-hide relative"
        >
          <div className="flex h-[100%]">
            {projects.map((item, idx) => (
              <div className="relative mx-[2rem]" key={idx}>
                <div
                  style={{
                    background: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-[50rem] h-[100%]"
                >
                  <a
                    className="absolute left-0 top-0 w-full h-full flex cursor-pointer items-center justify-center transition-all duration-300 hover:bg-[#0000008f]"
                    href={`${item.link}`}
                    target="_blank"
                  >
                    <p className="text-[transparent] w-full h-full flex justify-center items-center font-bold hover:text-[white]">
                      {item.name}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="rounded-full opacity-50 hover:opacity-100 bg-[#0077cc] text-white transition duration-300 absolute top-[14rem] right-[2rem] cursor-pointer z-10"
          size={40}
        />
      </div>
      {/* services section */}
      {/* about seciton */}
      {/* contact section */}
      <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] bg-[#0077cc] relative px-[5rem] ">
        <div className="flex items-center justify-evenly w-[60%] h-[13vh] bg-[white] rounded-lg">
          <p className="font-bold">Start a Project</p>
          <span>Interested in Working Together ??</span>
          <button className="transition-all duration-300 hover:bg-[#0077cc] hover:text-white font-bold  border-2 border-[#0077cc] px-[1rem] py-[0.5rem] rounded">
            Let's get started
          </button>
        </div>
        <div className="flex justify-center mt-[2rem] items-center px-[15rem] w-[100%] h-[50%]">
          <div className="flex items-center justify-center w-[100%] h-[100%]">
            <svg
              id="linkedin"
              className="bg-[white] transition-all duration-300 w-[3rem] h-[3rem] p-[0.2rem] rounded m-[1rem] hover:bg-[#0077cc] hover:text-[white] cursor-pointer "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="#0077cc"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
            <svg
              id="github"
              className="bg-[white] transition-all duration-300 w-[3rem] h-[3rem] p-[0.1rem] rounded m-[1rem] hover:bg-[#0077cc] hover:text-[white] cursor-pointer "
              fill="#0077cc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 512"
            >
              <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
            </svg>
            <svg
              id="insta"
              className="bg-[white] transition-all duration-300 w-[3rem] h-[3rem] p-[0.1rem] rounded m-[1rem] hover:bg-[#0077cc] hover:text-[white] cursor-pointer "
              fill="#0077cc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
            <svg
              id="whats"
              className="bg-[white] transition-all duration-300 w-[3rem] h-[3rem] p-[0.1rem] rounded m-[1rem] hover:bg-[#0077cc] hover:text-[white] cursor-pointer "
              fill="#0077cc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </div>
          <div className="flex items-center justify-center w-[100%] h-[100%]">
            <form className="flex flex-col w-[100%] h-[100%] justify-center items-center">
              <input
                className="w-[80%] py-[0.5rem] px-[1rem] m-[1rem] rounded-sm "
                type="text"
                placeholder="Name"
              />
              <input
                className="w-[80%] py-[0.5rem] px-[1rem] m-[1rem] rounded-sm "
                type="text"
                name=""
                placeholder="Subject"
                id=""
              />
              <textarea
                className="w-[80%] h-[50%] py-[0.5rem] px-[1rem] m-[1rem] rounded-sm "
                type="text"
                name=""
                placeholder="Message"
                id=""
              />
              <button
                style={{ border: "1px solid white" }}
                className="rocket-btn rounded-sm flex group items-center transition-all text-[1rem] duration-300  w-[80%] justify-center px-[1rem] h-[13%] text-white py-[0.5rem] font-semibold hover:text-[#0077cc] hover:bg-[white] "
              >
                send
                <svg
                  id="rocket"
                  className="transition-all duration-300 w-[2rem] h-[2rem] p-[0.1rem] m-[1rem] cursor-pointer "
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M284 224.8a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 284 224.8zm-110.5 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 173.6 224.8zm220.9 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 394.5 224.8zm153.8-55.3c-15.5-24.2-37.3-45.6-64.7-63.6-52.9-34.8-122.4-54-195.7-54a406 406 0 0 0 -72 6.4 238.5 238.5 0 0 0 -49.5-36.6C99.7-11.7 40.9 .7 11.1 11.4A14.3 14.3 0 0 0 5.6 34.8C26.5 56.5 61.2 99.3 52.7 138.3c-33.1 33.9-51.1 74.8-51.1 117.3 0 43.4 18 84.2 51.1 118.1 8.5 39-26.2 81.8-47.1 103.5a14.3 14.3 0 0 0 5.6 23.3c29.7 10.7 88.5 23.1 155.3-10.2a238.7 238.7 0 0 0 49.5-36.6A406 406 0 0 0 288 460.1c73.3 0 142.8-19.2 195.7-54 27.4-18 49.1-39.4 64.7-63.6 17.3-26.9 26.1-55.9 26.1-86.1C574.4 225.4 565.6 196.4 548.3 169.5zM285 409.9a345.7 345.7 0 0 1 -89.4-11.5l-20.1 19.4a184.4 184.4 0 0 1 -37.1 27.6 145.8 145.8 0 0 1 -52.5 14.9c1-1.8 1.9-3.6 2.8-5.4q30.3-55.7 16.3-100.1c-33-26-52.8-59.2-52.8-95.4 0-83.1 104.3-150.5 232.8-150.5s232.9 67.4 232.9 150.5C517.9 342.5 413.6 409.9 285 409.9z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* contact section */}
    </div>
  );
}
