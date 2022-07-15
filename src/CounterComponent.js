import React from 'react';
import { useSelector } from 'react-redux';

function CounterComponent({getAllCounters}) {
    const Defines = useSelector(state => {
        return state.counter
    })
    return (
        <div>
            <p>Hai Counter {Defines.users?.length}</p>
            <button onClick={() => getAllCounters()}>Get Users</button>
        </div>
    );
}

export default CounterComponent;