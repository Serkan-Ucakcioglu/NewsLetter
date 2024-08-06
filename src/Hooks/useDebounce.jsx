import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDebounce, selectedDebounce } from "../Features/searchSlices";

function useDebounce(value, delay = 300) {
  const dispatch = useDispatch();
  const debounce = useSelector(selectedDebounce);

  useEffect(() => {
    let timer = setTimeout(() => dispatch(addDebounce(value)), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounce;
}

export default useDebounce;
