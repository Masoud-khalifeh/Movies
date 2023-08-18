import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import './Styles/App.css'
import Details from "./Pages/Details";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/details/:movieID" Component={Details} />
      </Routes>
    </div>
  )
}

export default App;
