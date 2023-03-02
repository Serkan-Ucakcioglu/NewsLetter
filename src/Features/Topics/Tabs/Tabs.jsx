import React from "react";
import { useState } from "react";
import TabList from "./TabList";

function Tabs() {
  const arr = [{ name: "Finance" }, { name: "News" }, { name: "General" }];
  const [active, setActive] = useState("Finance");

  // tab list
  const tabArr = {
    Finance: React.lazy(() => import("../Finance/Finance")),
    News: React.lazy(() => import("../News/News")),
    General: React.lazy(() => import("../Region/Region")),
  };
  return (
    <>
      <div className="flex justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:bg-gray-800 dark:text-white">
        <ul className="flex flex-wrap text-center">
          {arr?.map((obj, i) => (
            <TabList active={active} obj={obj} setActive={setActive} key={i} />
          ))}
        </ul>
      </div>
      {tabArr[active]}
    </>
  );
}

export default Tabs;
