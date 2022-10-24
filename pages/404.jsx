import Layout from "../components/layout/Layout";
import Link from "next/link";

const custom404 = () => {
	return (
		<Layout>
			<div className="text-center">
				<h1>404</h1>
				<p>
					This page does not exist. Please return to:{" "}
					<Link href="/">
						<a className="btn btn-outline-info rounded-5">Home</a>
					</Link>
				</p>
			</div>
		</Layout>
	);
};
export default custom404;
