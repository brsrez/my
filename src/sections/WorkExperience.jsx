import React, { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import GlowCard from "../components/GlowCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  const scope = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const mainTimeline = document.querySelector(".timeline");
      if (mainTimeline) {
        gsap.fromTo(
          mainTimeline,
          { scaleY: 0, transformOrigin: "top top" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "#experience",
              start: "top 20%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );
      }

      gsap.utils.toArray(".expText").forEach((el, i) => {
        gsap.from(el, {
          xPercent: i % 2 === 0 ? -15 : 15,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scope}
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="timeline-wrapper">
            <div className="timeline" />
            <div className="w-1 gradient-line h-full"></div>
          </div>

          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper timeline-card">
                <div className="xl:w-2/6">
                  <GlowCard review={card.review}>
                    <img
                      className="w-full h-auto rounded-xl"
                      src={card.imgPath}
                      alt={card.title}
                    />
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="flex expText xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt={card.title} />
                      </div>

                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">🗓️ {card.date}</p>

                        <p className="text-[#839cb5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ml-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((r) => (
                            <li key={r} className="text-lg">
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
