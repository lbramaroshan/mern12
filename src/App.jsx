import { useState } from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Userlist from "./components/Userlist";
import User from "./components/Userdetail";
import ClassBase from "./components/ClassBase";

import Cartitems from "./components/Cartitems";
import AddProduct from "./components/AddProduct";
import Searchresult from "./components/Searchresult";
import ProductState from "./context/ProductState";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("first project");
  const [text, setText] = useState("Enable dark");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Enable light");
      showAlert("success", "Dark mode enabled");
    } else {
      setMode("light");
      setText("Enable dark");
      showAlert("success", "Light mode enabled");
    }
  };

  return (
    <>
      <ProductState>
        <Router>
          <Navbar
            toggleMode={toggleMode}
            title={title}
            text={text}
            mode={mode}
          />
          <Alert alert={alert} />
          {/* <ClassBase /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/:user_Id/:userName" element={<User />} />
            <Route path="/users" element={<Userlist />} />
            <Route path="/cartitems" element={<Cartitems />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/search/:searchQuery" element={<Searchresult />} />
          </Routes>
        </Router>
      </ProductState>
    </>
  );
}

export default App;

// lifecylce methods in class based components
// 1. constructor initialization // class based components
// 2. componentDidMount()
// 3. shouldComponentUpdate()
// 4. componentDidUpdate()
// 5. componentWillUnmount()

// lifecylce methods in function based components
// 1. mounting
// 2. updation  //useffect hook
// 3. unmounting
