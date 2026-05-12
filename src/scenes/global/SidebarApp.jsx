import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { IconButton, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "react-router-dom";
import { token } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const SidebarApp = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const [isCollapsed, serIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box>
      <Sidebar
        rootStyles={{
          border: "none",
          height: "100vh",
          [`& .ps-sidebar-container`]: {
            backgroundColor: `${colors.primary[400]} !important`,
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: {
              padding: "5px 35px 5px 20px !important",
              backgroundColor: "transparent !important",
              "&:hover": {
                backgroundColor: "#868dfb !important",
              },
              "&:active": {
                backgroundColor: "#6870fa !important",
              },
            },
          }}
        >
          <MenuItem>
            <Box></Box>
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  sx={{
                    color: colors.grey[100],
                    m: "10px 0 0 0",
                  }}
                >
                  Ed Roh
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.greenAccent[500],
                  }}
                >
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarApp;
