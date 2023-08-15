import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import './Styles/App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </div>
  )
}

export default App;
