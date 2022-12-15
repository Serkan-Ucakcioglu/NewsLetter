import React from "react";
import Loader from "../../../Components/Loader";
import FinanceList from "../Finance/FinanceList";
import { useGetMarketsQuery } from "../topicsSlice";

function News() {
  const { data, isFetching } = useGetMarketsQuery();

  const datas = data?.map((obj) => obj?.stories).flat();

  if (isFetching)
    return (
      <div className="flex justify-center items-center mt-6">
        <Loader />
      </div>
    );
  return (
    <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-3">
      {data &&
        datas?.map((topic, i) => {
          return <FinanceList topic={topic} key={i} />;
        })}
    </div>
  );
}

export default News;
