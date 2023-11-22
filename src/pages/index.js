import * as React from 'react';
import { Layout } from '../components/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faPaintBrush, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
	Hero,
	Overlay,
	Avatar,
	introSection,
	Introduction,
	Hi,
	WhoAmI,
	SubIntro,
	Section1,
	Section2,
	Technologies,
	Card,
	Round,
	ContactCard,
	ContactFormHeading,
	ContactForm,
	InputType,
} from 'components/styles/Home.module.css';
import { Medium } from 'components/styles/Container.module.css';
import { Btn, Btn_primary, Btn_lg, Btn_sm, Link_btn, ButtonGroup } from 'components/styles/Button.module.css';
import { M6, M2 } from 'components/styles/Margin.module.css';
import avatar from 'assets/images/avatar1.jpg';
import { Link } from 'gatsby';

const IndexPage = () => {
	return (
		<Layout>
			<div className={Hero}>
				<div className={Overlay}></div>
				<div className={`${Medium} ${introSection} text-center`}>
					<img className={Avatar} src={avatar} width="200px" height="200px" alt="avatar logo" />
					<div className={Introduction}>
						<p className={Hi}>Hello there!</p>
						<h1 className={WhoAmI}>
							I am Jay Jariwala. Full Stack JavaScript Developer with passion for {''}
							<span className="highlight">Design</span>
						</h1>
						<div className={SubIntro}>
							<p>
								As a tech enthusiast and software engineer, my passion lies in leveraging cutting-edge technology to create solutions that positively
								impact on people's lives. With expertise in healthcare technology, I currently serve as a full stack software engineer at CVS health,
								having previously contributed to Tausight as a User Interface engineer. I thrive on crafting innovative software to address real-world
								challenges, aiming to contribute to a tech-driven world that enhances and simplifies the human experience.
							</p>
						</div>
						<div className={`${M6} ${ButtonGroup} `}>
							<Link to="#contact-me" className={`${Btn} ${Btn_primary} ${Btn_lg} ${Link_btn} `}>
								Get in Touch
							</Link>
							<button className={`${Btn} ${Btn_lg}`}>Resume</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`${Section1} `}>
				<h2>I love working with cutting edge technolgies</h2>
				<p className={M2}>Things I am good at...</p>
			</div>
			<div className={`${Technologies} ${Medium}`}>
				<div className={Card}>
					<div className={Round}>
						<FontAwesomeIcon icon={faGem} size="2x" />
					</div>
					<h3>UI Design</h3>
					<p>
						I love beautiful interfaces with great typography and vibrant colors. I design websites and web application mockups using Sketch/Figma and
						convert them into high-fidelity prototype
					</p>
				</div>
				<div className={Card}>
					<div className={Round}>
						<FontAwesomeIcon icon={faPaintBrush} size="2x" />
					</div>
					<h3>Frontend Development</h3>
					<p>
						I develop pixel perfect, cross browser compatible, and responsive websites using HTML5, CSS3 and JavaScript. I also develop Single Page
						Application frontend using React and Angular
					</p>
				</div>
				<div className={Card}>
					<div className={Round}>
						<FontAwesomeIcon icon={faDatabase} size="2x" />
					</div>
					<h3>Backend Development</h3>
					<p>
						My expertise spans designing and maintaining databases, implementing robust application logic, and ensuring seamless integration between
						front-end and back-end components.
					</p>
				</div>
			</div>
			<div className={`${Section2}`}>
				<div className={ContactCard}>
					<h3 className={ContactFormHeading} id="contact-me">
						Contact me
					</h3>
					<form method="post" action="https://getform.io/f/62a7def0-d14f-4596-bc6d-ab3d746e4080" className={ContactForm}>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" className={InputType} />
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" className={InputType} />
						<label htmlFor="message">Message</label>
						<textarea rows={10} className={InputType} name="message" id="message" placeholder="Write something.." />
						<button type="submit" className={`${Btn} ${Btn_primary} ${Btn_sm} `}>
							Send
						</button>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
