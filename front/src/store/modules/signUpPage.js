import { createAction, handleActions } from 'redux-actions'
import { Record } from 'immutable'

const CHANGE_INPUT = 'signUpPage/CHANGE_INPUT';

export const changeInput = createAction(CHANGE_INPUT, ( name, value ) => ({name, value}));

const initialState = Record({
    email: '',
    pwd: '',
    name: ''
})();

export default handleActions({
    [CHANGE_INPUT]: (state, { payload }) => (state.set([payload.name], payload.value))
}, initialState);