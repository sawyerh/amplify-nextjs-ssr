import Amplify from "aws-amplify";

Amplify.configure({
  Auth: {
    cookieStorage: {
      domain: "localhost",
      secure: false,
      expires: 1,
    },
  },
});

const Home = () => (
  <div className="container">
    <h1>My app</h1>
  </div>
);

export default Home;
