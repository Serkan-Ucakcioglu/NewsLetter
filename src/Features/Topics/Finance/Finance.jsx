import React from "react";
import TopicList from "./FinanceList";
import { useGetTopicQuery } from "../topicsSlice";

function Topics() {
  const { data } = useGetTopicQuery();
  console.log(data);
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-3">
        {data?.stories?.map((topic) => (
          <TopicList topic={topic} key={topic?.internalID} />
        ))}
      </div>
    </div>
  );
}

export default Topics;
