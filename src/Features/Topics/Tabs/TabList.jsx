import React from "react";

function TabList({ obj, setActive, active }) {
  return (
    <li className="mr-2">
      <a
        href="#"
        onClick={() => setActive(obj?.name)}
        className={`inline-block p-4 rounded-t-lg border-b-2 active border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
          active == obj.name ? "text-blue-600  border-b-2 border-blue-600" : ""
        }`}
      >
        {obj?.name}
      </a>
    </li>
  );
}

export default TabList;
