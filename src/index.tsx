import React from "react";
import { Provider } from "react-redux";

import {store} from "./store/store";
import {Main} from "./Main";

// TODO:
// Wrap your Main component inside the Provider component
const App = () =>
    <Main />

export default App;
