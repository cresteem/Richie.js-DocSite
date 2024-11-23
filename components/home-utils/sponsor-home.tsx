import CresteemBrandMark from "../utils/cresteem-logo";
import SponsorButton from "../utils/sponsor-button";

export default function SponsorHome() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative z-10 max-w-2xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Sponsor This Project
          </h3>
          <p className="mt-3 text-justify leading-loose">
            Richie.js is proudly built and maintained by{" "}
            <a
              href="https://cresteem.com/"
              className="text-deep"
              target="_blank"
            >
              Cresteem
            </a>
            , a leading software agency focused on delivering innovative tools
            for web development and SEO. By sponsoring Richie.js, you support
            the ongoing growth of an open-source project that's making a real
            impact.
          </p>
          <a href="https://cresteem.com/" target="_blank">
            <CresteemBrandMark classNames="py-10 text-black w-[80%] mx-auto" />
          </a>
        </div>
        <div className="relative mt-8 mx-auto max-w-2xl text-justify">
          <h4 className="font-bold text-primary">Why Sponsor?</h4>
          <ul className="leading-loose">
            <li>
              <span className="font-medium">Recognition:</span> Your logo and
              backlink will be featured on our website and documentation.
            </li>
            <li>
              <span className="font-medium">Priority:</span> Sponsors receive
              dedicated support and priority for feature requests.
            </li>
            <li>
              <span className="font-medium">Community Impact:</span> Contribute
              to an open-source project that empowers developers worldwide.
            </li>
          </ul>
          <a href="/sponsors" className="text-deep underline">
            Explore more about sponsorship
          </a>
          <SponsorButton className="my-8" />
        </div>
      </div>
    </section>
  );
}
