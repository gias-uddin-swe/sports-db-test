import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="App">
      <ToastContainer />
      <Home></Home>
    </div>
  );
}

export default App;
