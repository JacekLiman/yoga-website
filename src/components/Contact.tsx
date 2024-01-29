const Contact = () => {
  return (
    <section className="section-sm lg:section-lg ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-contact bg-no-repeat bg-cover">
          <div className="flex flex-col justify-center gap-8 p-5">
            <h2 className="h2">Get in Touch With Us for Yoga Course.</h2>
            <p>
              Get in touch with use for any kind of help. We are here to give
              you the best and also here to help you to find your yoga course.
            </p>
          </div>
          <div>
            <form className="p-5 flex flex-col gap-5 bg-white">
              <input placeholder="First name" className="form-control" type="text" />
              <input placeholder="Last name" className="form-control" type="text" />
              <input placeholder="Email address" className="form-control" type="text" />
              <textarea placeholder="Message" className="form-control min-h-[240px] p-5"></textarea>
              <button className="btn btn-lg btn-orange mt-10">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
