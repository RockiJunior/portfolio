import Image from "next/image";
import Layout from "../components/layout/Layout";
import Error from "./_error";
import Link from "next/link";

export async function getServerSideProps() {
	const res = await fetch("https://api.github.com/users/RockiJunior");
	const data = await res.json();

	const statusCode = res.status > 200 ? res.status : false;

	return {
		props: {
			user: data,
			statusCode,
		},
	};
}
const Github = ({ user, statusCode }) => {
	if (statusCode) {
		return <Error statusCode={statusCode} />;
	}
	return (
		<Layout footer={false} dark>
			<div className="row">
				<div className="col-md-4 offset-md-4">
					<div className="card card-body text-center">
						<h1 className="text-primary">{user.name}</h1>
						<Image
							src={user.avatar_url}
							alt=""
							className="border-primary rounded"
						/>
						<div>
							<p className="text-secondary">
								Welcome! if you are interested in my Repo&apos;s & my code, Click the
								next button and you be redirected to my github profile.{" "}
								<strong> Thank you!</strong>
							</p>
						</div>
						<Link href={user.html_url}>
							<a
								className="btn btn-outline-info rounded-5"
								target="_blank"
								rel="noopener noreferrer"
							>
								Go to My Github Profile
							</a>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Github;
