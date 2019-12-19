import React, {useContext} from 'react';

import { Link } from 'react-router-dom';

import { Test } from '../../Global/Store';

export default function Say(){    

    let {count, setCount} = useContext(Test);

    return(

        <div>                    
            <button><Link to="/">Dash</Link></button>
            <button onClick={()=>{setCount(count + 1)}}>Send++</button>
            <p>{count}</p>
        </div>

    )
}