import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./styles/global.css";
import store from "./store";
import { Provider } from "react-redux";
import Axios from "axios";

Axios.defaults.baseURL = process.env.REACT_APP_API_KEY;
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
