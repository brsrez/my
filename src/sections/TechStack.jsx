import React, { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons, techStackImgs } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".tech-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power1.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
          },
        }
      );
    },
    { scope }
  );

  return (
    <div ref={scope} id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The skills I bring to the table"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="w-full padding-x">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}

          {/* {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img
                    src={icon.imgPath}
                    alt={icon.name}
                    loading="lazy"
                    className="max-w-full h-auto"
                  />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
