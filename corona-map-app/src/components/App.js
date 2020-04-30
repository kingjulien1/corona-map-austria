import React from "react";
import Map from "./Map";
import { Layout, PageHeader } from "antd";

function App() {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Layout.Header style={{ backgroundColor: "white" }}>
        <PageHeader
          title="Corona Map"
          subTitle="aktuelle Corona-Fälle in Österreich"
        ></PageHeader>
      </Layout.Header>
      <Layout.Content style={{ backgroundColor: "white", margin: 40 }}>
        <Map></Map>
      </Layout.Content>
    </Layout>
  );
}

export default App;
