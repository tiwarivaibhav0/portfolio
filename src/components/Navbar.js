/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
	return (
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
	);
};

export default Navbar;
