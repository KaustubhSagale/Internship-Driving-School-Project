import { Box } from "@mui/material";
import Headerr from "/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/Headerr.jsx";
import LineChart from "/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/LineChart.jsx";

const Line = () => {
  return (
    <Box m="20px">
      <Headerr title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;