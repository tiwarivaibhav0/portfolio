/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export const Portfolio = () => {

  const submitForm =()=>{
    alert()
  }
  return (
    <>
      {" "}
      <div className="scroll-up-btn">
        <i className="fas fa-angle-double-up"></i>
      </div>
      {/* <!-- Navbar Start--> */}
      <nav className={`navbar`}>
        <div className="max-width">
          <div className="logo">
            <a href="#">
              Portfo<span>lio.</span>
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#home" className="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-btn">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="menu-btn">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-btn">
                Contact
              </a>
            </li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello 👋 I'm</div>
            <div className="text-2">Vaibhav Kr Tiwari</div>
            <div className="text-3">
              And I'm a <span className="typing"></span>
            </div>
            <a
              href="https://www.linkedin.com/in/tiwarivaibhav0/"
              target="_blank"
            >
              Connect on Linkedin <i className="fad fa-angle-right"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title fadein">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src="/banner3.jpg" alt="Vaibhav Kr Tiwari" />
              <div>
                <div className="wrapper">
                  <div className="button1">
                    <div className="icon">
                      <a
                        href="https://www.linkedin.com/in/tiwarivaibhav0"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin"></i>
                        <span>LinkedIn</span>{" "}
                      </a>
                    </div>
                  </div>
                  <div className="buttonmob">
                    <div className="button1">
                      <div className="icon">
                        <a
                          href="https://twitter.com/tiwarivaibhav0"
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                          <span>Twitter</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="buttonmob1"></div>
                  <div className="button1">
                    <div className="icon">
                      <a
                        href="https://github.com/tiwarivaibhav0"
                        target="_blank"
                      >
                        <i className="fab fa-github"></i>
                        <span>Github</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">
                I'm Vaibhav and{" "}
                <span className="break">
                  I'm a <span className="typing2"></span>
                </span>
              </div>
              <p>
                I'm Self-taught React.js Developer. My goal is to build a fast,
                flexible, mobile-first website that clearly communicates with
                visitors. I have done B.E in E&C, I am a Youtuber having 90k+
                Subscribers. I have experience in the industrial field as a
                service engineer and in the education field as Mathematics
                Teacher.
              </p>
              <a
                href="images/Vaibhav Kr Tiwari ReactJs Developer.pdf"
                target="_blank"
              >
                Download CV <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title fadein">My skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creative skills & experiences</div>
              <p>
                I am a React Js Developer with a passion for learning and can
                work with estimation of future tasks and client feedback. I am
                highly-motivated, result oriented, self-driven, hard-working,
                fast learner and constantly seeking to improve my skills and am
                fully aware of the latest Front-end Development Tools. I have a
                firm knowledge of JavaScript and React Js, Parcel js, Node js,
                Redux, HTML5, CSS3, Git, SASS, Tailwind CSS, Bootstrap, REST
                API, JSON, Axios, Adobe Photoshop and possess a good knowledge
                of computer software packages (frameworks and tools) that are
                used in today’s technology.
              </p>
              <a href="#projects">
                Read more <i className="fas fa-angle-double-right"></i>
              </a>
            </div>
            <div className="column right">
              <div className="info">
                <a href="https://www.w3.org/html/" target="_blank">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="100"
                    height="100"
                  />
                </a>
                <a href="https://www.w3schools.com/css/" target="_blank">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="100"
                    height="100"
                  />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="80"
                    height="80"
                  />
                </a>
                <a href="https://reactjs.org/" target="_blank">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="90"
                    height="90"
                  />
                </a>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                    width="100"
                    height="100"
                  />
                </a>
                <a
                  href="https://getbootstrap.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                    alt="bootstrap"
                    width="100"
                    height="100"
                  />
                </a>
                <a
                  href="https://sass-lang.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                    alt="sass"
                    width="100"
                    height="100"
                  />
                </a>
                <a href="https://tailwindcss.com/" target="_blank">
                  <img
                    src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
                    alt="react"
                    width="100"
                    height="40"
                  />
                </a>
                <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                    alt="redux"
                    width="100"
                    height="100"
                  />
                </a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="git"
                    width="100"
                    height="100"
                  />
                </a>
                <a href="https://www.photoshop.com/en" target="_blank">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                    alt="photoshop"
                    width="90"
                    height="90"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects" id="projects">
        <div className="max-width">
          <h2 className="title fadein">My Projects</h2>
          <div className="carousel">
            {Array(10)
              .fill(1)
              .map((it, i) => (
                <div className="card">
                  <a href="https://foodfire-app.netlify.app/" target="_blank">
                    <div className="box">
                      <img src="./banner4.webp" alt="Food Fire App" />
                      <p>FoodFire App using React.js</p>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title fadein">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Reach Out to me!</div>
              <p>
                Discuss a Project or just want to say Hi? My inbox is open for
                all.
              </p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Vaibhav Kr Tiwari</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Lucknow, India</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope email-icon"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">tiwarivaibhav0@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="text1">Stay Connected</div>
              <div>
                <div className="wrapper">
                  <div className="button1">
                    <div className="icon">
                      <a
                        href="https://www.linkedin.com/in/tiwarivaibhav0"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin"></i>
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                  <div className="buttonmob">
                    <div className="button1">
                      <div className="icon">
                        <a
                          href="https://twitter.com/tiwarivaibhav0"
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                          <span>Twitter </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="buttonmob1"></div>
                  <div className="button1">
                    <div className="icon">
                      <a
                        href="https://github.com/tiwarivaibhav0"
                        target="_blank"
                      >
                        <i className="fab fa-github"></i>
                        <span>Github</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form action="#" onSubmit={submitForm}>
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Describe Project..."
                    required
                  ></textarea>
                </div>
                <div className="button">
                  <button type="submit">
                    Send Message <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <span>
          Created By{" "}
          <a href="https://www.linkedin.com/in/tiwarivaibhav0/" target="_blank">
            Vaibhav Kr Tiwari
          </a>{" "}
          | <span className="far fa-copyright"></span> 2023 All rights reserved{" "}
        </span>
      </footer>
    </>
  );
};
