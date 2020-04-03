import { AmplifyAuthenticator } from "@aws-amplify/ui-react";

const Home = () => (
  <div className="container">
    <AmplifyAuthenticator>
      <h1>My app</h1>
    </AmplifyAuthenticator>
  </div>
);

export default Home;
