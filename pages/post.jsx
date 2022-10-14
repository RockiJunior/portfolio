import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import { posts } from "../profileSkills.js";

const Post = () => {
  const router = useRouter();
  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];
  return (
    <Layout footer={false} title={currentPost && currentPost.title}>
      <div className="text-center">
        <img
          src={currentPost && currentPost.imageURL}
          alt=""
          className="img-fluid"
          style={{ width: "50%" }}
        />
        <p>{currentPost && currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default Post;
