import "./App.css";
import IndexPage from "./Pages/IndexPage/IndexPage";
import CoastersPage from "./Pages/CoastersPage/CoastersPage";
import CoasterDetails from "./Pages/CoasterDetails/CoasterDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/galeria" element={<CoastersPage />} />
        <Route path="/detalles/:coasters_id" element={<CoasterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
