import { HERO_CONTENT } from "../constants/index";
import profilepic from "../assets/projects/project-1.jpg";

const StartPage = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* "Hi, I'm" with smaller font size */}
            <p className="text-4xl">Hi, I'm</p>
            <h1 className="pb-10 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl">
              Gunjan Vaishnavi Jangra
            </h1>
            <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-900 bg-clip-text text-4xl tracking-tight text-transparent">
              A Tech Explorer
            </span>
            <span className="bg-gradient-to-r from-purple-500 via-black-500 to-green-900 bg-clip-text text-2xl tracking-tight text-transparent">
              <br />
              Welcome to My Digital Showcase!
            </span>
            <p className="my-2 max-w-3xl py-6 font-light tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={profilepic}
              alt="Profile"
              className="rounded-full h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
