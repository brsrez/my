import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me"
          sub="🌟 Client Feedback Highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 gap-6 space-y-6">
          {testimonials.map(({ imgPath, name, mentions, review }) => (
            <div key={name} className="break-inside-avoid">
              <GlowCard review={review} className="w-full mb-5 break-inside-avoid-column">
                <div className="flex items-center gap-3">
                  <div className="size-16 overflow-hidden rounded-full">
                    <img src={imgPath} alt={name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-white-50">{mentions}</p>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
