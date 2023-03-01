import { RouterProvider } from "react-router-dom";
import { ModalUserUpdate } from "./components/ModalUserUpdate";
import { AnnouncementProvider } from "./contexts/announcement.context";
import { Route } from "./routes";

function App() {
  return (
    <AnnouncementProvider>
        <RouterProvider router={Route}></RouterProvider>
        <ModalUserUpdate></ModalUserUpdate>
    </AnnouncementProvider>
  )
}

export default App
