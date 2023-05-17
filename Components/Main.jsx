import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center z-0">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justfy-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest test-gray-600">
            Let`s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I`m <span className="text-brand-main">XO'JA</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
          Welcome! I am self motivated professional front-end web developer with 2+ years of experience and good work ethic and productive self-starter. Specialized in: ✔️ HTML, CSS. ✔️ Bootstrap. ✔️ Tailwindcss. ✔️ PSD or Sketch to HTML/CSS ✔️ Responsive Design ✔️ JavaScript. ✔️ ReduxJs ✔️ ReactJS ✔️ NextJS My goal and your goal are same: to maximize effectiveness of your project. For that, I will do my best not to let you down! 📈 1+ Years of Experience 📈 24/7 Support Feel free to reach out with any question - hope to speak soon!
          </p>
          <div className="flex items-center justify-between max-w-xs m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
              <Link href="https://t.me/Baxriddinxoja_Axmadaliyev">
                <a target="_blank">
                  <FaTelegram size={30} color="#5651e5" />
                </a>
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
              <Link href="https://github.com/baxriddin0317">
                <a target="_blank">
                  <FaGithub size={30} color="#5651e5" />
                </a>
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
              <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                <a target="_blank">
                  <AiOutlineMail size={30} color="#5651e5" />
                </a>
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
              <Link href="tel:+998932414278">
                <BsFillPersonLinesFill size={30} color="#5651e5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
