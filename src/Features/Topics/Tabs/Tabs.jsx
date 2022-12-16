import React from "react";
import { useState } from "react";
import News from "../News/News";
import Finance from "../Finance/Finance";
import TabList from "./TabList";
import Region from "../Region/Region";

function Tabs() {
  const arr = [{ name: "Finance" }, { name: "News" }, { name: "General" }];
  const [active, setActive] = useState("Finance");

  const tabArr = {
    Finance: <Finance />,
    News: <News />,
    General: <Region />,
  };
  return (
    <>
      <div className="flex justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
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
