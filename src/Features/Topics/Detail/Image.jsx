import React from "react";

function Image({ topic }) {
  return (
    <div className="flex  flex-col sm:flex-row justify-end items-center">
      {topic.themedImages?.length ? (
        topic?.themedImages?.slice(0, 2)?.map((news) =>
          news?.themes?.map((url) => {
            return (
              <img
                src={
                  url.imageURLs.default ||
                  "https://images.hindustantimes.com/img/2021/06/14/1600x900/BREAKING_NEWS_1623714069768_1623714073796.jpg"
                }
                className="w-[450px] h-[300px] p-5"
                alt="images"
              />
            );
          })
        )
      ) : (
        <img
          src="https://images.hindustantimes.com/img/2021/06/14/1600x900/BREAKING_NEWS_1623714069768_1623714073796.jpg"
          className="w-[700px] h-[400px] p-5"
          alt="images"
        />
      )}
    </div>
  );
}

export default Image;
