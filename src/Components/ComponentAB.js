import React, { memo, useContext } from 'react';
import AContext from "../Contexts/AContext";
import BContext from "../Contexts/BContext";

const ComponentAB = () => {
    const a = useContext(AContext);
    const b = useContext(BContext);
    console.log('ComponentAB rendered');
    return (
        <div style={{ border: '1px solid #000' }}>
            <h2>Component AB</h2>
            <div>Value from ContextA "{a}"</div>
            <div>Value from ContextB "{b}"</div>
        </div>
    );
};

export default memo(ComponentAB);
