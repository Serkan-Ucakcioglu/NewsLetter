import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Error from "../Components/Error";
import Topics from "../Features/Topics/Topics";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Topics />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
