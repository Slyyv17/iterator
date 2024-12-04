// eslint-disable-next-line no-unused-vars
import React from "react";
import IteratorComponent from "./components/IteratorComponent";
import {songs} from "../src/components/Song"

function App() {
    return (
        <div>
            <IteratorComponent items={songs} />
        </div>
    );
}

export default App;
