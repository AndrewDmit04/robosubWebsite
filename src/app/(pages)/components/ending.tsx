import React from 'react';

function Ending({ start, end }: { start: string; end: string }) {
  return (
    <div
      id="Connect"
      className="h-[400px] flex flex-col justify-end"
      style={{ background: `linear-gradient(${start}, ${end})` }}
    >
      <div className="w-full h-[5px] bg-white shadow-[0_0_20px_#00ffea,0_0_40px_#00ffea,0_0_60px_#00ffea]"></div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center items-center px-[50px] mt-4">
        <img
          className="w-full max-w-[80px] transform -translate-x-[4px]"
          alt="logo"
          src="/imgs/logos/RobosubLogo.png"
        />
        <div className="text-white text-[20px] text-center w-full">
          <p>Connect with us</p>
          <div className="flex items-center justify-center gap-[10px]">
            <a
              href="https://www.instagram.com/utdrobosub?igsh=bHkwaWFoYWdrM3Rz&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="insta"
                className="w-full max-w-[30px] rounded-[8px] shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                src="/imgs/icons/InstagramIcon.png"
              />
            </a>
            <a
              href="https://discord.gg/mpvz7S6vQA"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="discord"
                className="w-full max-w-[30px] rounded-[8px] shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                src="/imgs/icons/DiscordIcon.png"
              />
            </a>
            <a
              href="https://github.com/RoboSub-UTD"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="github"
                className="w-full max-w-[30px] rounded-[8px] shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                src="/imgs/icons/GithubIcon.png"
              />
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center text-white py-4">
        &copy; {new Date().getFullYear()} All rights reserved by RoboSub UTD
      </footer>
    </div>
  );
}

export default Ending;
