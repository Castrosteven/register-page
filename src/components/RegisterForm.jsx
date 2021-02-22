import { useState } from "react";
import axios from "axios";
const RegisterForm = () => {
  const [cwid, setCwid] = useState("");

  const verifyCwid = (cwid) => {
    if (cwid.length >= 4) {
      return true;
    } else {
      return false;
    }
  };

  const makePost = (cwid) => {
    const api = "http://selfregister.med.cornell.edu:4000";
    axios
      .post(`${api}/register`, {
        cwid: cwid
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (evt) => {
    //   Stops the page from relading
    evt.preventDefault();
    // bool: if cwid is good
    const validCwid = verifyCwid(cwid);
    // 
    if (validCwid) {
      makePost(cwid);
    } else {
      alert("bad");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cwid"> Cwid </label>
        <input
          type="text"
          placeholder="Cwid"
          className="form-control"
          value={cwid}
          onChange={(e) => setCwid(e.target.value)}
          required
        ></input>
      </div>
      {cwid}
      <button className="btn btn-block btn-primary" type="submit">
        {" "}
        Register Computer{" "}
      </button>
    </form>
  );
};
export default RegisterForm;
