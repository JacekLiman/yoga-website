import Img1 from "../assets/img/cards/card-1.png";
import Img2 from "../assets/img/cards/card-2.png";
import Img3 from "../assets/img/cards/card-3.png";

const Cards = () => {
  return (
    <section className="bg-cardsBg -mt-10">
      <div className="container mx-auto relative">
        <div className="min-h-[820px] lg:min-h-[260px] ">
          <div className="absolute -top-20 left-0 w-full grid grid-cols-1  lg:grid-cols-4 gap-5 p-3 lg:p-0">
            <div className="p-5  bg-slate-50 space-y-4 rounded-xl">
              <div className="flex justify-between items-cente">
                <h3 className="w-3/4 text-xl font-bold">
                  Make Your Own Plan For Yoga.
                </h3>

                <div className="text-3xl p-3 font-bold">1</div>
              </div>
              <div>
                <img className="w-full max-w-[300px] mx-auto" src={Img1} alt="" />
              </div>
            </div>
            <div className="p-5  bg-slate-50 space-y-4 rounded-xl">
              <div className="flex justify-between items-cente">
                <h3 className="w-3/4 text-xl font-bold">
                  Find a Yoga Mentor For You.
                </h3>

                <div className="text-3xl p-3 font-bold">2</div>
              </div>
              <div>
                <img className="w-full max-w-[300px] mx-auto" src={Img2} alt="" />
              </div>
            </div>
            <div className="lg:col-span-2 p-5 flex gap-5 lg:gap-12 bg-slate-50 justify-between rounded-xl">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="w-3/4 text-xl font-bold">
                    Find a Yoga Mentor For You.
                  </h3>

                  <div className="text-3xl p-3 font-bold">3</div>
                </div>
                <p className="mt-3 mb-6">
                  We are boosting online yoga by enabling anyone in the world to
                  learn from the best.
                </p>

                <a className="font-semibold cursor-pointer">Read More</a>
              </div>

              <img className="" src={Img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
