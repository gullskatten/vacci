import { BrowserRouter, Route } from "react-router-dom"
import Welcome from "../screens/Welcome";

const Routes = () => {

    return (
        <BrowserRouter>
            <Route component={Welcome} path="/" />
        </BrowserRouter>
    );
}

export default Routes;