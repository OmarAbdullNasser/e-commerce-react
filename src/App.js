import { Routes, Route, Outlet } from "react-router-dom";
import "./categories.styles.scss";
import Home from "./route/Home/Home.jsx";
import Navbar from "./route/Navbar/Navbar.jsx";
import SignIn from "./route/Signin/SignIn.jsx";
const Shop = () => {
  return (
    <div>
      <div>
        <h1>this is Shop</h1>
      </div>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="SignIn" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
