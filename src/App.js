import { BrowserRouter } from "react-router-dom";
import Routers from './Routers';
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
