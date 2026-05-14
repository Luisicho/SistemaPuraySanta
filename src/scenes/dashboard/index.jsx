import { Box } from "@mui/material";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box sx={{display:"flex", justifyContent:"space-between", alingItems:"center"}}>
        <Header title="DASHBOARD" subtitle="Bienvenidos al Dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
