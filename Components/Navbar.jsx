import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Logo from "../public/Assets/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 80) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-50 bg-brand-gray"
          : "fixed w-full h-20 z-50"
      }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <h1 className="text-xl md:text-3xl text-brand-main font-bold italic cursor-pointer">
            My Site
          </h1>
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase border-b border-transparent hover:text-brand-main hover:border-brand-main hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase border-b border-transparent hover:text-braborder-brand-main hover:border-brand-main hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase border-b border-transparent hover:text-braborder-brand-main hover:border-brand-main hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase border-b border-transparent hover:text-braborder-brand-main hover:border-brand-main hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase border-b border-transparent hover:text-braborder-brand-main hover:border-brand-main hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-3/4 sm:w-1/2 h-screen bg-brand-gray p-10 ease-in duration-500"
              : "fixed -left-full top-0 p-10 ease-in duration-500"
          }>
          <div>
            <div className="flex w-full items-center justify-between">
              <h1 className="text-xl md:text-3xl text-brand-main font-bold italic cursor-pointer">
                My Site
              </h1>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-5/6 md:w-11/12 py-4">
                {" "}
                Let`s build something legendary together
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="upparcase">
                <Link href="/#home">
                  <li className="py-4 text-sm" onClick={handleNav}>
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li className="py-4 text-sm" onClick={handleNav}>
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li className="py-4 text-sm" onClick={handleNav}>
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li className="py-4 text-sm" onClick={handleNav}>
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li className="py-4 text-sm" onClick={handleNav}>
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-braborder-brand-main">
                  Let`s Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-4/5">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
                    <Link href="https://t.me/Baxriddinxoja_Axmadaliyev">
                      <a target="_blank">
                        <FaTelegram color="#5651e5" />
                      </a>
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
                    <Link href="https://github.com/baxriddin0317">
                      <a target="_blank">
                        <FaGithub color="#5651e5" />
                      </a>
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
                    <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                      <a target="_blank">
                        <AiOutlineMail color="#5651e5" />
                      </a>
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
                    <Link href="tel:+998932414278">
                      <BsFillPersonLinesFill color="#5651e5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
