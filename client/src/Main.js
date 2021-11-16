import React, { useEffect, useState } from "react";

const Main = () => {
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
  }, []);

  return (
    <ul>
      {bugs.map((bug, index) => (
        <div>
          {console.log(bug.id)}

          <li key={bug.id}>{bug.name}</li>
        </div>
      ))}
    </ul>
  );
};

export default Main;
