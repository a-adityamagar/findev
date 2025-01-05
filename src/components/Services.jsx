import React from "react";
import { Icon } from "@iconify/react";

function Services() {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Create and share content when using social media for advertising.",
      icon: "ic:baseline-social-distance",
      bgColor: "bg-blue-100",
      iconColor: "#2563eb"
    },
    {
      title: "Website Development",
      description: "Design and implementation of the site are included in web design and development.",
      icon: "material-symbols:developer-mode",
      bgColor: "bg-orange-100",
      iconColor: "#ea580c"
    },
    {
      title: "Graphics Designing",
      description: "The creative process of graphic design blends technology and art to convey ideas.",
      icon: "mdi:palette",
      bgColor: "bg-purple-100",
      iconColor: "#7c3aed"
    },
    {
      title: "SEO Optimization",
      description: "SEO is a set of techniques and strategies used to increase organic visibility.",
      icon: "ri:search-2-fill",
      bgColor: "bg-yellow-100",
      iconColor: "#ff914d"
    },
    {
      title: "Mobile App Development",
      description: "Mobile app development involves designing, coding, testing, and deploying apps.",
      icon: "material-symbols:mobile-friendly",
      bgColor: "bg-red-100",
      iconColor: "#dc2626"
    },
    {
      title: "Branding & Content Marketing",
      description: "Branding involves developing an overall image and message of your brand.",
      icon: "mdi:content-paste",
      bgColor: "bg-blue-100",
      iconColor: "#2563eb"
    },
  ];

  return (
    <div className="px-4 md:px-16 lg:px-24 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Software & Digital Marketing Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start p-4 bg-white shadow-lg rounded-lg"
          >
            <div
              className={`p-3 rounded-lg ${service.bgColor} text-2xl flex items-center justify-center mr-4`}
            >
              <Icon icon={service.icon} color={service.iconColor} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
