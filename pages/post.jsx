import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import { technologies } from '../profileSkills.js';

const Post = () => {
	const router = useRouter();

	const currentPost = technologies.filter(
		(post) => post.title === router.query.title
	)[0];

	return (
		<Layout
			footer={false}
			title={currentPost && currentPost.title}
		>
			<div className="text-center">
				<img
					src={currentPost && currentPost.imageURL}
					alt={currentPost && currentPost.title}
					className="img-fluid rounded"
					style={{
						width: '50%',
						boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.9)',
						borderRadius: '8px',
						marginBottom: '2rem',
          }}
				/>
				<div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
					<p
						style={{
							fontSize: '1.2rem',
							lineHeight: '1.6',
							color: '#333',
							padding: '0 1rem',
							textAlign: 'center',
						}}
					>
						{currentPost && currentPost.content}
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Post;
