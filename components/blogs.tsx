export default () => {
  /*  const posts: { title: string; desc: string; date: string; href: string }[] = [
    {
      title: "What Makes Richie.js Unique?",
      desc: "This section is a placeholder for detailed information about the unique features and benefits of Richie JS. Here, you could describe how Richie JS simplifies the process of generating structured data, enhances SEO performance, and integrates seamlessly with modern frameworks like Next.js, Vue.js, and React.js. Add compelling insights or stats to engage readers and highlight the tool's value.",
      date: "Thursday, November 9th 2024",
      href: "/",
    },
  ]; */

  return (
    <section className="mt-12 mb-[9%] mx-auto px-4 max-w-screen-lg md:px-8 leading-loose">
      <div className="max-w-lg">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Unlock SEO Potential with Richie.js: Latest Blog Posts
        </h1>
        <p className="mt-3 text-gray-500">
          Explore expert insights, tutorials, and updates on Richie.js and SEO
          automation. Our blog covers everything from integrating Richie.js into
          modern frameworks to maximizing search engine visibility with rich
          results. Stay informed with tips, best practices, and news on how
          Richie.js is transforming web development and SEO strategies.
        </p>
      </div>
      <div className="mt-12 grid gap-8 divide-y md:grid-cols-2 md:divide-y-0">
        {/* {posts.map((item, idx) => (
          <article className="mt-5 pt-8 md:pt-0" key={idx}>
            <a href={item.href}>
              <span className="block text-gray-400 text-sm">{item.date}</span>
              <div className="mt-2">
                <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <button className="mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
                READ MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </a>
          </article>
        ))}
 */}{" "}
        <article>
          <p className="text-xl">No Blogs Added</p>
        </article>
      </div>
    </section>
  );
};
