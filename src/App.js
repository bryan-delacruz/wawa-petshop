import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/">
          <ItemListContainer />
        </Route>

      </Switch>

    </BrowserRouter>


  );
}

export default App;
