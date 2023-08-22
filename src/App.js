import { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { MovieContextModule } from './Store/Context/MovieContext';
import './Styles/App.css'
import Details from "./Pages/Details";
import NotFoundPage from "./Pages/NotFoundPage";
import Navbar from "./Components/MainNavbar";
import ReactLoading from 'react-loading';
import Signin from './Pages/Signin';


function App() {
  const sharedData = useContext(MovieContextModule);

  return (
    <>
      {!sharedData.loaded ?
        <div className='loading'>
          <ReactLoading type={"bars"} color={"white"} height={'5%'} width={'5%'} className="loader" />
        </div>
        :
        <div className='appSection' >
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/details/:movieID" Component={Details} />
            <Route path="/*" Component={NotFoundPage} />
            <Route path="/signin" Component={Signin} />
          </Routes>
        </div>

      }

    </>
  )
}

export default App;
