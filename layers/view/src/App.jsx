import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./shared/pages/LandingPage"
import LogInPage from "./auth/pages/LogInPage";
import HomePage from "./auctions/pages/HomePage";
import AuctionPage from "./auctions/pages/AuctionPage";
import PublishAuctionPage from "./auctions/pages/PublishAuctionPage";
import PurchasedPage from "./shipments/pages/PurchasedPage";
import NotFoundPage from "./shared/pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <LogInPage />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/auction/:itemId",
        element: <AuctionPage />,
    },
    {
        path: "/publish-auction",
        element: <PublishAuctionPage />,
    },
    {
        path: "/purchased-products",
        element: <PurchasedPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
