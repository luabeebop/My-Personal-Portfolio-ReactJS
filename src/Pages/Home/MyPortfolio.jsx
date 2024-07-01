import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.112.82-.261.82-.578 0-.286-.01-1.043-.015-2.048-3.338.724-4.042-1.612-4.042-1.612-.546-1.386-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.933 0-1.311.469-2.382 1.237-3.22-.124-.305-.536-1.532.118-3.19 0 0 1.008-.323 3.302 1.23.957-.267 1.983-.4 3.003-.404 1.02.004 2.046.137 3.003.404 2.294-1.554 3.3-1.23 3.3-1.23.655 1.658.243 2.885.12 3.19.77.838 1.236 1.909 1.236 3.22 0 4.61-2.804 5.625-5.475 5.921.43.372.815 1.102.815 2.222 0 1.604-.015 2.898-.015 3.293 0 .319.218.694.825.577C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"
                fill="#181717"
              />
            </svg>
            My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
