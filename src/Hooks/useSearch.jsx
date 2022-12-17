import { useState } from "react";

function useSearch() {
  const [value, setValue] = useState();

  const handleChange = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return { value, setValue, handleChange };
}

export default useSearch;
