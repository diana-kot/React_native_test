import {IHistory} from '../types/HistoryTypes';

export class HistortHelper {
  static getHistory = (history: IHistory[]): IHistory[] => {
    return history.sort((a, b) => Number(b.active) - Number(a.active));
  };
}
