import React, { useEffect, useState } from "react";

const BugsList = () => {
  const [bugs, setBugs] = useState([]);

  let trackedApp = "blogsBy";

  useEffect(() => {
    fetch(`/bugs/${trackedApp}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBugs(data);
      });
  }, [trackedApp]);

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>{bug.name}</li>
      ))}
    </ul>
  );
};

export default BugsList;
