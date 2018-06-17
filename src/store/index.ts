import * as AppStore from './appStore';
import * as UserManage from './userManageStore';

export interface ApplicationState {
  user: AppStore.AppState,
  userManage: UserManage.UserManageState,
}

export const reducers = {
  user: AppStore.UserReducer,
  userManage: UserManage.UserManageReducer,
};

export interface AppThunkAction<TAction> {
  (
    dispatch: (action: TAction) => void,
    getState: () => ApplicationState
  ): void;
}