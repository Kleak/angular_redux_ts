export class AppState {
  constructor(public counter: number) {
  }
}

export const initialState = new AppState(0);
