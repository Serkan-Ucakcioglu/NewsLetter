import React from "react";
import { useGetTopicQuery } from "../topicsSlice";
import Loader from "../../../Svg/Loader";
import useContent from "../../../Hooks/useContent";

function Finance() {
  const { data, isFetching } = useGetTopicQuery();
  const content = useContent(data && data);

  if (isFetching) return <Loader />;
  return content;
}

export default Finance;
