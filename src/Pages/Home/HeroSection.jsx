export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Yong</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">React</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Passionate React developer with a knack for creating dynamic and responsive web applications.
            <br /> Ready to bring innovative solutions and technical expertise to your team.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/cimatuyong/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get in touch</a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
