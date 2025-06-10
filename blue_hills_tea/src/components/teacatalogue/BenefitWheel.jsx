import React, { useState, useEffect } from "react";
import { Heart, Brain, Eye, Ribbon, Coffee } from "lucide-react";
import { GiStomach } from "react-icons/gi";
import { BsLungs } from "react-icons/bs";
const healthData = [
  {
    icon: Heart,
    label: "Heart",
    description:
      "Studies have suggested that regular tea consumption may lead to a moderate reduction in the risk of heart-related issues.",
    shortInfo: "Supports cardiovascular health.",
  },
  {
    icon: Brain,
    label: "Brains",
    description:
      "Drinking tea, particularly certain types like green tea, has been associated with several potential benefits for brain health.",
    shortInfo: "Boosts cognitive function.",
  },
  {
    icon: Eye,
    label: "Eyes",
    description:
      "While there is limited direct evidence linking tea consumption to eye health, some components found in tea may offer potential benefits for maintaining good eye health.",
    shortInfo: "Rich in antioxidants for eyes.",
  },
  {
    icon: BsLungs,
    label: "Asthma",
    description:
      "While tea consumption is generally not a substitute for medical treatments for asthma, some research suggests that certain properties of tea may have potential benefits for individuals with asthma.",
    shortInfo: "May ease respiratory discomfort.",
  },
  {
    icon: GiStomach,
    label: "Stomach",
    description:
      "Drinking certain types of tea can offer various benefits for stomach health. Here are some potential advantages associated with tea consumption for the stomach.",
    shortInfo: "Aids digestion and gut health.",
  },
  {
    icon: Ribbon,
    label: "Cancer",
    description:
      "Some studies have suggested a potential reduction in the risk of certain cancers with regular tea consumption.",
    shortInfo: "Contains cancer-fighting compounds.",
  },
];

const WheelChart = () => {
  const [radius, setRadius] = useState(200);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const calculateRadius = () => {
      const newRadius = Math.min(window.innerWidth, window.innerHeight) * 0.25;
      setRadius(Math.max(newRadius, 100));
    };
    calculateRadius();
    window.addEventListener("resize", calculateRadius);
    return () => window.removeEventListener("resize", calculateRadius);
  }, []);

  return (
    <div className="relative w-full max-w-[500px] h-[500px] mx-auto">
      {/* Center Coffee Icon */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="p-6  rounded-full  hover:bg-lime-200 transition-colors duration-300">
          <Coffee className="w-20 h-20 text-yellow-800" />
        </div>
      </div>

      {/* Circular Icons */}
      {healthData.map((item, i) => {
        const angle = (360 / healthData.length) * i;
        const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
        const y = radius * Math.sin((angle - 90) * (Math.PI / 180));
        const IconComponent = item.icon;

        return (
          <div
            key={i}
            className="absolute flex text-left flex-col items-center justify-center cursor-pointer transition-transform duration-300 gap-3 group"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="p-7 bg-green-100 rounded-full shadow-md transition-transform duration-300 hover:scale-110 group-hover:bg-green-700">
              <IconComponent
                className="w-8 h-8"
                style={{
                  color: hoveredIndex === i ? "white" : "#166534",
                }}
              />
            </div>
            <p className="text-sm font-semibold text-gray-800">{item.label}</p>

            {hoveredIndex === i && (
              <div
                className="absolute bg-white border border-gray-200 rounded-md shadow-lg p-2 text-gray-700 z-50"
                style={{
                  left: "calc(100% + 10px)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  minWidth: "300px",
                }}
              >
                {item.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};


export default WheelChart;
