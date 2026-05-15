import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import SidebarApp from "./scenes/global/SidebarApp";
import Team from "./scenes/team"
import Contacts from "./scenes/contacts"
import Invoices from "./scenes/invoices"
// import Bar from "./scenes/bar"
// import Form from "./scenes/form"
// import Line from "./scenes/line"
// import FAQ from "./scenes/faq"
// import Geography from "./scenes/geography"
// import Calendar from "./scenes/calendar"

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarApp />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path ="/team" element={<Team/>} />
              <Route path ="/contacts" element={<Contacts/>} />
              <Route path ="/invoices" element={<Invoices/>} />
              {/* <Route path ="/form" element={<Form/>} /> */}
              {/* <Route path ="/bar" element={<Bar/>} /> */}
              {/* <Route path ="/pie" element={<Pie/>} /> */}
              {/* <Route path ="/line" element={<Line/>} /> */}
              {/* <Route path ="/faq" element={<FAQ/>} /> */}
              {/* <Route path ="/geography" element={<Geography/>} /> */}
              {/* <Route path ="/calendar" element={<Calendar/>} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
