
import { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { MovieContextModule } from './Store/Context/MovieContext';
import './Styles/App.css'
import Details from "./Pages/Details";
import NotFoundPage from "./Pages/NotFoundPage";
import ReactLoading from 'react-loading';
import SigninChoose from './Pages/SigninChoose';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import LoadPublicPages from './Components/LoadPublicPages';
import LoadSidePages from './Components/LoadSidePages';


function App() {
  const sharedData = useContext(MovieContextModule);

  return (
        <div className='appSection' >
          <Routes>
            <Route path="/" element={<LoadPublicPages />} >
              <Route path="/" Component={Home} />
              <Route path="/details/:movieID" Component={Details} />
              <Route path="/*" Component={NotFoundPage} />
              <Route path="/signin-choose" Component={SigninChoose} />
            </Route>
            <Route path='/' element={<LoadSidePages />}>
              <Route path="/Signup" Component={Signup} />
              <Route path="/login" Component={Login} />
            </Route>
          </Routes>
        </div>
  )
}

export default App;
