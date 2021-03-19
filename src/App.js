import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";
import RoutingComponent from "./components/Routing";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RoutingComponent />
      </Router>
    </Provider>
  );
}
export default App;
