import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "components/welcomeScreen";
import Main from "components/mainScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
