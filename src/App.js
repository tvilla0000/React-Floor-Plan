import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BedRoom from "./components/BedRoom";
import Kitchen from "./components/Kitchen";
import Bath from "./components/Bath";
import LivingRoom from "./components/LivingRoom";

function App() {
  return (
    <div>
      <BedRoom bedNum={1} />
      <Kitchen />
      <Bath bath={"Full"} />
      <BedRoom bedNum={2} />
      <LivingRoom />
      <Bath bath={"Half"} />
      <BedRoom bedNum={3} />
    </div>
  );
}

export default App;
