import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <Link className="navbar-brand" to="/">
          Self Register Software v1.0
        </Link>
        <form className="form-inline">
          <button className="btn btn-primary" type="button">
            <Link style={{ color: "white" }} to="/dashboard">
              Dashboard
            </Link>
          </button>
        </form>
      </nav>
    </>
  );
};

export default TopNavbar;
