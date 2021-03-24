import React, { useState } from 'react';

function Counter(){
    const [value, setValue] = useState(0);

    const onIncrease = () => {
        setValue(
            increase => increase + 1
        );
    }

    return(
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrease}>plus</button>
        </div>
    );
}

export default Counter;