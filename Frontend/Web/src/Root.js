import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Index from './Component/Index';

export default function Root(){
    return(
        <Switch>
            <Route path="/" component={Index}></Route>
        </Switch>
    );
}