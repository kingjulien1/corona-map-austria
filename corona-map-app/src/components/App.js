import React from "react";
import Map from "./Map";
import { PageHeader, Spin, Tooltip, Layout } from "antd";
import { useCasesPerDistrict } from "../hooks";
import { GithubOutlined, AreaChartOutlined } from "@ant-design/icons";

function App() {
  let { cases, loading } = useCasesPerDistrict();
  return (
    <div>
      <PageHeader
        title="Corona Map"
        subTitle="aktuelle Fälle je Bezirk"
        style={{ zIndex: 5, backgroundColor: "#ffffff8c" }}
        extra={[
          <Tooltip title="zum Repository" placement="bottomLeft">
            <a href="https://github.com/julian-blaschke/corona-map-austria">
              <GithubOutlined></GithubOutlined>
            </a>
          </Tooltip>,
          <Tooltip
            title="zur Datenquelle (Österreichisches COVID-19 Open Data Informationsportal)"
            placement="bottomLeft"
          >
            <a href="https://www.data.gv.at/covid-19/">
              <AreaChartOutlined />
            </a>
          </Tooltip>,
        ]}
      ></PageHeader>
      {loading ? (
        <div style={{ width: "100%", textAlign: "center" }}>
          <Spin></Spin>
        </div>
      ) : (
        <Map data={cases}></Map>
      )}
    </div>
  );
}

export default App;
