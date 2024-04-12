import React, { useState } from "react";
import netflixLogo from "../assets/NetflixLogo.svg";
import languageIcon from "../assets/LanguageIcon.svg";
import { IoLanguage } from "react-icons/io5";
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer";

const Login = () => {
  const [display, setDisplay] = useState({});

  const handleToggle = (id) => {
    console.log("clicked");
    setDisplay((prevDisplay) => ({
      // ...prevDisplay,
      [id]: !prevDisplay[id],
    }));
  };

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

        <div className="absolute z-20 w-full flex justify-between py-6 md:px-[13%] px-[3%]">
          {/* Left Side  */}

          <img src={netflixLogo} alt="" className="shadow-2xl cd:w-40 w-24" />

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

        <div className=" w-full h-screen absolute z-30 text-white flex flex-col items-center justify-center px-[5%]">
          <h1 className="md:text-5xl text-4xl md:w-2/3 w-full text-center md:leading-[3.8rem] font-NetflixSansBlack">
            Enjoy big movies, hit series and more from ₹ 149.
          </h1>
          <h3 className="font-NetflixSansBold text-[1.6rem] mt-5 ">
            Join today. Cancel anytime.
          </h3>

          <EmailForm />
        </div>
      </div>

      {/* Second section */}

      <div className="text-white bg-black flex flex-col md:flex-row w-full justify-between items-center px-[13%] py-24 gap-4 border-gray-700 border-y-8">
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-5xl text-4xl md:text-left text-center font-NetflixSansBlack mb-8">
            Enjoy on your TV
          </h1>
          <p className="md:text-2xl text-lg md:text-left text-center">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="md:w-96 w-[350px] h-80 relative overflow-hidden">
          <img
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            data-uia="nmhp-card-animation-asset-image"
            className="absolute bottom-0 z-10 scale-105"
          />
          <div
            data-uia="nmhp-card-animation-asset-motion"
            className="absolute bottom-3 left-8 min-w-full"
          >
            <video
              data-uia="nmhp-card-animation-asset-video"
              autoPlay
              playsInline
              muted=""
              loop=""
              className="h-full w-full"
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

      <div className="text-white bg-black flex flex-col-reverse md:flex-row w-full justify-between items-center px-[13%] md:py-24 py-8 gap-4 border-gray-700 border-b-8">
        <div className="w-[27rem] bg-white">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            className="scale-110"
            alt=""
          />
        </div>

        <div className="min-w-1/2 basis-1/2">
          <h1 className="md:text-5xl text-4xl md:text-left text-center font-NetflixSansBlack mb-8">
            Download your shows to watch offline
          </h1>
          <p className="md:text-2xl text-lg md:text-left text-center">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>

      {/* Fourth section */}

      <div className="text-white bg-black flex flex-col md:flex-row justify-between items-center px-[13%] md:py-44 py-20 gap-14 border-gray-700 border-b-8">
        <div className="">
          <h1 className="md:text-5xl text-4xl md:text-left text-center font-NetflixSansBlack mb-8">
            Watch everywhere
          </h1>
          <p className="md:text-2xl text-lg md:text-left text-center">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className="relative w-[300px] md:w-[500px] ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            className="absolute scale-125"
            alt=""
          />
          <div>
            <video
              data-uia="nmhp-card-animation-asset-video"
              autoPlay=""
              playsinline=""
              muted=""
              loop=""
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      {/* Fifth section */}

      <div className="text-white bg-black flex flex-col-reverse md:flex-row justify-between items-center px-[13%] py-24 gap-14 border-gray-700 border-b-8">
        <div className="md:w-1/2 w-full h-80 ">
          <img
            src="https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            className="object-cover h-96"
            alt=""
          />
        </div>

        <div className=" md:w-1/2 w-full">
          <h1 className="md:text-5xl text-4xl md:text-left text-center font-NetflixSansBlack mb-8">
            Create profiles for kids
          </h1>
          <p className="md:text-2xl text-lg md:text-left text-center">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
      {/* Frequently Asked Section  */}

      <div className="md:px-[13%] px-[5%]">
        <h1 className="text-center text-white md:text-6xl text-3xl md:py-16 py-8  md:font-NetflixSansBlack font-bold">
          Frequently Asked Questions
        </h1>
        <ul className="flex flex-col gap-2 mx-auto w-full min-w-[240px] text-white font-NetflixSansBold md:text-2xl text-xl md:mb-10 mb-5">
          <li className="">
            <button
              className="flex flex-row justify-between w-full bg-netflixGray md:py-8 md:px-6 py-4 px-4 hover:bg-zinc-600"
              onClick={() => handleToggle("1")}
            >
              <h1 className>What is Netflix?</h1>
              <div>+</div>
            </button>
            <div
              className={`${
                display["1"] ? "block" : "hidden"
              } bg-netflixGray mt-1 md:py-8 md:px-6 p-4`}
            >
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.
              <br />
              <br /> You can watch as much as you want, whenever you want,
              without a single ad – all for one low monthly price. There's
              always something new to discover, and new TV shows and movies are
              added every week!
            </div>
          </li>
          <li className="">
            <button
              className="flex flex-row justify-between w-full bg-netflixGray md:py-8 md:px-6 py-4 px-4 hover:bg-zinc-600"
              onClick={() => handleToggle("2")}
            >
              <h1 className>How much does Netflix cost?</h1>
              <div>+</div>
            </button>
            <div
              className={`${
                display["2"] ? "block" : "hidden"
              } bg-netflixGray mt-1 md:py-8 md:px-6 p-4`}
            >
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹649 to ₹149 a month. No extra costs, no contracts.
            </div>
          </li>
          <li className="">
            <button
              className="flex flex-row justify-between w-full bg-netflixGray md:py-8 md:px-6 py-4 px-4 hover:bg-zinc-600"
              onClick={() => handleToggle("3")}
            >
              <h1 className>Where can I watch?</h1>
              <div>+</div>
            </button>
            <div
              className={`${
                display["3"] ? "block" : "hidden"
              } bg-netflixGray mt-1 md:py-8 md:px-6 p-4`}
            >
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
              <br />
              <br /> You can also download your favourite shows with the iOS,
              Android, or Windows 10 app. Use downloads to watch while you're on
              the go and without an internet connection. Take Netflix with you
              anywhere.
            </div>
          </li>
          <li className="">
            <button
              className="flex flex-row justify-between w-full bg-netflixGray md:py-8 md:px-6 py-4 px-4 hover:bg-zinc-600"
              onClick={() => handleToggle("4")}
            >
              <h1 className>How do I cancel?</h1>
              <div>+</div>
            </button>
            <div
              className={`${
                display["4"] ? "block" : "hidden"
              } bg-netflixGray mt-1 md:py-8 md:px-6 p-4`}
            >
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </div>
          </li>
          <li className="">
            <button
              className="flex flex-row justify-between w-full bg-netflixGray md:py-8 md:px-6 py-4 px-4 hover:bg-zinc-600"
              onClick={() => handleToggle("5")}
            >
              <h1 className>What can I watch in Netflix?</h1>
              <div>+</div>
            </button>
            <div
              className={`${
                display["5"] ? "block" : "hidden"
              } bg-netflixGray mt-1 md:py-8 md:px-6 p-4`}
            >
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </div>
          </li>
          <li className="">
            <button
              className="flex flex-row justify-between w-full bg-netflixGray md:py-8 md:px-6 py-4 px-4 hover:bg-zinc-600"
              onClick={() => handleToggle("6")}
            >
              <h1 className>Is Netflix good for Kids?</h1>
              <div>+</div>
            </button>
            <div
              className={`${
                display["6"] ? "block" : "hidden"
              } bg-netflixGray mt-1 md:py-8 md:px-6 p-4`}
            >
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space.
              <br />
              <br /> Kids profiles come with PIN-protected parental controls
              that let you restrict the maturity rating of content kids can
              watch and block specific titles you don’t want kids to see.
            </div>
          </li>
        </ul>
      </div>
      <EmailForm />
      <Footer />
    </>
  );
};

export default Login;
