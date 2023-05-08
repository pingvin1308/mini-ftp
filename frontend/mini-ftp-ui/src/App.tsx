import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import FilesPage from "./pages/FilesPage";
import FileUploadPage from "./pages/FileUploadPage";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <Header />
        <FilesPage />
      </div>
    ),
  },
  {
    path: "/fileUpload",
    element: (
      <div className="App">
        <Header />
        <FileUploadPage />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
