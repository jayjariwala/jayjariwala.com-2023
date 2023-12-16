import * as React from 'react';
import { Layout } from 'components/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faPaintBrush, faDatabase } from '@fortawesome/free-solid-svg-icons';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import * as styles from 'components/styles/Home.module.css';
import { medium } from 'components/styles/Container.module.css';
import { btn, btnPrimary, btnLg, btnSm, linkBtn, buttonGroup } from 'components/styles/Button.module.css';
import { M6, M2 } from 'components/styles/Margin.module.css';
import avatarImg from 'assets/images/avatar2.jpg';
import cvsImg from 'assets/images/cvs.png';
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
			<div className={styles.hero}>
				<div className={styles.overlay}></div>
				<div className={`${medium} ${styles.introSection} text-center`}>
					<img className={styles.avatar} src={avatarImg} alt="avatar logo" />
					<div className={styles.introduction}>
						<p className={styles.hi}>Hello there!</p>
						<h1 className={styles.whoAmI}>
							I am Jay Jariwala. Full Stack JavaScript Developer with passion for {''}
							<span className="highlight">Design</span>
						</h1>
						<div className={styles.subIntro}>
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
			<div className={`${styles.section1} `}>
				<h2>I love working with cutting edge technolgies</h2>
				<p className={M2}>Things I am good at...</p>
			</div>
			<div className={`${styles.technologies} ${medium}`}>
				<div className={styles.card}>
					<div className={styles.round}>
						<FontAwesomeIcon icon={faGem} size="2x" />
					</div>
					<h3>UI Design</h3>
					<p>
						I love beautiful interfaces with great typography and vibrant colors. I design websites and web application mockups using Sketch/Figma and
						convert them into high-fidelity prototype
					</p>
				</div>
				<div className={styles.card}>
					<div className={styles.round}>
						<FontAwesomeIcon icon={faPaintBrush} size="2x" />
					</div>
					<h3>Frontend Development</h3>
					<p>
						I develop pixel perfect, cross browser compatible, and responsive websites using HTML5, CSS3 and JavaScript. I also develop Single Page
						Application frontend using React and Angular
					</p>
				</div>
				<div className={styles.card}>
					<div className={styles.round}>
						<FontAwesomeIcon icon={faDatabase} size="2x" />
					</div>
					<h3>Backend Development</h3>
					<p>
						My expertise spans designing and maintaining databases, implementing robust application logic, and ensuring seamless integration between
						front-end and back-end components.
					</p>
				</div>
			</div>
			<div className={styles.section2}>
				<h2 className={styles.title}>Work Experience</h2>
				<div className={styles.workWrapper}>
					<div className={styles.technologyWrapper}>
						<div>
							<h3>Core Technologies</h3>
							<ul>
								<li>
									<span className={styles.heading}>Programming Languages:</span>
									<span>JavaScript, TypeScript, Java </span>
								</li>
								<li>
									<span className={styles.heading}>Web Frameworks:</span>
									<span>ReactJs, Angular.js, jQuery</span>
								</li>
								<li>
									<span className={styles.heading}>Databases:</span>
									<span> Postgres, MySQL, MongoDB, Oracle</span>
								</li>
								<li>
									<span className={styles.heading}>Cloud:</span>
									<span>Google Cloud Platform - Kubernetes, Compute Engine, Cloud Functions, Cloud Run etc.</span>
								</li>
								<li>
									<span className={styles.heading}>Tools & Technologies:</span>
									<span>Kafka, Docker, CircleCI, Harness, Jenkins, Github, VSCode </span>
								</li>
								<li>
									<span className={styles.heading}>Testing:</span>
									<span>Jasmine, Karma, Cypress, React Testing library, jUnit</span>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.timelineWrapper}>
						<Timeline
							sx={{
								[`& .${timelineOppositeContentClasses.root}`]: {
									flex: 0.2,
								},
							}}
						>
							<TimelineItem>
								<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2" color="text.secondary">
									<h3>Oct 2020</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineConnector />
									<TimelineDot>
										<img src={cvsImg} width={20} />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent sx={{ py: '12px', px: 2 }}>
									<p>
										<h3>CVS Health</h3>
									</p>
									<p>
										<h4>Software Engineer</h4>
									</p>
									<Typography>Because you need strength</Typography>
								</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2" color="text.secondary">
									<h3>Oct 2020</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineConnector />
									<TimelineDot>
										<img src={cvsImg} width={20} />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent sx={{ py: '12px', px: 2 }}>
									<p>
										<h3>CVS Health</h3>
									</p>
									<p>
										<h4>Software Engineer</h4>
									</p>
									<Typography>Because you need strength</Typography>
								</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2" color="text.secondary">
									<h3>Oct 2020</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineConnector />
									<TimelineDot>
										<img src={cvsImg} width={20} />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent sx={{ py: '12px', px: 2 }}>
									<p>
										<h3>CVS Health</h3>
									</p>
									<p>
										<h4>Software Engineer</h4>
									</p>
									<Typography>Because you need strength</Typography>
								</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2" color="text.secondary">
									<h3>Oct 2020</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineConnector />
									<TimelineDot>
										<img src={cvsImg} width={20} />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent sx={{ py: '12px', px: 2 }}>
									<p>
										<h3>CVS Health</h3>
									</p>
									<p>
										<h4>Software Engineer</h4>
									</p>
									<Typography>Because you need strength</Typography>
								</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2" color="text.secondary">
									<h3>Oct 2020</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineConnector />
									<TimelineDot>
										<img src={cvsImg} width={20} />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent sx={{ py: '12px', px: 2 }}>
									<p>
										<h3>CVS Health</h3>
									</p>
									<p>
										<h4>Software Engineer</h4>
									</p>
									<Typography>Because you need strength</Typography>
								</TimelineContent>
							</TimelineItem>
						</Timeline>
					</div>
				</div>
			</div>
			<div className={`${styles.section3}`}>
				<div className={styles.contactCard}>
					<h3 className={styles.contactFormHeading} id="contact-me">
						Contact me
					</h3>
					<form method="post" action="https://getform.io/f/62a7def0-d14f-4596-bc6d-ab3d746e4080" className={styles.contactForm}>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" className={styles.inputType} />
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" className={styles.inputType} />
						<label htmlFor="message">Message</label>
						<textarea rows={10} className={styles.inputType} name="message" id="message" placeholder="Write something.." />
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
