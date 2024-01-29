import { MdEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <section className="section-sm lg:section-lg bg-green">
      <div className="container mx-auto">
        <div className="border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12">
          <h4 className="text-[26px] text-white font-bold mb-[14px]">
            Subscribe Our Newletter
          </h4>
          <p className="text-green-200 mb-12">
            Subscribe our newsletter for further updates about us
          </p>
          <form onSubmit={(e)=> e.preventDefault()} className="max-w-[752px] mx-auto relative flex flex-col lg:flex-row gap-y-6 gap-x-4 lg:p-0">
            <div className="text-green-300 text-xl absolute top-[19px] left-[30px]">
              <MdEmail />
            </div>
            <input
              placeholder="Enter your email address"
              className="placeholder:text-green-200 form-control lg:flex-1 border pl-[60px] border-grenn-300 text-white bg-transparent outline-none"
              type="text"
            />
            <button className="btn btn-lg btn-orange w-full lg:max-w-[180px]">
              Get started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
