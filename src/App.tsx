import { Route, Routes } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";
import MovieContent from "./components/MovieContent";

const App = () => {
  return (
    <div className="text-2xl">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/watch/:movieId" element={<MovieContent />} />
        </Routes>
    </div>
  );
};

export default App;
