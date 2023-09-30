/* eslint-disable react/prop-types */
import ChartBar from "../ChartBar/ChartBar";
import "./Chart.css";
import { nanoid } from "nanoid";

function Chart({ dataPoints }) {

  const dataPointsValues = dataPoints.map(item => item.value);
  const maxValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map((item) => (
        <ChartBar
          key={nanoid}
          value={item.value}
          maxValue={maxValue}
          label={item.label}
        />
      ))}
    </div>
  );
}

export default Chart;
