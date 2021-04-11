import React from "react";

const ItemListContainer = (props) => {
  return (
    <div>
      <header className="App-header">
        <img src={props.logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.greeting}
        </a>
      </header>
    </div>
  );
};

export default ItemListContainer;
