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
        <Route path="/login" exact component={Login} />
        <Route path="/item/:id" exact component={ItemDetailContainer} />
        <Route path="/category/:categoryId" exact component={ItemListContainer} />
        <Route path="/" component={ItemListContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
