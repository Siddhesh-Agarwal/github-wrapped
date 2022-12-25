import Form from "./components/form";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container-fluid text-bg-dark min-vh-100 m-0">
            <div className="container-sm px-3 pt-2">
                <h1 className="text-center display-1">GitHub Wrapped</h1>
                <Form />
            </div>
        </div>
    );
}

export default App;
