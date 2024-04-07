import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LogInPage from "./pages/LogInPage";
import AuctionPage from "./pages/AuctionPage";
import PurchasedPage from "./pages/PurchasedPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/auction/:itemId",
    element: <AuctionPage />,
  },
  {
    path: "/purchased-products",
    element: <PurchasedPage />,
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