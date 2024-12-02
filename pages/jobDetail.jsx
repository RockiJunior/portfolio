import { experiences } from '../profileSkills';
import Layout from '../components/layout/Layout';
import JobCard from '../components/jobCard/JobCard';
import { useRouter } from 'next/router';

const JobDetail = () => {
	const router = useRouter();
	const job = experiences && experiences.filter((el) => el.title === router.query.title, 0)[0];
	return (
		<Layout footer={false} title={job && job.title}>
			<div className="col">
				<div>
					<JobCard job={job && job} />
				</div>
			</div>
		</Layout>
	);
};

export default JobDetail;
