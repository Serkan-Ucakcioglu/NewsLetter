import React from "react";

function Brands({ topic }) {
  const brands = topic?.secondaryBrands?.map((brand) => {
    return (
      <span className="inline-block self-end bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #{brand}
      </span>
    );
  });

  const primary = topic?.id ? (
    <>
      <svg
        className="opacity-75 mr-2"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width="12"
        height="12"
        viewBox="0 0 97.16 97.16"
      >
        <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z" />
        <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z" />
      </svg>
      <span className="font-bold text-gray-500">
        {topic?.id?.substring(0, 10)}
      </span>
    </>
  ) : (
    <span className="inline-block self-end bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #{topic?.primarySite}
    </span>
  );
  return (
    <>
      <div className="flex justify-start items-center h-full mt-2">
        {primary}
      </div>
      <div className="flex flex-wrap mt-3 h-full items-end">{brands}</div>
    </>
  );
}

export default Brands;
