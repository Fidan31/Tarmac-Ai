import Header from "./Components/Header";
import Plugins from "./Pages/Plugins";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Plugins />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
