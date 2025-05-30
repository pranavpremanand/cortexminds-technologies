import React, { useEffect } from "react";
import bannerImg from "../../assets/images/landingpages/banner-bg.webp";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";
import { Link } from "react-scroll";

const Banner = ({ page }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div
      id="banner"
      className="min-h-screen w-full relative flex justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="wrapper pt-[10rem] pb-[5rem] flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-5">
        <div
          data-aos="fade-right"
          className="flex flex-col gap-4 items-start justify-center"
        >
          <p className="bg-[#ECECF2] p-1 text-gray-900 text-sm">
            {page === "web-development" && "Web Development"}
            {page === "app-development" && "App Development"}
          </p>
          <h1 className="text-[2.5rem] md:text-5xl font-bold leading-tight">
            {page === "web-development" &&
              "Cortexminds Technologies - Pioneering Tomorrow with Cutting-Edge AI Innovations"}
            {page === "app-development" &&
              "Cortexminds Technologies - Transforming Your Business with Innovative App Development Solutions"}
          </h1>
          <p className="text-sm text-gray-500">
            {page === "web-development" &&
              "Maximize your online impact with our premium web development services. At Cortexminds Technologies LLP, we blend creativity, innovation, and cutting-edge technology to craft bespoke web solutions that engage users, enhance interaction, and accelerate business growth. From dynamic websites to interactive platforms and powerful e-commerce solutions, we create tailored digital experiences to propel your business into the future."}
            {page === "app-development" &&
              "Leverage cutting-edge app development to connect with your audience anytime, anywhere. At Cortexminds Technologies LLP, we excel in creating custom mobile and web applications that offer flawless user experiences, enhance engagement, and fuel business growth. With intuitive designs and powerful functionalities, our tailored app solutions are crafted to drive your success in the digital era, keeping you ahead of the competition."}
          </p>
          <Link to="contact" offset={-80} smooth className="primary-btn mt-10">
            Get Started
          </Link>
        </div>
        <div data-aos="fade-left" className="lg:pl-5 lg:pt-4 lg:pb-2 w-fit">
          <img
            loading="lazy"
            id="robot"
            src={robot}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            alt="robot"
            width="600"
            height="400"
            class="h-[30vh] lg:h-[40vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
