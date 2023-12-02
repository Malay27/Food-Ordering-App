import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About us Page</h1>
      <p>This is Food Ordering App</p>
      <Outlet/>
    </div>
  );
};

export default About;
