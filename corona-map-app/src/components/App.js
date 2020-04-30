import React from "react";
import Map from "./Map";
import { Layout, PageHeader, Spin } from "antd";
import { useCasesPerDistrict } from "../hooks";

function App() {
  let { cases, loading } = useCasesPerDistrict();
  return (
    <div>
      <PageHeader
        title="Corona Map"
        subTitle="aktuelle Fälle je Bezirk"
        style={{ zIndex: 5, backgroundColor: "#ffffff8c" }}
      ></PageHeader>
      {loading ? <Spin></Spin> : <Map data={cases}></Map>}
    </div>
  );
}

export default App;
