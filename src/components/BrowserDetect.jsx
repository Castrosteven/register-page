import axios from "axios";
import React, { useState, useEffect } from "react";

const BrowserDetect = () => {
  const [ip, setIp] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://selfregister.med.cornell.edu:4000");
      console.log(result);

      setIp(result.data);
    };

    fetchData();
  }, []);

  function findOS() {
    var curOS = "Not Named...";
    if (navigator.appVersion.indexOf("Win") != -1) curOS = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) curOS = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) curOS = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) curOS = "Linux";
    return curOS;
  }

  return (
    <>
      <div className="card" style={{ width: "13rem" }}>
        <div className="card-body">
          <p>Your Operating System is {findOS()}</p>
          <p>Your IP address is: {ip.ip}</p>
          <p> Your hostname is : {ip.hostname} </p>
        </div>
      </div>
    </>
  );
};

export default BrowserDetect;
