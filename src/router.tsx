import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home/home";
import Contact from "./pages/Contact/contact";
import Calendar from "./pages/Calendar/calendar";
import Villa from "./pages/Villa/villa";
import News from "./pages/News/news";
import About from "./pages/About/about";
import Navigation from "./components/Navigation/navigation";
import Layout0 from "./pages/Villa/layout0";
import Layout1 from "./pages/Villa/layout1";
import Layout2 from "./pages/Villa/layout2";
import Layout3 from "./pages/Villa/layout3";
import Support from "./pages/Support/support";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "news", element: <News /> },
      { path: "calendar", element: <Calendar /> },
      { path: "contact", element: <Contact /> },
      { path: "villa", element: <Villa /> },
      { path: "villa/layout0", element: <Layout0 /> },
      { path: "villa/layout1", element: <Layout1 /> },
      { path: "villa/layout2", element: <Layout2 /> },
      { path: "villa/layout3", element: <Layout3 /> },
      { path: "support", element: <Support /> },
    ],
  },
]);

export default router;
