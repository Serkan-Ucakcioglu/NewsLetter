import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import { useGetDetailsQuery } from "./topicsSlice";

function DetailNews() {
  const { id } = useParams();
  const { data: topic, isFetching } = useGetDetailsQuery(id);

  const image = topic?.themedImages?.map((news) =>
    news?.themes?.map((url) => {
      return url?.imageURLs?.default;
    })
  );

  if (isFetching)
    return (
      <div className="flex justify-center items-center mt-6">
        <Loader />
      </div>
    );

  return (
    <div className="flex px-10 mt-8 bg-gray-100">
      <div className="flex flex-1 flex-col text-justify justify-center items-center">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {topic?.byline}
        </h5>

        <p className="mb-3 mt-4 text-m font-bold text-gray-700 dark:text-gray-400">
          {topic?.title}.
        </p>
        {topic?.abstract?.map((title) => {
          return (
            <span className="mb-3 mt-2 text-m font-bold text-gray-700 dark:text-gray-400">
              {title}.
            </span>
          );
        })}

        <div className="flex flex-wrap">
          {topic?.secondaryBrands?.map((brand) => {
            return (
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white  mr-2 mt-2">
                #{brand}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end items-center">
        <img
          src={
            (image && image[0]) ||
            "https://imgeng.jagran.com/images/2022/aug/breaking-news-21661219975178.jpg"
          }
          className="w-[700px] h-[400px] p-5"
          alt="images"
        />
      </div>
    </div>
  );
}

export default DetailNews;
