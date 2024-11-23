import { ReactElement } from "react";
import { GoGoal } from "react-icons/go";
import { GrConfigure } from "react-icons/gr";
import { MdSpeed } from "react-icons/md";
import { PiGearSixBold } from "react-icons/pi";
import { RiRobot2Line, RiSearch2Line, RiStarLine } from "react-icons/ri";

export default function Features() {
  const features: { icon: ReactElement; title: string; desc: string }[] = [
    {
      title: "Automated Rich Result Generation",
      desc: "Transform your web pages into rich results without writing JSON-LD manually.",
      icon: <RiRobot2Line size={30} />,
    },
    {
      title: "Supports 20+ Rich Result Types",
      desc: "From articles to products, events to reviews, Richie.js covers it all which google supports.",
      icon: <RiStarLine size={30} />,
    },
    {
      title: "Client-Side and Server-Side Integration",
      desc: "Seamlessly integrate with modern frameworks like Next.js, React, Vue.js, and more.",
      icon: <PiGearSixBold size={30} />,
    },
    {
      title: "Selector-Based Content Parsing",
      desc: "Effortlessly map existing page content to structured data using reserved class names.",
      icon: <GoGoal size={30} />,
    },
    {
      title: "Future-Proof SEO",
      desc: "Stay ahead with compliance to Google’s latest rich result guidelines.",
      icon: <RiSearch2Line size={30} />,
    },
    {
      title: "Lightweight and Efficient",
      desc: "Minimal impact on page speed with highly optimized code.",
      icon: <MdSpeed size={30} />,
    },
    {
      title: "Customizable and Extensible",
      desc: "Adapt Richie.js to your unique requirements with ease.",
      icon: <GrConfigure size={30} />,
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Features That <span className="text-primary">Save Time</span>,
              Enhance <span className="text-primary">SEO</span>, and Deliver
              Results
            </h3>
            <p className="mt-3">
              Explore the tools and capabilities designed to streamline your
              workflow, optimize SEO, and drive impactful results effortlessly.
            </p>
          </div>
          <div
            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(81, 193, 181, 0.2) 4.54%, rgba(45, 106, 138, 0.26) 34.2%, rgba(81, 193, 181, 0.1) 77.55%)",
            }}
          ></div>
        </div>
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="bg-white space-y-3 p-4 border rounded-lg hover:bg-gray-50/[50%]"
              >
                <div className="text-primary pb-3">{item.icon}</div>
                <h4 className="text-lg text-primary font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
