import CountUp from "react-countup";

import Image from "../assets/img/john-cena.png";

import { facts } from "../data";

const Facts = () => {
  return (
    <section>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-20 gap-20">
          <div className="grid grid-cols-2 gap-10">
            {facts.map((item, idx) => {
              const { endNumber, unit, title, desc } = item;
              return (
                <div key={idx}>
                  <h2 className="h2">
                    <CountUp
                      enableScrollSpy={true}//removing start prop fixed error
                      end={endNumber}
                      duration={2}
                    />
                    {unit}+
                  </h2>
                  <h3 className="text-xl font-bold mt-3 mb-6">{title}</h3>
                  <p className="text-sm">{desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col justify-center gap-10">
            <h2 className="text-3xl lg:text-5xl leading-[45px] lg:leading-[60px] font-bold text-center lg:text-left ">
              Relaxed And Enjoy a Personalized Day Yoga With Us.{" "}
            </h2>
            <div className="text-center lg:text-left">
              <div>
                <img className="mx-auto lg:mx-0" src={Image} alt="" />
              </div>
              <small className="font-medium">
                <span className="font-extrabold">John Cena</span>/Founder
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
