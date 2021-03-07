import { Action } from '@ngrx/store';
import { ITable } from './../../models/models';

export enum TemplateStateActionType {
    UPDATE_TABLES = "UPDATE_TABLES"
  }

  export class UpdateTables implements Action {
    readonly type = TemplateStateActionType.UPDATE_TABLES;
    constructor(public payload: ITable) {}
}
  
export type TemplateStateAction = UpdateTables;