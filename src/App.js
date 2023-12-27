import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./styles/global.css";
import store from "./store";
import { Provider } from "react-redux";
import Axios from "axios";
Axios.defaults.baseURL = `http://localhost:5000`;
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
