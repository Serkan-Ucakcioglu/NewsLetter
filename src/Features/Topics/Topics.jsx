import React from "react";
import { useGetTopicQuery } from "./topicsSlice";

function Topics() {
  const { data } = useGetTopicQuery();

  return <div>Topics</div>;
}

export default Topics;
