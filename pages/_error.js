import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout>
      {statusCode ? (
        <p className="text-center">Could not load your page: {statusCode}</p>
      ) : (
        <p>Could not get this page</p>
      )}
    </Layout>
  );
};
export default _error;
