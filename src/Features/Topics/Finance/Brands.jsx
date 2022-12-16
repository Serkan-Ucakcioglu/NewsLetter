import React from "react";
import Primary from "../../../Svg/Primary";

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
      <Primary />
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
      <div className="flex justify-start flex-wrap items-center h-full mt-2">
        {primary}
      </div>
      <div className="flex flex-wrap mt-2 h-full items-end">{brands}</div>
    </>
  );
}

export default Brands;
