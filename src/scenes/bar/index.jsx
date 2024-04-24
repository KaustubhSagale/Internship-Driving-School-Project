import { Box } from "@mui/material";
import Headerr from "/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/Headerr.jsx";
import BarCharts from "/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/BarCharts.jsx";

const Bar = () => {
  return (
    <Box m="20px">
      <Headerr title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarCharts />
      </Box>
    </Box>
  );
};

export default Bar;