import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Login from "./components/login/Login";
import ItemListContainer from "./components/container/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/id/:id" >
          <ItemDetailContainer />
        </Route>
        <Route path="/">
          <ItemListContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
