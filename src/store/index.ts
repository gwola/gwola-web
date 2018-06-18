import * as AppStore from './appStore';
import * as UserInfoStore from './userInfoStore';

export interface ApplicationState {
  user: AppStore.AppState,
  userInfo: UserInfoStore.UserInfoState,
}

export const reducers = {
  user: AppStore.UserReducer,
  userInfo: UserInfoStore.UserInfoReducer,
};

export interface AppThunkAction<TAction> {
  (
    dispatch: (action: TAction) => void,
    getState: () => ApplicationState
  ): void;
}
