import AboutPage from "../pages/AboutPage";
import AuthPage from "../pages/AuthPage";
import CoursesPage from "../pages/CoursesPage";
import GroupsPage from "../pages/GroupsPage";
import HomePage from "../pages/HomePage";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    name: "About",
    path: "/about",
    exact: true,
    component: AboutPage,
  },
  {
    name: "Courses",
    path: "/couadasddassdrses",
    exact: false,
    component: CoursesPage,
  },
  { name: "Groups", path: "/groups", exact: true, component: GroupsPage },
  {
    name: "Sign up",
    path: "/signup",
    exact: true,
    component: AuthPage,
  },
  {
    name: "Sign in",
    path: "/signin",
    exact: true,
    component: AuthPage,
  },
];
