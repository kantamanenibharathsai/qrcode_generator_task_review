import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import PasswordGenerator from "./pages/password/Password";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
