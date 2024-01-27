import { useState } from "react";

import ModalVideo from "react-modal-video";
import "../video.scss";

import { BsPlayCircleFill } from "react-icons/bs";

const Features = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className="container mx-auto bg-slate-50">
        <div className="py-4">
          <div className="rounded-xl flex justify-center items-center min-h-[300px] lg:min-h-[600px] bg-video bg-no-repeat bg-center bg-cover">
            <button
              onClick={() => setIsOpen(true)}
              className="text-6xl lg:text-7xl text-orange hover:text-orange-hover hover:scale-110 transition-all"
            >
              <BsPlayCircleFill />
            </button>
          </div>
          <div className="my-10 lg:my-14 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="w-9 h-[2px] lg:w-16 bg-orange mb-4"></div>
              <h2 className="h2">
                The Better Way to <br />
                Start Yoga
              </h2>
            </div>
            <div>
              <p className="mt-4 mb-9 max-w-[400px]">
                Practice anywhere, anytime. Explore a new way to exercise and
                learn more about yourself. We are provideing the best.
              </p>
              <button className="btn btn-sm btn-orange">Get started</button>
            </div>
          </div>
          <ModalVideo
            onClose={() => setIsOpen(false)}
            videoId="v7SN-d4qXx0"
            channel="youtube"
            isOpen={isOpen}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
