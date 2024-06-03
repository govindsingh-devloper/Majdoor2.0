import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import VerifyEmail from "./pages/VerifyEmail"

function App() {
  return (
    
    <div>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />

      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/verify-email" element={<VerifyEmail/>}/>
      </Routes>

    </div>
  );
}

export default App;