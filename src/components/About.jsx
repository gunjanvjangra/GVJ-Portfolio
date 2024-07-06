import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="text-center text-4xl mt-8">
        About
        <span className="text-blue-900"> Me</span>
      </h2>
      <div className="flex flex-wrap items-center mt-8">
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="flex justify-center lg:justify-start">
            <img className="rounded-full" src={aboutImg} alt="About Me" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="max-w-xl py-4">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
