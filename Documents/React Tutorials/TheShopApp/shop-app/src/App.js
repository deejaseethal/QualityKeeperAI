import { BrowserRouter, Routes,Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Footer from "./Components/Footer/Footer";
import './App.css';
import SecondNavBar from "./Components/SecondNavBar/SecondNavBar";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <NavBar/>
     <SecondNavBar/>
     <Banner/>
     <RowPost/>
     <Footer/>
     <Routes>
     <Route exact path="login" element={<Login/>} />
     <Route exact path="signup" element={<SignUp />} />
     </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
