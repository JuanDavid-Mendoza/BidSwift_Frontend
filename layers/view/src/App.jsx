import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./shared/pages/LandingPage"
import LogInPage from "./auth/pages/LogInPage";
import HomePage from "./auctions/pages/HomePage";
import AuctionPage from "./auctions/pages/AuctionPage";
import PublishAuctionPage from "./auctions/pages/PublishAuctionPage";
import PurchasedPage from "./shipments/pages/PurchasedPage";
import PublishedPage from "./auctions/pages/PublishedPage";
import NotFoundPage from "./shared/pages/NotFoundPage";

import { GlobalProvider } from "./utils/GlobalContext";

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
        path: "/published-auctions",
        element: <PublishedPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

function App() {
    return (
        <div className="App">
            <GlobalProvider>
                <RouterProvider router={router} />
            </GlobalProvider>
        </div>
    );
}

export default App;
