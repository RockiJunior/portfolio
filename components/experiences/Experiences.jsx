import Link from 'next/link';

const Experiences = (props) => {
	const { id, title, description, from, to } = props;
	return (
		<li key={id} className="m-3 border-bottom pb-3" >
			<h3 className="m-0">{title}</h3>
			<h5 className="m-0">
				{from}-{to}
			</h5>
			<p className="m-0">{description}</p>
			<div className="text-end">
				<Link
					href={`/jobDetail?title=${title}`}
					as={`/jobDetail?title=${title}`}
				>
					<a className="btn btn-outline-info rounded-5 m-1">Know More</a>
				</Link>
			</div>
		</li>
	);
};

export default Experiences;
