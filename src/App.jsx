import { RoutesMain } from "./Routes/RoutesMain"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { NewPostModal } from "./components/modals/NewPostModal"

function App() {
    return (
        <div className="App">
            <NewPostModal />
            <RoutesMain />
            <ToastContainer
                position="bottom-right"
                theme="dark"
                autoClose={2 * 1000}
            />
        </div>
    )
}

export default App
