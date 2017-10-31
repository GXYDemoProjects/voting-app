import React from 'react';
import { Chart as GoogleChart } from 'react-google-charts';

const Chart = ({ data }) => {
  const options = {
    title: 'Statistics',
    titleTextStyle: {fontSize: 20},
    pieHole: 0.5,
    pieSliceTextStyle: {
      color: 'white',
    },
    legend: {position: 'bottom'}
  };

  return (
    <div className="chart">
      {
        data &&
        <GoogleChart chartType="PieChart" data={data} options={options} graph_id="PieChart" 
        width="100%" height="500px" />
      }
    </div>
  );
};

export default Chart;