import React from "react";
import netflixLogo from "../assets/NetflixLogo.svg";
import { FaSistrix } from "react-icons/fa";
import { MdNotificationsNone, MdOutlineAccountCircle } from "react-icons/md";

const Nav = () => {
  return (
    <div className="flex justify-between content-center pt-5 px-10 text-white">
      <div className="flex gap-3 content-cente">
      <img src={netflixLogo} class="w-28 text-red-600 mr-5" alt="" />
        <a href="" className="text-sm font-semibold font-NetflixSansLight  tracking-tight ">Home</a>
        <a href="" className="text-sm font-semibold font-NetflixSansLight  tracking-tight">TV Shows</a>
        <a href="" className="text-sm font-semibold font-NetflixSansLight  tracking-tight">Movies</a>
        <a href="" className="text-sm font-semibold font-NetflixSansLight  tracking-tight">New & popular</a>
        <a href="" className="text-sm font-semibold font-NetflixSansLight  tracking-tight">My List</a>
        <a href="" className="text-sm font-semibold font-NetflixSansLight  tracking-tight">Browse by Languages</a>
      </div>
      <div className="flex gap-6">
        <a href=""><FaSistrix className="text-xl"/></a>
        <a href=""><MdNotificationsNone className="text-xl" /></a>
        <a href=""><MdOutlineAccountCircle className="text-xl" /></a>
      </div>
    </div>
  );
};

export default Nav;
