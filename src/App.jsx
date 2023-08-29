import { RoutesMain } from "./Routes/RoutesMain"
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <RoutesMain/>

      <ToastContainer position='top-bottom' theme='dark' autoClose={2 * 1000} />
    </div>
  )
}

export default App
