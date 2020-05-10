import { Organizer } from './../models/organizer.model';
import { Happening} from './../models/happening.model';
import { Channel } from './../models/channel.model';
import { Category } from './../models/category.model';

import { ChannelState } from "./../states/channel.state";

import { HappeningResponse} from './../models/happening-response.model';

// import { ICategory } from './../interfaces/category.interface';
// import { Resource } from './../models/resource.model';

export interface IResponse {
  message?: string;
  items?: any[];
  organizers?: Organizer[];
  organizer?: Organizer;
  events?: Happening[];
  // events?: HappeningResponse;
  event?: Happening;
  channels?: Channel[];
  // channels?: ChannelState;
  channel?: Channel;
  categories?: Category[];
}
