import { ActionModel } from "../action/actional-model";
import { ActionType } from "../enums/actiontypes";
import { CartModel } from "../model/card-model";


export const cart = new CartModel();

export function cartReducer(state = cart, action: ActionModel) {
  switch (action.type) {

    case ActionType.Add:
      state.products.push(action.payload);
      return state;

    case ActionType.Remove:
      const index: number = state.products.indexOf(action.payload);
      state.products.splice(index, 1);
      return state;

    case ActionType.Clear:
      state = new CartModel();
      return state;

    default:
      return state;
  }
}
