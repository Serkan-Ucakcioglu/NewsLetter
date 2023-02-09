import { useGetSearchsQuery } from "./searchSlice";
import Error from "../../Components/Error";
import { useSelector } from "react-redux";
import { selectedDebounce } from "../searchSlices";
import Loader from "../../Svg/Loader";
import useContent from "../../Hooks/useContent";

function SearchList() {
  const debounce = useSelector(selectedDebounce);
  const { data, isError, isFetching } = useGetSearchsQuery(
    debounce && debounce
  );
  const content = useContent(data && data);

  if (isFetching) return <Loader />;
  if (isError) return <Error />;
  return <>{content}</>;
}

export default SearchList;
