import Layout from "../components/Layout";
import Error from "./_error";
const Github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layout footer={false}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" />
            <p>{user.bio}</p>
            <a
              href={user.blog}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              My blog
            </a>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              Go to GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getInitialProps() {
  const res = await fetch("https://api.github.com/users/valenfontana7");
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;
  return {
    props: {
      user: data,
      statusCode: statusCode,
    },
  };
}

export default Github;
