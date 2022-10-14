import Layout from '../components/layout/Layout';
import { profileSkills, experiences, projects } from '../profileSkills';
import Link from 'next/link';
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
									<img src="/perfil3.jpg" alt="" className="img-fluid" />
								</div>
								<div className="col-md-8">
									<h1>Gabriel Sebastián Villarroel</h1>
									<h3>FullStack Developer</h3>
									<p>
										'm a full stack mid-level developer from Argentina. I was
										recently working with a company called econocom-gigigo,
										where I was able to focus and train on the backend, using
										nestjs, typescript, typeorm, and other technologies.
										I was a student at SoyHenry Bootcamp, where I learned the
										basics of programming from teachers and teammates, using
										javascript, react, and many other technologies. I consider
										myself a proactive person with a great desire to learn and
										continue to grow! If you are interested in my profile, click
										the following button, and it will take you to form where
										you can contact me. Thanks a lot!!!
									</p>
									<a href="/hire-me" className="text-light">
										Hire Me!
									</a>
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
										<div className="progress">
											<h5>{skill}</h5>
											<div
												className="progress-bar bg-info"
												role="progressbar"
												style={{
													width: `${percentage}%`,
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
									{experiences.map(({ title, from, to, description }, i) => (
										<li key={i}>
											<h3>{title}</h3>
											<h5>
												{from}-{to}
											</h5>
											<p>{description}</p>
										</li>
									))}
								</ul>
								<Link href="/experiences">
									<a className="btn btn-light">Know More</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				{/* PortFolio */}
				<section>
					<div className="row card-body bg-dark">
						<div className="col-md-12">
							<div className="card card-body bg-dark">
								<div className="row">
									<div className="col-md-12 my-2">
										<h1 className="text-center text-light">PortFolio</h1>
									</div>
								</div>
							</div>
						</div>
						{projects.map(({ title, description, image }, i) => (
							<div className="col-md-4 p-2" key={i}>
								<div className="card h-100">
									<div className="overflow">
										<img src={`/${image}`} alt="" className="card-img-top" />
									</div>
									<div className="card-body">
										<h3>{title}</h3>
										<p>{description}</p>
										<Link href="https://drops.vercel.app/">
											<a target="_blank" rel="noopener noreferrer">
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
										className="btn btn-outline-light"
										target="_blank"
										rel="noopener noreferrer"
									>{`More Projects... (github)`}</a>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};
export default Index;
