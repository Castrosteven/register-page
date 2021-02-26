import axios from "axios";
import React, { useState, useEffect } from "react";

const BrowserDetect = () => {
  const [ip, setIp] = useState(null);
  const [os, setos] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4000");
      console.log(result);

      setIp(result.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    var curOS = "Not Named...";
    if (navigator.appVersion.indexOf("Win") !== -1) curOS = "Windows";
    if (navigator.appVersion.indexOf("Mac") !== -1) curOS = "MacOS";
    if (navigator.appVersion.indexOf("X11") !== -1) curOS = "UNIX";
    if (navigator.appVersion.indexOf("Linux") !== -1) curOS = "Linux";
    setos(curOS);
  }, []);

  return (
    <>
      <div className="card" style={{ width: "13rem" }}>
        {ip && (
          <div className="card-body">
            <p>Your Operating System is {os}</p>
            <p>Your IP address is: {ip.ip}</p>
            <p> Your hostname is : {ip.hostname} </p>
            <p> Your RPC Status is {ip.rcpStatus && "GOOD"} </p>
          </div>
        )}
        {!ip && (
          <div className="card-body">
            <p>
              OBTAINING HARDWWARE INFORMATION PLEASE WAIT <br />
              LOADING......
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default BrowserDetect;
