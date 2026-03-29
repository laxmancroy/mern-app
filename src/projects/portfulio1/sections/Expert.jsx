import { AiFillCode } from 'react-icons/ai'

const ExpertList = [
  {
    title: "Custom Plugin Development",
    description:
      "Expert in building bespoke WordPress plugins from scratch with clean, optimized code and comprehensive documentation.",
  },
  {
    title: "Theme Development",
    description:
      "Creating responsive, high-performance Wrodpress themes with advanced customizer options and modern design.",
  },
  {
    title: "Woocommerce Solutions",
    description:
      "Custom Woocommerce plugins payment gateway integrations, and e-commerce functionality development.",
  },
  {
    title: "Theme Development",
    description:
      "Creating responsive, high-performance Wrodpress themes with advanced customizer options and modern design.",
  },
  {
    title: "AI Integration",
    description:
      "Cutting-edge AI solutions integrated with WordPress including OpenAI API and custom AI workflows.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Proficient in PHP, JavaScript, MySQL, and modern web technologies for complete WordPress solutions.",
  },
];

export const Expert = () => {
  return (
    <div className="flex justify-around flex-wrap">
      <div className="flex flex-col min-w-50 max-w-sm bg-amber-200 rounded-md px-5 py-2 m-5">
            <div className="flex">
            <AiFillCode size="50" />
            <h3>Custom Plugin Development</h3>
            </div>
            <p>Expert in building bespoke WordPress plugins from scratch with clean, optimized code and comprehensive documentation.</p>
      </div>
      <div className="flex flex-col max-w-sm bg-amber-200 rounded-md px-5 py-2 m-5">
            <div className="flex">
            <AiFillCode size="50" />
            <h3>Custom Plugin Development</h3>
            </div>
            <p>Expert in building bespoke WordPress plugins from scratch with clean, optimized code and comprehensive documentation.</p>
      </div>
      <div className="flex flex-col max-w-sm bg-amber-200 rounded-md px-5 py-2 m-5">
            <div className="flex">
            <AiFillCode size="50" />
            <h3>Custom Plugin Development</h3>
            </div>
            <p>Expert in building bespoke WordPress plugins from scratch with clean, optimized code and comprehensive documentation.</p>
      </div>
      <div className="flex flex-col max-w-sm bg-amber-200 rounded-md px-5 py-2 m-5">
            <div className="flex">
            <AiFillCode size="50" />
            <h3>Custom Plugin Development</h3>
            </div>
            <p>Expert in building bespoke WordPress plugins from scratch with clean, optimized code and comprehensive documentation.</p>
      </div>
    </div>
  );
};
