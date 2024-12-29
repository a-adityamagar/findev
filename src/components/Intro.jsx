import React from "react";
import { Icon } from "@iconify/react";

const serviceLabels = [
  {
    text: "UI/UX Design",
    bgColor: "bg-[#0097b2]",
    iconColor: "#0097b2",
    position: "right-10 md:right-60 bottom-8 ",
    iconPosition: "-left-2.5",
    rotation: "-rotate-90"
  },
  {
    text: "Web Development",
    bgColor: "bg-[#ff914d]",
    iconColor: "#ff914d",
    position: "left-10 md:left-32 ",
    iconPosition: "-right-2.5",
    rotation: "rotate-0"
  },
  {
    text: "Software Development",
    bgColor: "bg-[#5e17eb]",
    iconColor: "#5e17eb",
    position: "right-10 md:right-32",
    iconPosition: "-left-2.5",
    rotation: "-rotate-90"
  },
  {
    text: "Ecommerce Site",
    bgColor: "bg-[#006434]",
    iconColor: "#006434",
    position: "left-10 md:left-60 bottom-8",
    iconPosition: "-right-2.5",
    rotation: "rotate-0"
  },
];

const ServiceLabel = ({ text, bgColor, position, iconColor, iconPosition, rotation }) => (
  <div className={`absolute ${position} hidden md:block`}>
    <div
      className={`${bgColor} text-white px-5 py-2.5 rounded-full relative shadow-md text-base font-medium
        transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg cursor-pointer
        hover:brightness-110`}
    >
      {text}
      <span className={`absolute ${iconPosition} -top-3.5 ${rotation} transition-transform duration-300 group-hover:rotate-12`}>
        <Icon
          icon="mynaui:send-solid"
          width={26}
          height={26}
          style={{ color: iconColor }}
        />
      </span>
    </div>
  </div>
);

const Intro = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-4 py-12 bg-white"
      style={{
        backgroundImage: 'radial-gradient(circle, #e5e5e5 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      <h2 className="text-3xl font-medium text-gray-500 uppercase mb-15 mt-24">
        #INTRODUCING
      </h2>

      <div className="relative w-full mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center min-h-[300px]">
          {serviceLabels.map((label, index) => (
            <ServiceLabel key={index} {...label} />
          ))}

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-11 leading-10 md:leading-10">
              The easiest way to{" "}
              <span className="text-blue-500">hire top-performing</span>{" "}
              agencies
            </h1>

            <p className="text-gray-600 mb-7 text-xl leading-6 max-w-sm mx-auto">
              From web development to design, connect and scale your business
              with trusted partners who deliver results.
            </p>
          </div>
        </div>
      </div>

      <button className="bg-[#006dff] text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300 text-lg">
        Browse Agencies
      </button>
    </section>
  );
};

export default Intro;
