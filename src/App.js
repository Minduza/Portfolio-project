import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Routes from "./routes/Routes";
import GlobalStyles from "./styles/Global";

import Layout from "./layouts/Layout";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
