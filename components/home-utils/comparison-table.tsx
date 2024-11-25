export default function ComparisonTable() {
  return (
    <section className="py-5">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative z-10 max-w-2xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Traditional Methods vs Richie.js:
            <br /> <span className="text-primary">Smarter, Faster, Better</span>
          </h3>
          <p className="mt-3 text-justify leading-loose">
            Traditional methods are tedious, error-prone, and slow. Richie.js
            revolutionizes schema implementation with automated, validated, and
            scalable solutions that drive engagement and SEO impact."
          </p>
        </div>

        <div className="border xl:w-[70%] my-10 rounded-xl overflow-scroll md:overflow-hidden mx-auto border-gray-300">
          <table
            id="compare"
            className="table-auto text-left text-[12.5px] md:text-md tracking-wider leading-loose"
          >
            <thead>
              <tr className="bg-gradient-to-r from-[#51c1b5] to-[#2d6a8a] text-white">
                <th className="border border-gray-300 px-4 py-2">Feature</th>
                <th className="border border-gray-300 px-4 py-2">
                  Traditional Manual Process
                </th>
                <th className="border border-gray-300 px-4 py-2">Richie.js</th>
              </tr>
            </thead>
            <tbody className="font-light">
              <tr>
                <td>Effort Required</td>
                <td>
                  <span>Extensive</span> - Writing custom schema and ensuring
                  compliance with search engines is tedious and error-prone.
                </td>
                <td>
                  <span>Minimal</span> - Automates schema generation and
                  integration with minimal setup.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td>Error Risk</td>
                <td>
                  <span>High</span> - Misconfigurations can lead to broken rich
                  results or SEO penalties.
                </td>
                <td>
                  <span>Low</span> - Built-in validation ensures compliance with
                  search engine requirements.
                </td>
              </tr>
              <tr>
                <td>Rich Results Supported</td>
                <td>
                  <span>Basic</span> - Supports only limited types of structured
                  data unless manually extended.
                </td>
                <td>
                  <span>Comprehensive</span> - Covers 20+ rich result types,
                  including FAQs, recipes, events, and more.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td>Time to Implement</td>
                <td>
                  <span>Days to Weeks</span> - Requires extensive coding and
                  testing for each new implementation.
                </td>
                <td>
                  <span>Minutes</span> - Plug & play with pre-generated scripts
                  or simple API calls.
                </td>
              </tr>
              <tr>
                <td>Scalability</td>
                <td>
                  <span>Limited</span> - Manual adjustments required for scaling
                  across large websites.
                </td>
                <td>
                  <span>Seamless</span> - Configurable and adaptable to both
                  small and enterprise-level projects.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td>Integration Ease</td>
                <td>
                  <span>Challenging</span> - Demands expertise and careful
                  alignment with existing systems.
                </td>
                <td>
                  <span>Effortless</span> - Works out of the box with minimal
                  configuration.
                </td>
              </tr>
              <tr>
                <td>Impact on User Engagement</td>
                <td>
                  <span>Variable</span> - Results depend heavily on proper
                  implementation and upkeep.
                </td>
                <td>
                  <span>Guaranteed</span> - Optimized schemas significantly
                  enhance visibility and engagement.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
