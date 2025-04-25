import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import HomePage from "../../page/HomePage/HomePage";
import NewsPage from "../../page/NewsPage/NewsPage";
import OurFriendsPage from "../../page/OurFriendsPage/OurFriendsPage";
import NotFoundPage from "../../page/NotFound/NotFound";

import LogInPage from "../../page/LogInPage/LogInPage";
import RegisrationPage from "../../page/RegistrationPage/RegistrationPage";
import RegistrationPage from "../../page/RegistrationPage/RegistrationPage";
import NoticesPage from "../../page/NoticesPage/NoticesPage";
import ProfilePage from "../../page/ProfilePage/ProfilePage";
import AddPetPage from "../../page/AddPetPage/AddPetPage";
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
          path="/notices"
          element={
            <Suspense fallback={<Loader />}>
              <NoticesPage />
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
          path="/register"
          element={
            <Suspense fallback={<Loader />}>
              <RegistrationPage />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <LogInPage />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loader />}>
              <ProfilePage />
            </Suspense>
          }
        />
        <Route
          path="/add-pet"
          element={
            <Suspense fallback={<Loader />}>
              <AddPetPage />
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
