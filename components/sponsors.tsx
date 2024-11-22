export default function Sponsors() {
  return (
    <section className="flex flex-col justify-center items-center leading-loose pb-[8%]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10 flex flex-col justify-center items-center">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl text-center">
            Support Richie.js
          </h3>
          <p className="text-gray-600 mt-3 text-justify">
            Richie.js is a labor of love, built through individual effort and
            dedication. Created to solve a real problem in web development and
            SEO, it wasn't designed with financial gain in mind. However,
            maintaining and enhancing an open-source project requires support.
          </p>
          <p className="text-gray-600 mt-3 text-justify">
            Sponsorship isn’t just about money; it's about enabling progress.
            Your support, no matter the size, helps us continue improving
            Richie.js, maintaining its functionality, and introducing new
            features. Every contribution empowers us to keep moving forward.
          </p>
          <p className="text-gray-600 mt-3 text-justify">
            Open-source thrives on community, and sponsorship helps keep that
            spirit alive. By sponsoring Richie.js, you’re not only funding the
            project but empowering a community-driven initiative that makes a
            difference in web development.
          </p>
          <p className="text-gray-600 mt-3 text-justify">
            We appreciate your support and thank you for believing in Richie.js.
          </p>

          <div className="text-gray-600 pt-4">
            <h4 className="font-semibold text-[1.1em] text-black">
              Benefits of Sponsorship
            </h4>
            <p className="text-gray-600 mt-3 text-justify">
              By sponsoring Richie.js, you’ll not only support the continued
              development of an essential open-source tool but also gain
              exclusive benefits:
            </p>
            <ul className="py-3 ml-6">
              <li className="list-disc">
                <span className="font-medium">Priority Feature Requests:</span>{" "}
                As a sponsor, you’ll have the ability to request and prioritize
                new features that align with your business or project needs.
              </li>

              <li className="list-disc">
                <span className="font-medium">Active Integration Support:</span>{" "}
                Sponsors receive dedicated support for integrating Richie.js
                into their systems, ensuring seamless functionality and
                optimized performance.
              </li>

              <li className="list-disc">
                <span className="font-medium">Early Access to Builds:</span> Get
                early access to new builds and updates, allowing you to stay
                ahead of the curve and implement the latest improvements in your
                own projects.
              </li>

              <li className="list-disc">
                <span className="font-medium">
                  Recognition Across Our Platform:
                </span>{" "}
                Sponsors will be featured on our website, documentation, and
                README file, showcasing your contribution to the community and
                amplifying your brand's visibility.
              </li>
            </ul>

            <a
              href="https://github.com/sponsors/darsan-in"
              target="_blank"
              className="bg-primary px-6 py-2 rounded-full text-white mx-auto mt-3 block w-[200px] text-center hover:bg-primary/[70%]"
            >
              Become a sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
