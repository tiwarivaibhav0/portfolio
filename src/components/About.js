/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const About = () => {
	const handleCVDownload = () => {
		const pdfFileName = "Vaibhav_Kumar_Tiwari_Resume.pdf";
		const localFilePath = process.env.PUBLIC_URL + "/files/" + pdfFileName;
		const a = document.createElement("a");
		a.href = localFilePath;
		a.download = pdfFileName;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};
	return (
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
											rel="noreferrer"
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
												rel="noreferrer"
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
											rel="noreferrer"
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
							Enthusiastic and results-driven TypeScript React frontend
							developer with a rich background in crafting seamless user
							interfaces for e-commerce integration apps. With over a year of
							hands-on experience, I excel in leveraging TypeScript and React.js
							to engineer high-performance, user-friendly web applications. My
							proficiency extends to backend development using PHP and MySQL,
							providing a holistic approach to software solutions. As an
							Associate Software Engineer at Cedcoss Technologies, I have
							successfully delivered projects on time, optimized app
							performance, and integrated RESTful APIs. A dedicated learner, I
							hold a Master's in Computer Applications with a GPA of 8.60,
							underlining my commitment to excellence. Known for my
							problem-solving prowess and collaborative spirit, I thrive in
							dynamic environments, constantly evolving to stay at the forefront
							of industry trends. Let's embark on a journey of innovation and
							excellence together.
						</p>
						<a onClick={handleCVDownload}>
							Download CV <i className="fas fa-download"></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
