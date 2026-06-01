import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../components/LineChart";
import { mockTransactions } from "../../data/mockData";

const Row2 = () => {
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
          gridColumn: "span 8",
          gridRow: "span 2",
          backgroundColor: colors.primary[400],
        }}
      >
        <Box
          sx={{
            mt: "25px",
            p: "0 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                variant: "h5",
                fontWeight: "600",
                color: colors.grey[100],
              }}
            >
              Regreso Generado
            </Typography>
            <Typography
              sx={{
                variant: "h3",
                fontWeight: "bold",
                color: colors.greenAccent[500],
              }}
            >
              $285,235
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ height: "250px", mt: "-20px" }}>
          <LineChart isDashboard={true} />
        </Box>
      </Box>
      {/* TRANSACTIONS */}
      <Box
        sx={{
          gridColumn: "span 4",
          gridRow: "span 2",
          backgroundColor: colors.primary[400],
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `4px solid ${colors.primary[100]}`,
            p: "15px",
          }}
        >
          <Typography
            sx={{
              color: colors.greenAccent[500],
              variant: "h5",
              fontWeight: "600",
            }}
          >
            Transacciones recientes
          </Typography>
        </Box>
        {mockTransactions.map((transaction, i) => (
          <Box
            key={`${transaction.txId}-${i}`}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `4px solid ${colors.primary[100]}`,
              p: "15px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: colors.greenAccent[500],
                  variant: "h5",
                  fontWeight: "600",
                }}
              >
                {transaction.txId}
              </Typography>
              <Typography sx={{ color: colors.grey[400] }}>
                {transaction.user}
              </Typography>
            </Box>

            <Box sx={{ color: colors.grey[100] }}>{transaction.date}</Box>
            <Box
              sx={{
                backgroundColor: colors.greenAccent[500],
                p: "5px 10px",
                borderRadius: "4px",
              }}
            >
              {transaction.cost}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Row2;
