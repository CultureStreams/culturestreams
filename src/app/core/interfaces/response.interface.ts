import { Organizer } from './../models/organizer.model';
import { Happening} from './../models/happening.model';
import { Channel } from './../models/channel.model';
import { Category } from './../models/category.model';
import { Tag } from './../models/tag.model';

export interface IResponse {
  message?: string;
  items?: any[];
  organizers?: Organizer[];
  organizer?: Organizer;
  events?: Happening[];
  event?: Happening;
  channels?: Channel[];
  channel?: Channel;
  categories?: Category[];
  tags?: Tag[];
}
