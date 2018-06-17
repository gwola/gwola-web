import { Reducer } from 'redux';
import ApiService from '../apiService';
import { AppThunkAction } from './';


interface UserManageReceivedAction {
  type: 'USER_MANAGE_RECEIVED';
  payload: any;
}

interface UserManageRequestedAction {
  type: 'USER_MANAGE_REQUESTED';
}

export type KnownAction =
  UserManageReceivedAction |
  UserManageRequestedAction;

export const actionCreators = {

  userManage: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
    ApiService.CallApi(
      "GET",
      "/user/info",
      {},
      (data: any) => {
        console.log(data)
        //call this after the data comes back
        dispatch({ type: "USER_MANAGE_RECEIVED", payload: data });
      },
      (data: any) => {
        //call failed
        dispatch({ type: "USER_MANAGE_RECEIVED", payload: null });
      });
    dispatch({ type: "USER_MANAGE_REQUESTED" });
  }
};

export interface UserManageState {
  list: any;
  loading: boolean;
  SaveResult: SaveResult;
}

interface SaveResult {
  Status: number;
}

const unloadedState: UserManageState = {
  list: null,
  loading: false,
  SaveResult: {
    Status: 0,
  }
}

export const UserManageReducer: Reducer<UserManageState> = (state: UserManageState, action: KnownAction) => {
  switch (action.type) {
    case 'USER_MANAGE_REQUESTED':
      return { ...state, loading: true, SaveResult: { Status: 0 } };
    case 'USER_MANAGE_RECEIVED':
      return { ...state, loading: false, SaveResult: { Status: 1 }, list: action.payload };
    default:
      return state || unloadedState;
  }
}
