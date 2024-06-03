import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    
    <div>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />

      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>

    </div>
  );
}

export default App;