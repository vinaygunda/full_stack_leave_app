import logo from './logo.svg';
import './App.css'; 
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import Login from './pages/login';
import Signup from './pages/signup';
import UserDashboard from './pages/UserDashboard';
<Routes></Routes>

function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
      <Routes>
       
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/UserDashboard" element={<UserDashboard/>}></Route>
      <Route path="/" element={<Login/>}></Route>
      

      

      </Routes>
        </BrowserRouter>

      
     
    </div>
  );
}

export default App;
