import React, { useState } from "react";

const Skills = () => {
	const [showMore, setShowMore] = useState(false);
    const iconData = [
        {
          redirectLink: "https://www.w3.org/html/",
          imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
          alt: "html5",
        },
        {
          redirectLink: "https://www.w3schools.com/css/",
          imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
          alt: "css3",
        },
        {
          redirectLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          alt: "javascript",
        },
        {
          redirectLink: "https://developer.mozilla.org/en-US/docs/Web/Typescript",
          imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
          alt: "typescript",
        },
        {
          redirectLink: "https://reactjs.org/",
          imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
          alt: "react",
        },
        {
          redirectLink: "https://polaris.shopify.com",
          imageLink: "https://polaris.shopify.com/images/shopify-logo.svg",
          alt: "polaris-logo",
        },
        {
          redirectLink: "https://getbootstrap.com",
          imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
          alt: "bootstrap",
        },
        {
          redirectLink: "https://redux-toolkit.js.org/",
          imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
          alt: "redux",
        },
        {
          redirectLink: "https://git-scm.com/",
          imageLink: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
          alt: "git",
        },
        {
          redirectLink: "https://www.php.net/",
          imageLink: "https://www.php.net/images/logos/php-logo.svg",
          alt: "php-logo",
        },
        {
          redirectLink: "https://www.mysql.com/",
          imageLink: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
          alt: "mysql",
        },
      ];
      
	return (
		<section className="skills" id="skills">
			<div className="max-width">
				<h2 className="title fadein">My skills</h2>
				<div className="skills-content">
					<div className="column left">
						<div className="text">My creative skills & experiences</div>
						<p>
							My technical expertise encompasses JavaScript, ReactJS, Redux,
							Redux Toolkit, TypeScript, HTML5, CSS3, and Git. Additionally, I
							am proficient in utilizing Bootstrap and Shopify Polaris for
							efficient UI development. I have hands-on experience with REST API
							integration, JSON, and proficiently handle API interactions.
						</p>
						{showMore && (
							<>
								{" "}
								<p>
									Beyond my core skills, I possess a foundational understanding
									of PHP and MySQL from training, although my professional focus
									lies in ReactJS development. Well-versed in utilizing computer
									software packages and the latest frontend development tools, I
									am dedicated to staying abreast of industry trends and
									constantly refining my skill set. Eager to contribute my
									expertise to dynamic projects, I am poised to enhance user
									experiences and drive innovation in the ever-evolving
									landscape of frontend development.
								</p>
							</>
						)}

						<a href="#skills" onClick={() => setShowMore(!showMore)}>
							{showMore ? "Show less" : "Show more"}{" "}
							<i className="fas fa-angle-double-right"></i>
						</a>
					</div>
					<div className="column right">
						<div className="info">
							{iconData.map((icon, index) => (
								<a
									key={index}
									href={icon.redirectLink}
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={icon.imageLink}
										alt={icon.alt}
										width="120"
										height="120"
									/>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
