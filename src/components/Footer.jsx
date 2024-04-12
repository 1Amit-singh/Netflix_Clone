import React from "react";
import { IoLanguage } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="md:w-[80%] min-w-[405px] mx-auto">
      <div className="text-netflexLightGray md:mb-6 mb-4">
        <p>
          Questions? Call{" "}
          <a href="" className="underline">
            123-456-789-1011
          </a>
        </p>
      </div>
      <div className="text-netflexLightGray flex flex-row justify-between">
        <div className="flex flex-col md:gap-5 gap-3">
          <a className="underline" href="">
            FAQ
          </a>
          <a className="underline" href="">
            Investor Relations
          </a>
          <a className="underline" href="">
            Privacy
          </a>
          <a href="" className="underline">
            Speed Test
          </a>
        </div>
        <div className="flex flex-col md:gap-5 gap-3">
          <a className="underline" href="">
            Help Center
          </a>
          <a className="underline" href="">
            Jobs
          </a>
          <a className="underline" href="">
            Cookie Preferences
          </a>
          <a href="" className="underline">
            Legal Notices
          </a>
        </div>
        <div className="flex flex-col md:gap-5 gap-3">
          <a className="underline" href="">
            Account
          </a>
          <a className="underline" href="">
            Ways to Watch
          </a>
          <a className="underline" href="">
            Corporate Information
          </a>
          <a href="" className="underline">
            Only on Netflix
          </a>
        </div>
        <div className="flex flex-col md:gap-5 gap-3">
          <a className="underline" href="">
            Media Center
          </a>
          <a className="underline" href="">
            Terms of Use
          </a>
          <a href="" className="underline">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex gap-1 mt-5">
        <IoLanguage className="text-2xl text-white" />
        <select
          name=""
          id=""
          className="py-1 px-4 font-semibold text-white bg-gray-950 bg-opacity-50 rounded-md border-[1px] border-gray-300"
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
