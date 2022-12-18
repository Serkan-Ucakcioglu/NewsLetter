import React from "react";
import { useSelector } from "react-redux";
import { selectedTheme, themeChange } from "../../Features/searchSlices";
import { useDispatch } from "react-redux";
import ThemeSvg from "../../Svg/ThemeSvg";

function ThemeMode() {
  const theme = useSelector(selectedTheme);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(themeChange());
  };
  return (
    <div
      role="checkbox"
      aria-checked={theme === "light" ? "dark" : "light"}
      onClick={handleClick}
      className={`cursor-pointer  w-[185px] m:w-[140px] relative sm:w-12 h-5 ml-4 bg-black dark:bg-white rounded-full relative px-1 flex items-center${
        theme === "light" ? "" : " justify-end"
      }`}
    >
      <button
        className={`w-4 h-4 rounded-full border-gray-300 border absolute transform duration-200 ease-out left-0.5 ${
          theme === "light"
            ? "translate-x-6 bg-white"
            : "translate-x-0 bg-black"
        }`}
      />
      <ThemeSvg theme={theme} handleClick={handleClick} />
    </div>
  );
}

export default ThemeMode;
