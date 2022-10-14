import Layout from "../components/layout/Layout";
import { posts } from "../profileSkills";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="col-md-3">
      <div
        className="card my-3 rounded"
        style={{ height: "25rem" }}
      >
        <div className="overflow">
          <Link
            href={`/post?title=${post.title}`}
            as={`/post/${post.title}`}
          >
            <img
              src={post.imageURL}
              alt=""
              className="card-img-top rounded"
            />
          </Link>
        </div>
        <div className="card-body text-center">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <Link
            href={`/post?title=${post.title}`}
            as={`/post/${post.title}`}
          >
            <button className="btn btn-light">
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
    <Layout
      footer={false}
      title="My knowledge"
    >
      <h5 className="text-center m-3">
        (This is a list of the knowledge
        in technologies that I have)
      </h5>
      <div className="row">
        {posts.map((post, i) => (
          <PostCard
            key={i}
            post={post}
          />
        ))}
      </div>
    </Layout>
  );
};

export default KnowLedges;
