import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../../Svg/Loader";
import { useGetDetailsQuery } from "../topicsSlice";
import Image from "./Image";

function DetailNews() {
  const { id } = useParams();
  const { data: topic, isFetching } = useGetDetailsQuery(id);

  const brands = topic?.secondaryBrands?.map((brand) => {
    return (
      <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white  mr-2 mt-2 dark:text-white">
        #{brand},
      </span>
    );
  });

  const abstract = topic?.abstract?.map((title) => {
    return (
      <span className="mb-3 mt-2 text-m font-bold text-gray-700 dark:text-white">
        {title}.
      </span>
    );
  });

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
        {abstract}
        <div className="flex flex-wrap">{brands}</div>
      </div>
      <Image topic={topic} />
    </div>
  );
}

export default DetailNews;
