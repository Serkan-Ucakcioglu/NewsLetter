import React from "react";
import TopicList from "./TopicList";
import { useGetTopicQuery } from "./topicsSlice";

function Topics() {
  const { data } = useGetTopicQuery();
  console.log(data);
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-wrap max-w-4xl gap-5">
        {data?.stories?.map((topic) => (
          <TopicList topic={topic} key={topic?.internalID} />
        ))}
      </div>
    </div>
  );
}

export default Topics;
