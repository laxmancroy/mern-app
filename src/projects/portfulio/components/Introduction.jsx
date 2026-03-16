import { SiWhatsapp, SiFacebook, SiLeetcode, SiX } from "react-icons/si";

const Introduction = () => {
  return (
    <div className="text-blue-800 text-center">
      <div className="inline-block mt-5 px-4 py-2 border border-blue-800 rounded-2xl">
        Available for work
      </div>
      <div className="text-black text-xl mt-4">
        HI, I'm <span className="text-blue-800">Laxman Chandra Roy</span>
      </div>
      <div className="text-3xl my-5">Full-Stack Developer</div>
      <span className="text-gray-500 block">
        I develop web appplication with a focus on performance, usability and
        maintainable code. I continuously learn and adapt to new tools and
        technologies.
      </span>
      <div className="bg-gray-200 py-4 rounded-xl mt-6 w-sm inline-block">
        Resume here!
      </div>
      <div className="bg-gray-200 py-4 rounded-xl mb-4 mt-2 w-sm inline-block">
        Explore my work
      </div>
      <span className="block mt-4">Connect with me</span>
      <div className="flex justify-center *:size-10 *:mx-3 *:mt-5">
        <SiWhatsapp/> <SiFacebook /> <SiLeetcode /> <SiX />
      </div>
    </div>
  );
};

export default Introduction;
