import { Action } from "@ngrx/store";
import { ActionType } from "../enums/actiontypes";

export class ActionModel implements Action {
  type: string;
  payload: any
}


export const Add = (product: any) => {
  return <Action>{ type: ActionType.Add, payload: product }
}

export const Remove = (product: any) => {
  return <Action>{ type: ActionType.Remove, payload: product }
}

export const Clear = () => {
  return <Action>{ type: ActionType.Clear, payload: null };
}
