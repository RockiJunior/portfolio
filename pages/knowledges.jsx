import Image from 'next/image';
import Layout from '../components/layout/Layout';
import { technologies } from '../profileSkills';
import Link from 'next/link';

const PostCard = ({ post }) => {
	return (
		<div className="col-md-3">
			<div
				className="card my-3 rounded"
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '22rem',
					boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',
				}}
			>
				<div style={{ flex: '0 1 10rem', overflow: 'hidden' }}>
					<Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
						<Image
							src={post.imageURL}
							alt=""
							className="card-img-top rounded"
							style={{
								width: '100%',
								height: '10rem',
								objectFit: 'cover',
								transition: 'transform 0.3s ease',
								cursor: 'pointer',
							}}
							onMouseEnter={(e) => {
								e.target.style.transform = 'scale(1.5)';
							}}
							onMouseLeave={(e) => {
								e.target.style.transform = 'scale(1)';
							}}
						/>
					</Link>
				</div>

				<div
					className="card-body text-center"
					style={{
						flex: 1,
						overflow: 'hidden',
						padding: '0.75rem',
					}}
				>
					<h5 style={{ fontSize: '1rem' }}>{post.title}</h5>{' '}
					<p
						style={{
							fontSize: '0.9rem',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
						}}
					>
						{post.content}
					</p>
					<Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
						<button
							type="button"
							className="btn btn-outline-info rounded-5"
							style={{
								fontSize: '0.9rem',
								padding: '0.5rem 1rem',
							}}
						>
							Read
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

const KnowLedges = () => {
	return (
		<Layout footer={false} title="My knowledge">
			<h5 className="text-center m-3">
				This is a list of the knowledge in technologies that I have (maybe no
				all techs are here!)
			</h5>

			<div className="row">
				{technologies.map((post, i) => (
					<PostCard key={i} post={post} />
				))}
			</div>
		</Layout>
	);
};

export default KnowLedges;
