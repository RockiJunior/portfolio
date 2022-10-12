import Layout from "../components/layout/Layout";
import { posts } from "../profileSkills";

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
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="row">
      <Layout footer={false} title="My Blog">
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </Layout>
    </div>
  );
};

export default Blog;
