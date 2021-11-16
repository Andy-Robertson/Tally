import React, { useEffect, useState } from "react";

const Main = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetch("/tally/bugs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBugs(data);
      });
  }, []);

  return (
    <ul>
      {bugs.map((bug) => (<li key={bug.id}>{bug.name}</li>))}
    </ul>
  );
};

export default Main;
