import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Routes from "./routes/Routes";
import { Wrapper } from "./pages/Home/Home.styled";
import GlobalStyles from "./styles/Global";
import Topbar from "./components/Topbar/Topbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Topbar />
        <Routes />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
