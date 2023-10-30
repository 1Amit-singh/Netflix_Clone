import React from "react";
import netflixLogo from "../assets/NetflixLogo.svg";
import languageIcon from "../assets/LanguageIcon.svg";
import { IoLanguage } from "react-icons/io5";
import EmailForm from "../components/EmailForm";

const Login = () => {
  return (
    <>
      {/* First Section */}

      <div className="relative top-0 h-screen w-full">
        <div className="absolute overflow-hidden w-full h-full">
          <img
            alt=""
            aria-hidden="true"
            data-uia="nmhp-card-hero+background+image"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
            className=" w-full h-full object-cover -translate-y-[11%] scale-125"
          />
        </div>

        {/* black filters  */}

        <div className="w-full h-full absolute bg-black bg-opacity-40 z-[7]"></div>
        <div className="w-full h-full absolute bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)] via-transparent bg-opacity-0 z-[8]"></div>

        {/* Main Nav Starting */}

        <div className="absolute z-20 w-full flex justify-between py-6 px-40">
          {/* Left Side  */}

          <img src={netflixLogo} alt="" className="shadow-2xl w-40" />

          {/* Right Side */}

          <div className="flex gap-5 items-center">
            <IoLanguage className="text-2xl text-white" />
            <select
              name=""
              id=""
              className="py-1 px-4 font-semibold text-white bg-gray-950 bg-opacity-50 rounded-md border-[1px] border-gray-300"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
            <a
              href=""
              className="bg-netflixRed py-[0.3rem] px-3 flex justify-center text-sm text-white rounded-sm font-NetflixSansBlack tracking-wide"
            >
              Sign In
            </a>
          </div>
        </div>

        {/* Hero Text Container  */}

        <div className=" w-full h-screen absolute z-30 text-white flex flex-col items-center justify-center">
          <h1 className="text-5xl w-2/3 text-center leading-[3.8rem] font-NetflixSansBlack">
            Enjoy big movies, hit series and more from ₹ 149.
          </h1>
          <h3 className="font-NetflixSansBold text-[1.6rem] my-5">
            Join today. Cancel anytime.
          </h3>

          <EmailForm />
        </div>
      </div>

      {/* Second section */}

      <div className="text-white bg-black flex w-full justify-between items-center px-44 py-24 gap-2 border-gray-700 border-y-8">
        <div className="w-1/2">
          <h1 className="text-5xl font-NetflixSansBlack mb-8">
            Enjoy on your TV
          </h1>
          <p className="text-2xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="w-1/2 h-80 relative -translate-y-[18%]">
          <img
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            data-uia="nmhp-card-animation-asset-image"
            className="absolute z-10 scale-105"
          />
          <div data-uia="nmhp-card-animation-asset-motion" className="absolute">
            <video
              data-uia="nmhp-card-animation-asset-video"
              autoPlay
              playsInline
              muted=""
              loop=""
              className="pt-16 pl-[3.80rem]"
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
            <div className="default-ltr-cache-0"></div>
            <div
              data-uia="nmhp-card-animation-asset-custom"
              aria-hidden="true"
              className="default-ltr-cache-0 e15c37ii13"
            ></div>
          </div>
        </div>
      </div>

      {/* Third section */}

      <div className="text-white bg-black flex w-full justify-between items-center px-44 py-24 gap-14 border-gray-700 border-b-8">
        <div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            className="scale-110"
            alt=""
          />
        </div>

        <div className="">
          <h1 className="text-5xl font-NetflixSansBlack mb-8">
            Download your shows to watch offline
          </h1>
          <p className="text-2xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>

      {/* Fourth section */}

      <div className="text-white bg-black flex w-full justify-between items-center px-44 py-24 gap-14 border-gray-700 border-b-8">
        <div className="">
          <h1 className="text-5xl font-NetflixSansBlack mb-8">
          Watch everywhere
          </h1>
          <p className="text-2xl">
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </div>

        <div className="relative w-1/2 h-64">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            className="absolute scale-125"
            alt=""
          />
          <div>
          <video data-uia="nmhp-card-animation-asset-video" autoPlay="" playsinline="" muted="" loop=""><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" /></video>
          </div>
        </div>

      </div>


      {/* Fifth section */}

      <div className="text-white bg-black flex w-full justify-between items-center px-44 py-24 gap-14 border-gray-700 border-b-8">
        <div className="relative w-1/2 h-64">
          <img src="https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />
        </div>

        <div className=" w-2/3">
          <h1 className="text-5xl font-NetflixSansBlack mb-8">
          Create profiles for kids
          </h1>
          <p className="text-2xl">
          Send children on adventures with their favourite characters in a space made just for them—free with your membership.
          </p>
        </div>


      </div>
    </>
  );
};

export default Login;
