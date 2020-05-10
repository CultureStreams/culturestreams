import { Organizer } from './../models/organizer.model';
import { Happening} from './../models/happening.model';
import { Channel } from './../models/channel.model';
import { Category } from './../models/category.model';

// import { ICategory } from './../interfaces/category.interface';
// import { Resource } from './../models/resource.model';

export interface IDatastore {
  organizers?: Organizer[];
  organizer?: Organizer;
  events?: Happening[];
  event?: Happening;
  channels?: Channel[];
  channel?: Channel;
  categories?: Category[];
}
