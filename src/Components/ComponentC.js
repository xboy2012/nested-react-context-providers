import React, { memo, useContext } from 'react';
import CContext from "../Contexts/CContext";

const ComponentC = () => {
    const c = useContext(CContext);
    console.log('ComponentC rendered');
    return (
        <div style={{ border: '1px solid #000' }}>
            <h2>Component C</h2>
            <div>Value from ContextC "{c}"</div>
        </div>
    );
};

export default memo(ComponentC);
