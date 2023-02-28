import { RouterProvider } from "react-router-dom";
import { ModalAddressUpdate } from "./components/ModalAddressUpdate";
import { AnnouncementProvider } from "./contexts/announcement.context";
import { Route } from "./routes";

function App() {
  return (
    <AnnouncementProvider>
        <RouterProvider router={Route}></RouterProvider>
        <ModalAddressUpdate></ModalAddressUpdate>
    </AnnouncementProvider>
  )
}

export default App
