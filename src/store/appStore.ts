import { Reducer } from 'redux';
import ApiService from '../apiService';
import { AppThunkAction } from './';
import { User } from '../type/user';

//登录
interface LoginReceivedAction {
  type: 'LOGIN_RECEIVED';
  payload: any;
}

interface LoginRequestedAction {
  type: 'LOGIN_REQUESTED';
}

export type KnownAction =
  LoginReceivedAction |
  LoginRequestedAction;

export const actionCreators = {

  login: (username: any, password: any): AppThunkAction<KnownAction> => (dispatch, getState) => {
    ApiService.CallApi(
      "POST",
      "/user/user",
      {
        username: username,
        password: password
      },
      (data: any) => {
        //call this after the data comes back
        dispatch({ type: "LOGIN_RECEIVED", payload: data });
      },
      (data: any) => {
        //call failed
        dispatch({ type: "LOGIN_RECEIVED", payload: null });
      });
    dispatch({ type: "LOGIN_REQUESTED" });
  }
};

export interface AppState {
  user: User;
  loading: boolean;
  SaveResult: SaveResult;
}

interface SaveResult {
  Status: number;
}

const unloadedState: AppState = {
  user: {
    status: 0,
    success: false,
    message: ''
  },
  loading: false,
  SaveResult: {
    Status: 0,
  }
}

export const UserReducer: Reducer<AppState> = (state: AppState, action: KnownAction) => {
  switch (action.type) {
    case 'LOGIN_REQUESTED':
      return { ...state, loading: true, SaveResult: { Status: 0 } };
    case 'LOGIN_RECEIVED':
      return { ...state, loading: false, SaveResult: { Status: 1 }, user: action.payload };
    default:
      return state || unloadedState;
  }
}