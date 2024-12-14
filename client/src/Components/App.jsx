import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Quiz from "./Quiz.jsx";

import Main from "./Main.jsx";

import Result from "./Result.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: <Quiz></Quiz>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
