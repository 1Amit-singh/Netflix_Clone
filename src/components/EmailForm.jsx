import React from "react";

const EmailForm = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <p className="font-NetflixSansBold text-[1.3rem] mb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Email address"
          className="w-96 rounded-md px-3 py-4 bg-black bg-opacity-50 border-gray-500 border-[1px]"
        />
        <button className="text-2xl font-NetflixSansBlack tracking-wide px-6 py-2 bg-netflixRed rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default EmailForm;
