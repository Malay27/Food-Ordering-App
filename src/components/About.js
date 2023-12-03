import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h1>About us Page</h1>
      <p>This is Food Ordering App</p>
      <Outlet/>
      <ProfileClass/>
    </div>
  );
};

export default About;
