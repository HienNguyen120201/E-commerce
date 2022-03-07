import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routers/router";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, element, ...rest }) => {
                    return <Route path={path} element={element} />;
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
