import * as React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="px-3">
      <h1>Hi there!👋</h1>
      <p className="lead">Welcome to my litte world. </p>
      {/* <p className="lead">Hallo</p> */}
      <Link className="btn btn-lg btn-secondary fw-bold" to={"contact"}>
        Projects
      </Link>
    </main>
  );
};

export default Home;
