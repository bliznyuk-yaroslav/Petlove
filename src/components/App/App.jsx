import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import HomePage from "../../page/HomePage/HomePage";
import NewsPage from "../../page/NewsPage/NewsPage";
import OurFriendsPage from "../../page/OurFriendsPage/OurFriendsPage";
import NotFoundPage from "../../page/NotFound/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/news"
          element={
            <Suspense fallback={<Loader />}>
              <NewsPage />
            </Suspense>
          }
        />
        <Route
          path="/ourFriends"
          element={
            <Suspense fallback={<Loader />}>
              <OurFriendsPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
