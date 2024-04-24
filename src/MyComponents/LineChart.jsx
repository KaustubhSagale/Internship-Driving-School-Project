// import { ResponsiveLine } from "@nivo/line";
// import { useTheme } from "@mui/material";
// import { tokens } from "../theme";
// import { mockLineData as data } from "../data/mockData";

// const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <ResponsiveLine
//       data={data}
//       theme={{
//         axis: {
//           domain: {
//             line: {
//               stroke: colors.grey[100],
//             },
//           },
//           legend: {
//             text: {
//               fill: colors.grey[100],
//             },
//           },
//           ticks: {
//             line: {
//               stroke: colors.grey[100],
//               strokeWidth: 1,
//             },
//             text: {
//               fill: colors.grey[100],
//             },
//           },
//         },
//         legends: {
//           text: {
//             fill: colors.grey[100],
//           },
//         },
//         tooltip: {
//           container: {
//             color: colors.primary[500],
//           },
//         },
//       }}
//       colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
//       margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//       xScale={{ type: "point" }}
//       yScale={{
//         type: "linear",
//         min: "auto",
//         max: "auto",
//         stacked: true,
//         reverse: false,
//       }}
//       yFormat=" >-.2f"
//       curve="catmullRom"
//       axisTop={null}
//       axisRight={null}
//       axisBottom={{
//         orient: "bottom",
//         tickSize: 0,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: isDashboard ? undefined : "transportation", // added
//         legendOffset: 36,
//         legendPosition: "middle",
//       }}
//       axisLeft={{
//         orient: "left",
//         tickValues: 5, // added
//         tickSize: 3,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: isDashboard ? undefined : "count", // added
//         legendOffset: -40,
//         legendPosition: "middle",
//       }}
//       enableGridX={false}
//       enableGridY={false}
//       pointSize={8}
//       pointColor={{ theme: "background" }}
//       pointBorderWidth={2}
//       pointBorderColor={{ from: "serieColor" }}
//       pointLabelYOffset={-12}
//       useMesh={true}
//       legends={[
//         {
//           anchor: "bottom-right",
//           direction: "column",
//           justify: false,
//           translateX: 100,
//           translateY: 0,
//           itemsSpacing: 0,
//           itemDirection: "left-to-right",
//           itemWidth: 80,
//           itemHeight: 20,
//           itemOpacity: 0.75,
//           symbolSize: 12,
//           symbolShape: "circle",
//           symbolBorderColor: "rgba(0, 0, 0, .5)",
//           effects: [
//             {
//               on: "hover",
//               style: {
//                 itemBackground: "rgba(0, 0, 0, .03)",
//                 itemOpacity: 1,
//               },
//             },
//           ],
//         },
//       ]}
//     />
//   );
// };

// export default LineChart;

// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart
// import { BarChart } from '@mui/x-charts/BarChart';

// export default function LineChart() {
//   class ApexChart extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         series: [{
//           name: "Desktops",
//           data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
//         }],
//         options: {
//           chart: {
//             height: 350,
//             type: 'line',
//             zoom: {
//               enabled: false
//             }
//           },
//           dataLabels: {
//             enabled: false
//           },
//           stroke: {
//             curve: 'straight'
//           },
//           title: {
//             text: 'Product Trends by Month',
//             align: 'left'
//           },
//           grid: {
//             row: {
//               colors: ['#f3f3f3', 'transparent'],
//               opacity: 0.5
//             },
//           },
//           xaxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//           }
//         },
//       };
//     }

//     render() {
//       return (
//         <div>
//           <div id="chart">
//             <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
//           </div>
//           <div id="html-dist"></div>
//         </div>
//       );
//     }
//   }

//   const domContainer = document.querySelector('#app');
//   ReactDOM.render(<ApexChart />, domContainer); // Wrap ApexChart component in JSX syntax
// }
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {
	render() {
		const options = {
			animationEnabled: true,
      height: 230,
			title:{
				text: "Monthly Sales - 2023"
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "Sales (in rs)",
				prefix: "rs"
			},
			data: [{
				yValueFormatString: "#,###rs",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 25060 },
					{ x: new Date(2017, 1), y: 27980 },
					{ x: new Date(2017, 2), y: 42800 },
					{ x: new Date(2017, 3), y: 32400 },
					{ x: new Date(2017, 4), y: 35260 },
					{ x: new Date(2017, 5), y: 33900 },
					{ x: new Date(2017, 6), y: 40000 },
					{ x: new Date(2017, 7), y: 52500 },
					{ x: new Date(2017, 8), y: 32300 },
					{ x: new Date(2017, 9), y: 42000 },
					{ x: new Date(2017, 10), y: 37160 },
					{ x: new Date(2017, 11), y: 38400 }
				]
			}]
		}
		return (
		<div style={{ marginTop: '20px' }}>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default App;               