import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";
import AuctionPage from "./pages/AuctionPage";
import PurchasedPage from "./pages/PurchasedPage";

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
        path: "/purchased-products",
        element: <PurchasedPage />,
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
