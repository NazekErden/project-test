import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Drawer from "./components/Drawer/Drawer";
const App = () => {
  return (
    <div className="App lg:bg-slate-200">
      <Main />
      <Drawer />
    </div>
  );
};
export default App;
