import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Row1 from "../components/Row1";
import Row2 from "../components/Row2";
import Row3 from "../components/Row3";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ m: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Header title="DASHBOARD" subtitle="Bienvenidos al Dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[600],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Descargar Reportes
          </Button>
        </Box>
      </Box>
      {/* GRID Y CHARTS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12,1fr)",
          gridAutoRows: "140px",
          gap: "20px",
        }}
      >
        {/* ROW 1 */}
        <Row1 />
        {/* ROW 2 */}
        <Row2 />
        {/* ROW 3 */}
        <Row3 />

        {/*  */}
      </Box>
    </Box>
  );
};

export default Dashboard;
