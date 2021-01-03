import {ISnapshot} from './ISnapshot';

export class IEvent {
  id: number;
  timestamp: number;
  price: number;
  status: string;
  snapshot: ISnapshot;
}
