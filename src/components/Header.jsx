import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>Job Follow-Up</h2>
      <nav>
        <NavLink to="/">Job List</NavLink>
        <NavLink to="/new">Add a job</NavLink>
      </nav>
    </header>
  );
};
export default Header;
