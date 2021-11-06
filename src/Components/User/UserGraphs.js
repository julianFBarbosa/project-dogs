import React, { useState, useEffect } from "react";
import * as Graph from "./style/UserGraph";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    const totalViews = data
      .map(({ acessos }) => +acessos)
      .reduce((a, b) => a + b, 0);

    setGraph(graphData);
    setTotal(totalViews);
    console.log("totalViews", totalViews);
  }, [data]);

  return (
    <Graph.container>
      <Graph.total>
        <p>Acessos: {total}</p>
      </Graph.total>
      <Graph.item>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
            labels: { fontSize: 14, fill: "#333" },
          }}
        />
      </Graph.item>
      <Graph.item>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} ></VictoryBar>
        </VictoryChart>
      </Graph.item>
    </Graph.container>
  );
};

export default UserGraphs;
