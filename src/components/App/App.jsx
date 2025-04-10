import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import HomePage from "../../page/HomePage/HomePage";
import NewsPage from "../../page/NewsPage/NewsPage";
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
      </Route>
    </Routes>
  );
}

export default App;
