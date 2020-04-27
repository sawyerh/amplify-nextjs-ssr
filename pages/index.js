import { Authenticator, SignIn } from "aws-amplify-react";

const Home = () => (
  <div className="container">
    <Authenticator>
      <h1>My app</h1>
      <SignIn />
    </Authenticator>
  </div>
);

export default Home;
