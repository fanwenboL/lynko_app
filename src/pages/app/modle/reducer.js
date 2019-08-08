import * as Act from './action';
import { cloneDeep } from 'lodash';
const initState = {
    data: 'fanwenboshuaige'
}
export default function app(state = initState, action) {
    let newState = cloneDeep(state);
    switch (action.type) {
        case Act.REDUCE:
            newState = Object.assign({}, newState, action.data)
            return newState;
        default:
            return state;
    }
}