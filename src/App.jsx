import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <HomePage />,
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