import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Loader";
import { useGetDetailsQuery } from "../topicsSlice";
import Image from "./Image";

function DetailNews() {
  const { id } = useParams();
  const { data: topic, isFetching } = useGetDetailsQuery(id);

  const brands = topic?.secondaryBrands?.map((brand) => {
    return (
      <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white  mr-2 mt-2">
        #{brand}
      </span>
    );
  });

  const abstract = topic?.abstract?.map((title) => {
    return (
      <span className="mb-3 mt-2 text-m font-bold text-gray-700 dark:text-gray-400">
        {title}.
      </span>
    );
  });
  if (isFetching)
    return (
      <div className="flex justify-center items-center mt-6">
        <Loader />
      </div>
    );

  return (
    <div className="flex flex-col sm:flex-row p-10 mt-8 bg-gray-100">
      <div className="flex mb-5 flex-1 flex-col text-justify justify-center items-center">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {topic?.byline}
        </h5>

        <p className="mb-3 mt-4 text-m font-bold text-gray-700 dark:text-gray-400">
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
