import { Reducer } from 'redux';
import ApiService from '../apiService';
import { AppThunkAction } from './';
import { UserInfo } from '../type/userInfo';


interface UserInfoReceivedAction {
  type: 'USER_INFO_RECEIVED';
  payload: any;
}

interface UserInfoRequestedAction {
  type: 'USER_INFO_REQUESTED';
}

export type KnownAction =
  UserInfoReceivedAction |
  UserInfoRequestedAction;

export const actionCreators = {

  getUserInfo: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
    ApiService.CallApi(
      "GET",
      "/user/info",
      {},
      (data: any) => {
        console.log(data)
        //call this after the data comes back
        dispatch({ type: "USER_INFO_RECEIVED", payload: data });
      },
      (data: any) => {
        //call failed
        dispatch({ type: "USER_INFO_RECEIVED", payload: null });
      });
    dispatch({ type: "USER_INFO_REQUESTED" });
  }
};

export interface UserInfoState {
  userInfo: UserInfo;
  loading: boolean;
  SaveResult: SaveResult;
}

interface SaveResult {
  Status: number;
}

const unloadedState: UserInfoState = {
  userInfo: {
    status: 0,
    success: false,
    message: '',
    result: null
  },
  loading: false,
  SaveResult: {
    Status: 0,
  }
}

export const UserInfoReducer: Reducer<UserInfoState> = (state: UserInfoState, action: KnownAction) => {
  switch (action.type) {
    case 'USER_INFO_REQUESTED':
      return { ...state, loading: true, SaveResult: { Status: 0 } };
    case 'USER_INFO_RECEIVED':
      return { ...state, loading: false, SaveResult: { Status: 1 }, userInfo: action.payload };
    default:
      return state || unloadedState;
  }
}
