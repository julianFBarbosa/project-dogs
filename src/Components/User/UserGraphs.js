import React, { useState, useEffect } from "react";
import * as Graph from "./style/UserGraph";

const UserGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalViews = data.map(({acessos}) => +acessos).reduce((a, b) => a + b, 0);
    setTotal(totalViews);
    console.log('totalViews', totalViews)
  }, [data]);

  return (
    <Graph.container>
      <Graph.total>
        <p>Acessos: {total}</p>
      </Graph.total>
    </Graph.container>
  );
};

export default UserGraphs;
