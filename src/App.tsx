import React from 'react';
import './App.css';

import Header from "./components/Header";
import NewBook from "./components/NewBook";
import FilterListWindow from "./components/FilterListWindow";
import BooksList from "./components/BooksList";

function App() {
  return (
      <div className="App">
          <Header />
          <div>
              <NewBook />
              <FilterListWindow />
          </div>
          <BooksList />
      </div>
  );
}

export default App;
