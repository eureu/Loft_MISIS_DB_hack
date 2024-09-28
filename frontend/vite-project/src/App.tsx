import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SidebarNav from "./components/SidebarNav/SidebarNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TechSupportPage from "./components/TechSupport/TechSupportPage";
import AdminPage from "./components/Admin/AdminPage";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/support" element={<TechSupportPage isOpen={isOpen} setIsOpen={setIsOpen}/>}/>
        <Route path="/admin" element={<AdminPage />}/>
        </Routes>

      </BrowserRouter>
          //   <div className="voreflow-x-hidden">
          //   <Header setIsOpen={setIsOpen} />
          //   <SidebarNav isOpen={isOpen} />
          //   <TechSupport isOpen={isOpen} />
          // </div>
        
  );
}

export default App;
