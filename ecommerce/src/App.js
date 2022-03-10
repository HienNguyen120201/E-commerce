import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routers/router";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, element, ...rest }, idx) => {
                    return <Route path={path} element={element} key={idx} />;
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
