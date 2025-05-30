import React from "react";
import line from "../../assets/images/line.png";
import developmentImg from "../../assets/images/landingpages/development-1.webp";

const Development = ({ page }) => {
  return (
    <div className="w-screen pt-[2rem] min-h-[70vh] flex justify-center relative">
      <div className="blurred-blue right-[-10%] bottom-[-10%]"></div>
      <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
        <div data-aos="fade-right" className="flex items-center gap-3">
          <img src={line} alt="line" className="w-[3rem]" />
          <h6 className="font-medium text-secondary">
            {page === "web-development" && "Web Development"}
            {page === "app-development" && "App Development"}
          </h6>
        </div>
        <div className="grid md:grid-cols-[50%_40%] items-center gap-10 mt-4">
          <img
            loading="lazy"
            data-aos="fade-right"
            src={developmentImg}
            alt="development"
            className="md:h-[50vh] w-full object-cover rounded"
          />
          <div data-aos="fade-left" className="flex flex-col gap-4">
            <h2 className="text-[2rem] md:text-4xl leading-tight font-semibold">
              Cortexminds Technologies – Delivering Exceptional User
              Experiences
            </h2>
            <p className="">
              {page === "web-development" &&
                "Our web development services transform your ideas into reality with custom websites designed to captivate and convert. From intuitive design to flawless functionality, we craft digital experiences that engage users and deliver tangible results, ensuring your business stands out in the competitive online landscape."}
              {page === "app-development" &&
                "Design and develop innovative mobile apps tailored to your business needs, offering captivating user experiences and delivering measurable results. Our apps are built with precision to ensure seamless functionality, high quality, and exceptional performance across all platforms."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
