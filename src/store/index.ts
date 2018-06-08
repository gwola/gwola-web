import * as AppStore from './appStore';

export interface ApplicationState {
  App: AppStore.AppState,
}

export const reducers = {
  App: AppStore.AppReducer,
};

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}