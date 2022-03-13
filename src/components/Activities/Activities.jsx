import React, { useEffect, useState } from "react";
import Activity from "./Activity";
import styles from "./Activity.module.css";

export const Activities = () => {
  const [data, setData] = useState([]);
  // { data, setData }
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:3002/");
      let activities = await response.json();
      setData(activities);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.map((activity) => (
        <Activity
          key={activity.id}
          id={activity.id}
          name={activity.name}
          image={activity.image}
        />
      ))}
    </ul>
  );
};
