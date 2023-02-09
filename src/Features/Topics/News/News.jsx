import Loader from "../../../Svg/Loader";
import { useGetNewsQuery } from "../topicsSlice";
import useContent from "../../../Hooks/useContent";

function News() {
  const { data, isFetching } = useGetNewsQuery();
  const content = useContent(data && data);

  if (isFetching) return <Loader />;
  return <>{content}</>;
}

export default News;
