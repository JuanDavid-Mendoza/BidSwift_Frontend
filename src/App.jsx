import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import LandingPage from "./pages/LandingPage";
import LogInPage from "./pages/LogInPage";
// import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LandingPage />,
  // },
  {
    path: "/login",
    element: <LogInPage />,
  },
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;