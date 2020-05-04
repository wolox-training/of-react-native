import { actions } from '@redux/auth/actions';
import authReducer from '@redux/auth/reducer';

describe('testing reducers', () => {
 test('test reducer success without snapshot', async () => {
   const action = {
     type: actions.SIGN_IN_SUCCESS,
     payload: 'mockToken'
   };
   expect(authReducer(undefined, action)).toEqual({ token: action.payload, loading: false, error: null });
 });
});
