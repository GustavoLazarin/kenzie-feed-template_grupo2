import { RoutesMain } from "./Routes/RoutesMain"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
    return (
        <div className="App">
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
