import { Reducer } from 'redux';
import ApiService from '../apiService';
import { AppThunkAction } from './';
import { Knowledge } from '../type/knowledge';

interface AllAppHomeReceivedAction {
  type: 'All_APPHOME_RECEIVED';
  payload: any;
}

interface AllAppHomeRequestedAction {
  type: 'ALL_APPHOME_REQUESTED';
}

/*
  测试node接口action
*/
interface AllTestReceivedAction {
  type: 'All_TEST_RECEIVED';
  payload: any;
}

interface AllTestRequestedAction {
  type: 'ALL_TEST_REQUESTED';
}


interface OneTestReceivedAction {
  type: 'ONE_TEST_RECEIVED';
  payload: any;
}

interface OneTestRequestedAction {
  type: 'ONE_TEST_REQUESTED';
}

interface TwoTestReceivedAction {
  type: 'TWO_TEST_RECEIVED';
  payload: any;
}

interface TwoTestRequestedAction {
  type: 'TWO_TEST_REQUESTED';
}
//结束

export type KnownAction =
  AllAppHomeReceivedAction |
  AllAppHomeRequestedAction |
  AllTestReceivedAction |
  AllTestRequestedAction |
  OneTestReceivedAction |
  OneTestRequestedAction |
  TwoTestReceivedAction |
  TwoTestRequestedAction;

export const actionCreators = {
  requestApp: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
    //dispatch({ type: "All_APP_RECEIVED", payload: { text: "123" } });

    ApiService.CallApi(
      "GET",
      "http://route.showapi.com/90-86",
      {
        id: "comos:fxieymv7709919",
        showapi_appid: "61248",
        showapi_sign: "ae5561ff06dc4da5b3c43ddbdbf93d9b"
      },
      (data: any) => {
        //call this after the data comes back
        dispatch({ type: "All_APPHOME_RECEIVED", payload: data });
      },
      (data: any) => {
        //call failed
        dispatch({ type: "All_APPHOME_RECEIVED", payload: null });
      });
    dispatch({ type: "ALL_APPHOME_REQUESTED" });
  },
  interfaceTest: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
    //const State = getState();
    //console.log(State)
    ApiService.CallApi(
      "POST",
      "/user/user",
      {
        username: "admin1",
        password: "666"
      },
      (data: any) => {
        //call this after the data comes back
        dispatch({ type: "All_TEST_RECEIVED", payload: data });
      },
      (data: any) => {
        //call failed
        dispatch({ type: "All_TEST_RECEIVED", payload: null });
      });
    dispatch({ type: "ALL_TEST_REQUESTED" });
  },
  oneTest: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
    //const State = getState();
    //console.log(State)
    ApiService.CallApi(
      "GET",
      "/user/test",
      {},
      (data: any) => {
        //call this after the data comes back
        dispatch({ type: "ONE_TEST_RECEIVED", payload: data });
      },
      (data: any) => {
        //call failed
        dispatch({ type: "ONE_TEST_RECEIVED", payload: null });
      });
    dispatch({ type: "ONE_TEST_REQUESTED" });
  },
  twoTest: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
    //const State = getState();
    //console.log(State)
    ApiService.CallApi(
      "GET",
      "/user/Cancellation",
      {},
      (data: any) => {
        //call this after the data comes back
        dispatch({ type: "TWO_TEST_RECEIVED", payload: data });
      },
      (data: any) => {
        //call failed
        dispatch({ type: "TWO_TEST_RECEIVED", payload: null });
      });
    dispatch({ type: "TWO_TEST_REQUESTED" });
  }
};

export interface AppState {
  App: Knowledge;
  loading: boolean;
  SaveResult: SaveResult;
}

interface SaveResult {
  Status: number;
}

const unloadedState: AppState = {
  App: {
    showapi_res_error: "",
    showapi_res_code: -1,
    showapi_res_body: {
      ret_code: -1,
      list: [],
    },
  },
  loading: false,
  SaveResult: {
    Status: 0,
  }
}


export const AppReducer: Reducer<AppState> = (state: AppState, action: KnownAction) => {
  switch (action.type) {
    case 'ALL_APPHOME_REQUESTED':
      return { ...state, loading: true };
    case 'All_APPHOME_RECEIVED':
      return { ...state, App: action.payload, loading: false };
    case 'ALL_TEST_REQUESTED':
      return { ...state };
    case 'All_TEST_RECEIVED':
      return { ...state };
    case 'ONE_TEST_RECEIVED':
      return { ...state };
    case 'ONE_TEST_REQUESTED':
      return { ...state };
    case 'TWO_TEST_RECEIVED':
      return { ...state };
    case 'TWO_TEST_REQUESTED':
      return { ...state };
    default:
      return state || unloadedState;
  }
}