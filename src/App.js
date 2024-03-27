
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
    </Routes>
      
      
    </>
  );
}

export default App;
