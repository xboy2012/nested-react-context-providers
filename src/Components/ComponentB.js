import React, { memo, useContext } from 'react';
import BContext from "../Contexts/BContext";

const ComponentB = () => {
    const b = useContext(BContext);
    console.log('ComponentB rendered');
    return (
        <div style={{ border: '1px solid #000' }}>
            <h2>Component B</h2>
            <div>Value from ContextB "{b}"</div>
        </div>
    );
};

export default memo(ComponentB);
