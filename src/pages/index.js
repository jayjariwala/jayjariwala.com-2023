import * as React from 'react';
import { Layout } from '../components/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faPaintBrush, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
	hero,
	overlay,
	avatar,
	introSection,
	introduction,
	hi,
	whoAmI,
	subIntro,
	section1,
	section2,
	section3,
	technologies,
	card,
	round,
	contactCard,
	contactFormHeading,
	contactForm,
	inputType,
} from 'components/styles/Home.module.css';
import { medium } from 'components/styles/Container.module.css';
import { btn, btnPrimary, btnLg, btnSm, linkBtn, buttonGroup } from 'components/styles/Button.module.css';
import { M6, M2 } from 'components/styles/Margin.module.css';
import avatarImg from 'assets/images/avatar2.jpg';
import { Link } from 'gatsby';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

const IndexPage = () => {
	return (
		<Layout>
			<div className={hero}>
				<div className={overlay}></div>
				<div className={`${medium} ${introSection} text-center`}>
					<img className={avatar} src={avatarImg} alt="avatar logo" />
					<div className={introduction}>
						<p className={hi}>Hello there!</p>
						<h1 className={whoAmI}>
							I am Jay Jariwala. Full Stack JavaScript Developer with passion for {''}
							<span className="highlight">Design</span>
						</h1>
						<div className={subIntro}>
							<p>
								As a tech enthusiast and software engineer, my passion lies in leveraging cutting-edge technology to create solutions that positively
								impact on people's lives. With expertise in healthcare technology, I currently serve as a full stack software engineer at CVS health,
								having previously contributed to Tausight as a User Interface engineer. I thrive on crafting innovative software to address real-world
								challenges, aiming to contribute to a tech-driven world that enhances and simplifies the human experience.
							</p>
						</div>
						<div className={`${M6} ${buttonGroup} `}>
							<Link to="#contact-me" className={`${btn} ${btnPrimary} ${btnLg} ${linkBtn} `}>
								Get in Touch
							</Link>
							<button className={`${btn} ${btnLg}`}>Resume</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`${section1} `}>
				<h2>I love working with cutting edge technolgies</h2>
				<p className={M2}>Things I am good at...</p>
			</div>
			<div className={`${technologies} ${medium}`}>
				<div className={card}>
					<div className={round}>
						<FontAwesomeIcon icon={faGem} size="2x" />
					</div>
					<h3>UI Design</h3>
					<p>
						I love beautiful interfaces with great typography and vibrant colors. I design websites and web application mockups using Sketch/Figma and
						convert them into high-fidelity prototype
					</p>
				</div>
				<div className={card}>
					<div className={round}>
						<FontAwesomeIcon icon={faPaintBrush} size="2x" />
					</div>
					<h3>Frontend Development</h3>
					<p>
						I develop pixel perfect, cross browser compatible, and responsive websites using HTML5, CSS3 and JavaScript. I also develop Single Page
						Application frontend using React and Angular
					</p>
				</div>
				<div className={card}>
					<div className={round}>
						<FontAwesomeIcon icon={faDatabase} size="2x" />
					</div>
					<h3>Backend Development</h3>
					<p>
						My expertise spans designing and maintaining databases, implementing robust application logic, and ensuring seamless integration between
						front-end and back-end components.
					</p>
				</div>
			</div>
			<div className={section2}>
				<h2>Work Experience</h2>
				<div className="">
					<div></div>
					<div>
						<Timeline>
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Typography variant="h4" component="span">
										2021 - Current
									</Typography>
								</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>Code</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot />
								</TimelineSeparator>
								<TimelineContent>Sleep</TimelineContent>
							</TimelineItem>
						</Timeline>
					</div>
				</div>
			</div>
			<div className={`${section3}`}>
				<div className={contactCard}>
					<h3 className={contactFormHeading} id="contact-me">
						Contact me
					</h3>
					<form method="post" action="https://getform.io/f/62a7def0-d14f-4596-bc6d-ab3d746e4080" className={contactForm}>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" className={inputType} />
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" className={inputType} />
						<label htmlFor="message">Message</label>
						<textarea rows={10} className={inputType} name="message" id="message" placeholder="Write something.." />
						<button type="submit" className={`${btn} ${btnPrimary} ${btnSm} `}>
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
