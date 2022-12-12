import { RouterProvider } from "react-router-dom";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import PageOne from "../src/Pages/PageOne";
import PageTwo from "../src/Pages/PageTwo";

const router = createBrowserRouter([
  { path: "/", element: <PageOne></PageOne> },
  { path: "/page-two", element: <PageTwo></PageTwo> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
