import { ColorModeContext, useMode } from "./theme";
import { CccBaseLine, ThemeProvider } from "@mui/material"; 
import Topbar from "./scenes/global/Topbar";

function App() {
  const   [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CccBaseLine />
        <div className="app">
          <main className="content">

          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
