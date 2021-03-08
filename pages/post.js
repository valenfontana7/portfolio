import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../profile";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];
  return (
    <Layout footer={false} title={currentPost.title}>
      <div className="text-center">
        <img
          className="img-fluid"
          src={`/${currentPost.imageURL}`}
          alt={currentPost.title}
          style={{ width: "50%" }}
        />
        <p>{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default Post;
