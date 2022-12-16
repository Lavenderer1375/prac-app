import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & trics to optimize your flow?!
          </h1>
          <p>Sign up to our newsletter to stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="py-3 px-2 w-full rounded-md text-indigo-800" type="email" placeholder="Enter your Email..." />
            <button className="bg-emerald-300 text-indigo-800 w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 hover:bg-indigo-600 hover:text-white ease-in duration-200">
              Notify Me
            </button>
                  </div>
                  <p>We care about the protection of your data. Read our Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
