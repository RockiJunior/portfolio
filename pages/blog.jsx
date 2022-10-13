import Layout from "../components/layout/Layout";
import { posts } from "../profileSkills";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="overflow">
          <img src={post.imageURL} alt="" className="card-img-top" />
        </div>
        <div className="card-body">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`} >
            <button className="btn btn-light">Read</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <Layout footer={false} title="My Blog">
      <div className="row">
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
