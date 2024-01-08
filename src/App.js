import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./styles/global.css";
import store from "./store";
import { Provider } from "react-redux";
import Axios from "axios";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

Axios.defaults.baseURL = process.env.REACT_APP_API_KEY;
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ToastContainer autoClose={false}  position="top-center" />
    </Provider>
  );
}

export default App;
