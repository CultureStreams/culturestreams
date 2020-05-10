import { Happening} from './../models/happening.model';

// import { ICategory } from './../interfaces/category.interface';
// import { Resource } from './../models/resource.model';

export class HappeningResponse {
  next?: string;
  previous?: string;
  count?: number;
  limit?: number;
  objects?: Happening[];
}

// export interface IResults {
//   message?: string;
//   items?: any[];
//   organizers?: Organizer[];
//   organizer?: Organizer;
//   events?: Happening[];
//   event?: Happening;
//   channels?: Channel[];
//   channel?: Channel;
//   categories?: Category[];
// }
