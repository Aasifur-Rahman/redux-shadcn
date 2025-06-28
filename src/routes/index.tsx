import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App/>
    Component: App,
    children: [
      {
        path: "user",
        Component: User,
      },
      {
        // path: "tasks",
        index: true, // this won't be blank issue so you  have to modificate the navbar also
        Component: Tasks,
      },
      {
        path: "tasks",

        Component: Tasks,
      },
    ],
  },
]);

export default router;
