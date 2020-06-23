import React from 'react';
import InputCreator from './input'
import { Interger } from './interger';

export const PickAType = ({property})=>{

    switch (property) {
        case 'text':
            return <InputCreator/>
            // break;
    
        case 'integer':
            return <Interger/>
            // break;
    
        default:
            return <div>Error</div>
            break;
    }
}