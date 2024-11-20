import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Main/Home";

const routes = ([
    {
        path : '/',
        element : <Home />,
        children : [

        ]
    }
])

// React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. 
// You can use the `v7_relativeSplatPath` future flag to opt-in early.
const options = {
    future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
      },
}

const router = createBrowserRouter(routes, options);

export default router;