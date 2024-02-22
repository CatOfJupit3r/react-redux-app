import React from 'react';
import './App.css';

import Header from "./components/Header";
import NewBook from "./components/NewBook";
import ListActionsWindow from "./components/ListActionsWindow";
import BooksList from "./components/BooksList";

function App() {
  return (
      <div className="App">
          <Header />
          <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
          }}>
              <NewBook />
              <ListActionsWindow />
          </div>
          <BooksList />
      </div>
  );
}

export default App;
