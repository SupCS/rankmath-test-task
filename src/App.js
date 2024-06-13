import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

import { NavProvider } from "./context/navContext";

export const teniaryHandler = (condition, trueValue, falseValue) => {
    return condition ? trueValue : falseValue;
};
function App() {
    return (
        <>
            <div className="container">
                <NavProvider>
                    <Header />
                    <Body />
                    <Menu />
                </NavProvider>
            </div>
        </>
    );
}

export default App;
