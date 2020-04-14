import React, { useState, useCallback } from "react";
import AContext from "./Contexts/AContext";
import BContext from "./Contexts/BContext";
import CContext from "./Contexts/CContext";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentAB from "./Components/ComponentAB";
import ComponentC from "./Components/ComponentC";
import ComponentD from "./Components/ComponentD";

export default function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const onClickA = useCallback(() => {
        setA(Math.random());
    }, []);
    const onClickB = useCallback(() => {
        setB(Math.random());
    }, []);
    const onClickC = useCallback(() => {
        setC(Math.random());
    }, []);

    return (
        <div>
            <h1>Nested React Context Providers</h1>
            <AContext.Provider value={a}>
                <BContext.Provider value={b}>
                    <CContext.Provider value={c}>
                        <ComponentA />
                        <ComponentB />
                        <ComponentAB />
                        <ComponentC />
                        <ComponentD />
                    </CContext.Provider>
                </BContext.Provider>
            </AContext.Provider>
            <button onClick={onClickA}>Change A</button>
            <button onClick={onClickB}>Change B</button>
            <button onClick={onClickC}>Change C</button>
        </div>
    );
}
