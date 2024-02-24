import React from 'react';
import './App.css';

import Header from "./components/Header";
import NewBook from "./components/NewBook";
import ListActionsWindow from "./components/ListActionsWindow";
import BooksList from "./components/BooksList";
import Error from "./components/Error";

function App() {
  return (
      <div className="App">
          <Header />
          <main style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
          }}>
              <NewBook />
              <ListActionsWindow />
          </main>
          <Error />
          <BooksList />
      </div>
  );
}

export default App;
