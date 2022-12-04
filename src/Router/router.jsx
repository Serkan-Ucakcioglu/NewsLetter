import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Error from "../Components/Error";
import Header from "../Components/Header/Header";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="*" element={<Error />} />
    </Route>
  )
);
