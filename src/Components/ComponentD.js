import React, { memo } from 'react';
import ComponentC from './ComponentC';

const ComponentD = () => {
    console.log('ComponentD rendered');
    return (
        <div style={{ border: '1px solid #000' }}>
            <h2>Component D</h2>
            <ComponentC />
        </div>
    );
};

export default memo(ComponentD);
