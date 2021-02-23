import { useState, useEffect } from "react";
import axios from "axios";
import ComputerComponent from "../components/Dashboard/ComputerComponent";
const Dashboard = () => {
  const [computers, setcomputers] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:4000/test").then((data) => {
      setcomputers(data.data);
    });
  }, []);
  return (
    <>
      <p>Dashboard Page. Total Number of computers {computers.length}</p>

      <div className="container">
        {computers.map((computer, index) => (
          <div id="accordion" key={index}>
            <ComputerComponent
              computer={computer}
              key={computer.SerialNumber}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
