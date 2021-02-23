import { React, useEffect, useState } from "react";

export default function ComputerComponent(props) {
  const computer = props.computer;
  //   const [adapters, setadapters] = useState([]);
  //   useEffect(() => {
  //     setadapters(props.computer.NetworkApaters);
  //   }, []);
  return (
    <div className="card m-2">
      <div className="card-header" id={computer.PSComputerName}>
        <button
          className="btn btn-link"
          data-toggle="collapse"
          data-target={`#${computer.SerialNumber}`}
          aria-expanded="true"
          aria-controls={computer.SerialNumber}
        >
          {props.computer.PSComputerName}
        </button>
      </div>
      <div
        id={computer.SerialNumber}
        className="collapse hide"
        aria-labelledby={computer.PSComputerName}
        data-parent="#accordion"
      >
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col col-6 border">
                <h3>Hardware Information</h3>
                <ul>
                  <li> Serial Number: {computer.SerialNumber}</li>
                  <li> Manufacturer: {computer.Manufacturer}</li>
                  <li> PSComputerName: {computer.PSComputerName}</li>
                </ul>
              </div>
              <div className="col col-6 border">
                <h3>User Information</h3>
                <p>loremjeirjeorjejiulhfzlidhfknldiluyfhzbevlndlbldhf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
