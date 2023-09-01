import { RoutesMain } from "./Routes/RoutesMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DefaultTemplate } from "./components/DefaultTemplate";

function App() {
    return (
        <div className="App">
            <DefaultTemplate>
                <RoutesMain />
            </DefaultTemplate>
            <ToastContainer position="bottom-right" autoClose={2 * 1000} />
        </div>
    );
}

export default App;
