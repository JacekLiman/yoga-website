import { courses } from "../data";

import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Courses = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-10 ">
          <h2 className="h3 font-bold text-center">Popular Courses</h2>
          <p className="max-w-[550px] mx-auto text-center mt-6 mb-12">
            Practice anywhere, anytime. Explore a new way to exercise and learn
            more about yourself. We are provideing the best.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {courses.map((item, idx) => {
              const { image, title, desc, link, delay } = item;
              return (
                <div key={idx}>
                  <div className=" max-w-[400px] mx-auto">
                    <img className="w-full" src={image} alt="" />
                    <h4 className="text-[18px] font-medium mt-3">{title}</h4>
                    <p className="text-[15px] mt-4 mb-10">{desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-orange flex items-center">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf/>
                      </div>
                      <a href='#'>{link}</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="btn btn-sm btn-orange mx-auto block mt-10 lg:mt-14">Browse all</button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
