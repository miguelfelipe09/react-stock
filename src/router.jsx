import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import ListItems from "./pages/items/ListItems";
import CreateItems from "./pages/items/CreateItems";
import ShowItem from "./pages/items/ShowItem";
import UpdateItem from "./pages/items/UpdateItem";
import ItemsLayout from "./pages/items/Layout";

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout/>,
    children: [
        {index: true, element: <Home/>},
        {
            path: "items",
            element: <ItemsLayout/>,
            children: [
                {index: true, element: <ListItems/>},
                {path: "new", element: <CreateItems/>},
                {path: ":id", element: <ShowItem/>},
                {path: ":id/update", element: <UpdateItem/>},
            ]
        }
    ]
}])

export default router;