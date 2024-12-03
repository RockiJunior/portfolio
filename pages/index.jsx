import Layout from '../components/layout/Layout';
import { profileSkills, experiences, projects } from '../profileSkills';
import Experiences from '../components/experiences/Experiences';
import Link from 'next/link';
import Script from 'next/script';
const Index = () => {
	return (
		<>
			<Layout>
				{/* Header Card */}
				<header className="row">
					<div className="col-md-12">
						<div className="card card-body bg-dark text-light">
							<div className="row">
								<div className="col-md-4">
									<img src="/perfil.jpeg" alt="" className="img-fluid" />
								</div>
								<div className="col-md-8">
									<h1>Gabriel Sebastián Villarroel</h1>
									<h3>FullStack Developer</h3>
									<p>
										I am a semi-senior Fullstack Web Developer with
										approximately 3 year of professional experience. I&apos;m
										currently working in a agro company called Terratio, where
										i&apos;m able to focus and train on the fullstack path, using
										nestjs, typescript, typeorm, reactjs, nextjs, and other
										technologies. From a young age, I&apos;ve been passionate about
										acquiring new knowledge and solving problems, which is why I
										believe I can excel in any type of work environment. I
										consider myself a proactive person with a great desire to
										learn and continue to grow! If you are interested in my
										profile, click the following button, and it will take you to
										form where you can contact me. Thanks a lot!!!
									</p>
									<Link href="/contactForm">
										<a className="btn btn-outline-info rounded-5">Hire Me!</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</header>
				{/* Second Section */}
				<div className="row py-2">
					<div className="col-md-4">
						<div className="card bg-light">
							<div className="card-body">
								<h1>Skills</h1>
								{profileSkills.map(({ skill, percentage }, i) => (
									<div className="py-3" key={i}>
										<div className="progress bg-light">
											<h5>{skill}</h5>
											<div
												className="progress-bar"
												role="progressbar"
												style={{
													width: `${percentage}%`,
													backgroundColor: '#1f9bcf',
												}}
											></div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<div className="card bg-light">
							<div className="card-body">
								<h1>Experience</h1>
								<ul>
									{experiences.map(({ id, title, from, to, description }) => (
										<Experiences
											id={id}
											key={id}
											title={title}
											from={from}
											to={to}
											description={description}
										/>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* PortFolio */}
				<section>
					<div className="row card-body bg-dark">
						<div className="col-md-12">
							<div className="card card-body bg-dark border-0">
								<div className="row">
									<div className="col-md-12 my-2">
										<h1 className="text-center text-light border-none">
											Projects
										</h1>
									</div>
								</div>
							</div>
						</div>
						{projects.map(({ title, description, image, projectURL }, i) => (
							<div className="col-md-4 p-2" key={i}>
								<div className="card h-100">
									<div className="overflow">
										<img
											src={`/${image}`}
											alt=""
											className="card-img-top img-fluid"
											style={{ height: '200px', objectFit: 'cover' }}
										/>
									</div>
									<div className="card-body d-flex flex-column justify-content-between">
										<h3>{title}</h3>
										<p dangerouslySetInnerHTML={{ __html: description }} />
										<Link href={projectURL || '/404'}>
											<a
												target="_blank"
												rel="noopener noreferrer"
												className="btn btn-outline-info rounded-5"
											>
												go to project...
											</a>
										</Link>
									</div>
								</div>
							</div>
						))}
						<div className="col-md-12 mt-4">
							<div className="text-center">
								<Link href="https://github.com/RockiJunior?tab=repositories">
									<a
										className="btn btn-outline-info rounded-5 m-2"
										target="_blank"
										rel="noopener noreferrer"
									>{`More Projects... (github)`}</a>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</Layout>
			<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
		</>
	);
};
export default Index;
