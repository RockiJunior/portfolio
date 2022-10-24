import _error from '../../pages/_error.jsx';
const JobCard = ({ job }) => {
	return (
		<div className="row">
			{job ? (
				<div className="card my-3 rounded">
					<div className="card-body text-center m-0">
						<h4 style={{ color: '#219acd' }}>{job.title}</h4>
						<h5>
							{job.from} - {job.to}
						</h5>
						<p style={{ fontFamily: 'initial', fontSize: '18px' }}>
							{job.description}
						</p>
						<p>{job.details}</p>
					</div>
				</div>
			) : (
				<_error>{404}</_error>
			)}
		</div>
	);
};
export default JobCard;
