export default () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10 flex flex-col justify-center items-center">
      <div className="max-w-xl">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl text-center">
          Inspiration Behind Richie.js
        </h3>
        <p className="text-gray-600 mt-3 text-justify">
          As the founder of a software agency, full-stack engineer, and SEO
          specialist, I've always looked for methods to streamline workflows and
          reduce tiresome, repeated activities. Richie.js was inspired by a
          simple yet powerful realization: every rich result comprises the same
          information that already exists on the webpage.
        </p>
        <p className="text-gray-600 mt-3 text-justify font-semibold">
          Why couldn’t we automate this process?
        </p>
        <p className="text-gray-600 mt-3 text-justify">
          With this idea in mind, I set out to build a tool that could
          aggregate, and serialize existing page data into JSON-LD format before
          flawlessly adding it to the page. The goal was to simplify the process
          of producing rich results, saving time and effort for both developers
          and marketers.
        </p>
        <div className="text-gray-600 pt-4">
          <h4 className="font-semibold text-[1.1em] text-black">
            Key Features and Evolution
          </h4>
          <ul className="py-3 ml-6">
            <li className="list-disc">
              <span className="font-medium">Early Versions:</span> Richie.js
              initially supported generating rich results only in Node.js
              settings.
            </li>

            <li className="list-disc">
              <span className="font-medium">Version 2.0.1:</span> Richie.js
              evolved to allow for client-side implementation, making it
              compatible with newer frameworks such as Next.js, AngularJS,
              Vue.js, and React.js. This enables users to easily automate the
              generation of rich results using reserved class names.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
