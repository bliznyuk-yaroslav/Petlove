import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";

const HomePage = lazy(() => import("../../page/HomePage/HomePage"));
const NewsPage = lazy(() => import("../../page/NewsPage/NewsPage"));
const OurFriendsPage = lazy(() =>
  import("../../page/OurFriendsPage/OurFriendsPage")
);
const NotFoundPage = lazy(() => import("../../page/NotFound/NotFound"));
const LogInPage = lazy(() => import("../../page/LogInPage/LogInPage"));
const RegistrationPage = lazy(() =>
  import("../../page/RegistrationPage/RegistrationPage")
);
const NoticesPage = lazy(() => import("../../page/NoticesPage/NoticesPage"));
const ProfilePage = lazy(() => import("../../page/ProfilePage/ProfilePage"));
const AddPetPage = lazy(() => import("../../page/AddPetPage/AddPetPage"));
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/ourFriends" element={<OurFriendsPage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo={"/profile"}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LogInPage />} redirectTo={"/news"} />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute component={<ProfilePage />} redirectTo={"/login"} />
            }
          />
          <Route
            path="/add-pet"
            element={
              <PrivateRoute component={<AddPetPage />} redirectTo={"/login"} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
