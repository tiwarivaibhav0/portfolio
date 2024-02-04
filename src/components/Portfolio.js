import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

export const Portfolio = () => {
	
	const submitForm = () => {
		alert();
	};

	return (
		<>
			{" "}
			<div className="scroll-up-btn">
				<i className="fas fa-angle-double-up"></i>
			</div>
			<Navbar/>
		    <Home/>
			<About/>
			<Skills/>
			<Projects/>
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
												target="_blank" rel="noreferrer"
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
													target="_blank" rel="noreferrer"
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
												target="_blank" rel="noreferrer"
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
					<a href="https://www.linkedin.com/in/tiwarivaibhav0/" target="_blank" rel="noreferrer">
						Vaibhav Kr Tiwari
					</a>{" "}
					| <span className="far fa-copyright"></span> 2023 All rights reserved{" "}
				</span>
			</footer>
		</>
	);
};
