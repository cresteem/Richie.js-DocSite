import { RiGithubFill, RiGlobalLine, RiLinkedinFill } from "react-icons/ri";

export default () => {
  const team: {
    avatar: string;
    name: string;
    title: string;
    linkedin: string;
    github: string;
    website: string;
  }[] = [
    {
      avatar: "/author/darsan.webp",
      name: "DARSAN",
      title: "Full Stack Engineer & SEO Expert",
      linkedin: "https://www.linkedin.com/in/darsan-in/",
      github: "https://github.com/darsan-in",
      website: "https://darsan.in/",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10 flex flex-col justify-center items-center">
      <div className="max-w-xl">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl text-center">
          Meet the Author
        </h3>
        <p className="text-gray-600 mt-3 text-center">
          Richie.js is created and maintained by{" "}
          <a href="https://darsan.in/">DARSAN</a>, a software engineer
          passionate about web development and SEO optimization.
        </p>
      </div>
      <div className="mt-12">
        <ul className="flex justify-center items-center">
          <li className="flex gap-4 items-center">
            <div className="flex-none w-24 h-24">
              <img
                src={team[0].avatar}
                className="w-full h-full rounded-full"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-gray-700 font-semibold sm:text-lg">
                {team[0].name}
              </h4>
              <p className="text-indigo-600">{team[0].title}</p>
              <div className="mt-3 flex gap-4 text-white">
                <a href={team[0].github} target="_blank">
                  <RiGithubFill className="w-7 h-7 rounded-full bg-black p-1" />
                </a>
                <a href={team[0].linkedin} target="_blank">
                  <RiLinkedinFill className="w-7 h-7 rounded-full bg-blue-600 p-1" />
                </a>
                <a href={team[0].website} target="_blank">
                  <RiGlobalLine className="w-7 h-7 rounded-full bg-blue-500 p-1" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
