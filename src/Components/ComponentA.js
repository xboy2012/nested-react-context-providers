import React, { memo, useContext } from 'react';
import AContext from "../Contexts/AContext";

const ComponentA = () => {
    const a = useContext(AContext);
    console.log('ComponentA rendered');
    return (
        <div style={{ border: '1px solid #000' }}>
            <h2>Component A</h2>
            <div>Value from ContextA "{a}"</div>
        </div>
    );
};

export default memo(ComponentA);
