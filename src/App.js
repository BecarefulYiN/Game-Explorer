
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { GlobalContext, GlobalProvider } from "./context/GlobalContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

function App() {

  const { Mode } = useContext(GlobalContext)

  const theme = createTheme({
    palette: {
      mode: Mode
    }
  })


  return (
    <>
      <ThemeProvider theme = {theme}>
        <CssBaseline/>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
        </Routes>
      </ThemeProvider>

    </>
  );
}

export default App;
