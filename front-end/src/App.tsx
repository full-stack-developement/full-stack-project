import { RouterProvider } from "react-router-dom";
import { AnnouncementProvider } from "./contexts/announcement.context";
import { Route } from "./routes";

function App() {
  return (
    <AnnouncementProvider>
        <RouterProvider router={Route}></RouterProvider>
    </AnnouncementProvider>
  )
}

export default App
