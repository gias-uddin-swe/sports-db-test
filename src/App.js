import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const notify = () => toast("Wow so easy!");
  return (
    <div className="App">
      <ToastContainer />
      <Home></Home>
    </div>
  );
}

export default App;
