import { Box } from "@mui/material";
import Header from "../components/Header";
import GeographyChart from "../components/GeographyChart";

const Geography = () => {
  return (
    <Box sx={{ m: "20px" }}>
      <Header title="Geografia Chart" subtitle="Estadisticas de geografia" />
      <Box sx={{ height: "75vh" }}>
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
