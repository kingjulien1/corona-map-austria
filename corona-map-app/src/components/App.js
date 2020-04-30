import React from "react";
import Map from "./Map";
import { Layout, PageHeader, Spin } from "antd";
import { useCasesPerDistrict } from "../hooks";

function App() {
  let { cases, loading } = useCasesPerDistrict();
  return loading ? <Spin></Spin> : <Map data={cases}></Map>;
}

export default App;
