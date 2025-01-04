import React, { useState, useRef, useEffect } from "react";

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const slideRef = useRef(null);

  const data = [
    {
      title: "SEARCH",
      description:
        "Use reliable search and filtering options to efficiently find agencies that match your needs, considering services, experience, pricing, and other relevant criteria.",
      image: "path/to/search-image.png",
    },
    {
      title: "SHORTLIST",
      description:
        "Refine your options by evaluating portfolios, client reviews, and expertise to compile a focused list of agencies that best match your project needs.",
      image: "path/to/shortlist-image.png",
    },
    {
      title: "SELECT",
      description:
        "Make your final choice by assessing proposals, communication, and overall fit to ensure the agency aligns perfectly with your project goals and expectations.",
      image: "path/to/select-image.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === data.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < data.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">HOW DOES IT WORK?</h2>
      
      {/* Desktop view */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-sm mb-6">{item.description}</p>
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Mobile view with single card */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div
            ref={slideRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col items-center bg-blue-500 text-white p-4 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-xs mb-4 text-center">{item.description}</p>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Line indicator */}
        <div className="flex justify-center mt-4">
          <div className="w-48 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
              style={{
                width: `${((currentSlide + 1) / data.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
