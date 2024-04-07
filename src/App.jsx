import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LogInPage from "./pages/LogInPage";
import AuctionPage from "./pages/AuctionPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/auction/:itemId",
    element: <AuctionPage />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;