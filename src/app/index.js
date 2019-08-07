import * as actions from './action';
import reducer from './reducer';
import sagas from './sagas';
// console.log(actions, 'actions');
export default [{
    actions,
    reducer: {
        app: reducer
    },
    sagas
}] 