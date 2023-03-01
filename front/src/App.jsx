import { useState } from "react";
import "./App.css";
import { CreateTable } from "./components/CreateTale";
import { ShowTale } from "./components/ShowTale";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <CreateTable></CreateTable>
      <ShowTale></ShowTale>
    </>
  );
}

export default App;
