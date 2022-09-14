import { BrowserRouter} from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Modal from "./components/Modal/Modal";
import Loading from "./components/Loading";
function App() {
    return (
        <BrowserRouter>
            <Modal />
            <Loading />
            <AnimatedRoutes />
        </BrowserRouter>
    );
}

export default App;
