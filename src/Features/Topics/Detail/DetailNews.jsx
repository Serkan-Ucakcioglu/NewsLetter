import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../../Svg/Loader";
import { useGetDetailsQuery } from "../topicsSlice";
import Abstract from "./Abstract";
import Image from "./Image";
import Brands from "../Finance/Brands";

function DetailNews() {
  const { id } = useParams();
  const { data: topic, isFetching } = useGetDetailsQuery(id);

  if (isFetching) return <Loader />;
  return (
    <div className="flex flex-col text-center justify-start m:flex-col h-full dark:border-t dark:border-white sm:flex-row sm:justify-center items-start h-screen p-10 bg-gray-100 dark:bg-gray-800">
      <div className="flex text-center  sm:mt-8 sm:flex-1 flex-col text-left items-center">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {topic?.byline}
        </h5>
        <p className="mb-3 mt-4 text-m font-bold text-gray-700 dark:text-white">
          {topic?.title}.
        </p>
        {topic?.abstract?.map((title) => (
          <Abstract title={title} />
        ))}
        <div className="flex flex-wrap">
          {topic?.secondaryBrands?.map((topic) => {
            <Brands topic={topic} />;
          })}
        </div>
      </div>
      <Image topic={topic} />
    </div>
  );
}

export default DetailNews;
