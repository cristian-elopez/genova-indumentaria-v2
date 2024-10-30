import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes } from "./routes/Routes";
import Themes from "./redux/theme/themeStyles";
import { useSelector } from "react-redux";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={Themes[theme]}>
      <GlobalStyles />
      <Layout>
        <Navbar />
        <Routes />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
