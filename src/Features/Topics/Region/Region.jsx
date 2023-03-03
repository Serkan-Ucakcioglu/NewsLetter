import React from "react";
import Loader from "../../../Svg/Loader";
import { useGetRegionQuery } from "../topicsSlice";
import useContent from "../../../Hooks/useContent";

function Region() {
  const { data, isFetching } = useGetRegionQuery();
  const content = useContent(data && data);

  if (isFetching) return <Loader />;
  return content;
}

export default Region;
