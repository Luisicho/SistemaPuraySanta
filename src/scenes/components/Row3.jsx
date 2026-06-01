import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "../components/ProgressCircle";
import BarChart from "../components/BarChart";
import GeographyChart from "../components/GeographyChart";

const Row3 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ display: "contents" }}>
      <Box
        sx={{
          gridColumn: "span 4",
          gridRow: "span 2",
          backgroundColor: colors.primary[400],
          p: "30px",
        }}
      >
        <Typography sx={{ variant: "h5", fontWeight: "600" }}>
          Campaña
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: "25px",
          }}
        >
          <ProgressCircle size="125" />
          <Typography
            sx={{ variant: "h5", color: colors.greenAccent[500], mt: "15px" }}
          >
            $346,345 regreso
          </Typography>
          <Typography>Incluye extra</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          gridColumn: "span 4",
          gridRow: "span 2",
          backgroundColor: colors.primary[400],
        }}
      >
        <Typography
          sx={{ variant: "h5", fontWeight: "600", p: "30px 30px 0 30px" }}
        >
          Ventas Cantidad
        </Typography>
        <Box
          sx={{
            height: "250px",
            mt: "-20px",
          }}
        >
          <BarChart isDashboard={true} />
        </Box>
      </Box>
      <Box
        sx={{
          gridColumn: "span 4",
          gridRow: "span 2",
          backgroundColor: colors.primary[400],
          p: "30px",
        }}
      >
        <Typography sx={{ variant: "h5", fontWeight: "600", mb: "15px" }}>
          Geografia
        </Typography>
        <Box
          sx={{
            height: "200px",
          }}
        >
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Row3;
