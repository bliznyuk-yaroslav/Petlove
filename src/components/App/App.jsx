import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import HomePage from "../../page/HomePage/HomePage";
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
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
