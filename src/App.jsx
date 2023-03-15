import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";
import { selectedTheme } from "./Features/searchSlices";

function App() {
  const theme = useSelector(selectedTheme);
  return (
    <div className={`App ${theme === "dark" && "dark"}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
