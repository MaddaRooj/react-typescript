import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List"
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "",
      age: 36,
      note: "Lame James"
    },
    {
      name: "Kobe Bryant",
      url: "",
      age: 42,
      note: "Allergic to helicopters"
    }
  ]);

  return (
    <div className="App">
      <h1>Party People</h1>
      <List people ={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
