import { BrowserRouter, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import Routes from "./router";

function App() {
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <>
                        <Navbar />
                        <div className="h-screen flex flex-row flex-wrap">
                            <Sidebar {...props} />
                            <div className="bg-background flex-1 p-8 md:mt-16">
                                <Routes />
                            </div>
                        </div>
                    </>
                )}
            />
        </BrowserRouter>
    );
}

export default App;
