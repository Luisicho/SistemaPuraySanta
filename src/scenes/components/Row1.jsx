import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "./StatBox";
import EmailIcon from "@mui/icons-material/Email";

const Row1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display:"contents"
      }}
    >
      <Box
        sx={{
          gridColumn: "span 3",
          backgroundColor: colors.primary[400],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StatBox
          title="12,361"
          subtitle="Emails Sent"
          progress="0.75"
          increase="+14%"
          icon={
            <EmailIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        sx={{
          gridColumn: "span 3",
          backgroundColor: colors.primary[400],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StatBox
          title="2,333"
          subtitle="Emails Sent"
          progress="0.95"
          increase="+50%"
          icon={
            <EmailIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        sx={{
          gridColumn: "span 3",
          backgroundColor: colors.primary[400],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StatBox
          title="15,4531"
          subtitle="Emails Sent"
          progress="0.55"
          increase="+9%"
          icon={
            <EmailIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        sx={{
          gridColumn: "span 3",
          backgroundColor: colors.primary[400],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StatBox
          title="1124,545"
          subtitle="Emails Sent"
          progress="0.25"
          increase="+64%"
          icon={
            <EmailIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default Row1;
