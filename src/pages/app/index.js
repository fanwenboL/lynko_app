import * as actions from './modle/action';
import reducer from './modle/reducer';
import sagas from './modle/sagas';
// console.log(actions, 'actions');
export default [{
    actions,
    reducer: {
        app: reducer
    },
    sagas
}] 