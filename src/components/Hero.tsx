import Person from "../assets/img/hero/guy.png";

const Hero = () => {
  return (
    <section className="lg:bg-circle bg-no-repeat bg-right-top h-[2000px]" >
      <div className="container mx-auto  ">
        <div className="pt-40 lg:pt-0 grid grid-cols-1 lg:grid-cols-2 min-h-[750px] gap-10 lg:gap-0">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="h1">
              Yoga to <br />
              Release Stress
            </h1>
            <p className="max-w-[500px]">
              Yoga is a way of life, rather than a chore. Counteract the
              stresses of modern life by becoming more mindful and
              compassionate.
            </p>
            <div className="mt-7 space-x-4">
              <button className="btn btn-sm lg:btn-lg btn-orange">Get started</button>
              <button className="btn btn-sm lg:btn-lg bg-transparent border hover:bg-slate-50">Learn more</button>
            </div>
          </div>
          <div className="flex justify-center items-end">
            <img className="lg:w-[400px] w-[370px]" src={Person} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
