import * as Act from './action';
import { put, call, takeEvery } from 'redux-saga/effects';

// function* _reducesas() {
//     yield takeEvery(Act.REDUCE, reducersas)
// }
// function* reducersas(payload) {
//     console.log('aaa')
//     yield put(Act.reducersaAct({
//         data: '数据转换了'
//     }))
// }
export default function* root() {
    yield [
        // _reducesas(),
    ]
}