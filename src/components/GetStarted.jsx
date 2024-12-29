import React from "react";

function GetStarted() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly px-6 py-10 bg-[#006dff] text-white">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-3xl font-bold">Find Trusted <br/>Web Partners</h1>
      </div>
      <div className="flex flex-col items-center md:items-start max-w-lg">
        <p className="text-lg mb-4 text-center md:text-left">
          Easily connect with top-rated web development agencies tailored to
          your needs. Describe your requirements, and we'll help you find the
          perfect match for your business goals.
        </p>
        <button className="bg-white text-[#006dff] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
          GET STARTED →
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
