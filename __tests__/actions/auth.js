import { actionsCreators, actions } from '@redux/auth/actions';
import api from '@config/api';

import { successApiCall, internalServerError } from '../responsesMock';
import { store } from '../mockStore';

describe('testing actions with an api mock', () => {
 beforeEach(() => {
   store.clearActions();
 });
 test('test dispatch error', async () => {
    api.post = jest.fn().mockReturnValue(internalServerError);
    const expectedActionsTypes = [actions.SIGN_IN, actions.SIGN_IN_FAILURE];
    await store.dispatch(actionsCreators.signIn({}));
    const actionTypes = store.getActions().map(action => action.type);
    expect(actionTypes).toEqual(expectedActionsTypes);
    expect(api.post.mock.calls).toHaveLength(1);
  });
 
 test('test dispatch success', async () => {
   api.post = jest.fn().mockReturnValue(successApiCall);
   api.setHeader = jest.fn();
   const expectedActions = [
     { type: actions.SIGN_IN },
     {
       type: actions.SIGN_IN_SUCCESS,
       payload: 'mockToken'
     }];
   await store.dispatch(actionsCreators.signIn({}));
   expect(store.getActions()).toEqual(expectedActions);
   expect(api.post.mock.calls).toHaveLength(1);
   expect(api.setHeader.mock.calls).toHaveLength(1);
 });
});
