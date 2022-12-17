import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDebounce, selectedDebounce } from "../Features/searchSlice";

function useDebounce(value, delay) {
  const dispatch = useDispatch();
  const debounce = useSelector(selectedDebounce);

  useEffect(() => {
    let timer = setTimeout(() => dispatch(addDebounce(value)), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounce;
}

export default useDebounce;
