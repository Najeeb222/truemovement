import { ThemeProvider } from "styled-components";
import { Routes } from "./navigation";
import theme from "./styles/muiTheme";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
