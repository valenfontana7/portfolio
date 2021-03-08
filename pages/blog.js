import Layout from "../components/Layout";
import { posts } from "../profile";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="overflow">
          <img
            src={`/${post.imageURL} `}
            className="card-img-top"
            alt={post.title}
          />
        </div>
        <div className="card-body">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
            <button className="btn btn-light">Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Blog = () => (
  <Layout title="My blog" footer={false}>
    <div className="row">
      {posts.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </div>
  </Layout>
);
export default Blog;
