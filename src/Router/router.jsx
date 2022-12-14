import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Error from "../Components/Error";
import SearchList from "../Features/Search/SearchList";
import DetailNews from "../Features/Topics/Detail/DetailNews";
import Tabs from "../Features/Topics/Tabs/Tabs";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Tabs />} errorElement={<Error />} />
      <Route path="detail/:id" element={<DetailNews />} />
      <Route path="search-list" element={<SearchList />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
