import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "components/welcomeScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
