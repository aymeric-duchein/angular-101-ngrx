export interface AppState {
  loading: boolean;
}

const initialState: AppState = {
  loading: false,
};

export function appReducer(state: AppState = initialState, action): AppState {
  return state;
}