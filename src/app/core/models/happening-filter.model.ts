import { Resource } from './resource.model';

import { Category } from './category.model';
import { Organizer } from './organizer.model';
// import { Member } from './models/member';

export class HappeningFilter {
  start: Date = new Date();
  end: Date = new Date();
  link: URL;
  description: string = null;
  organizer: Organizer;
  category: Category;
  tags: String[] = [];
  image?: string = null;
  freeOfCharge?: boolean = true;
  availableLiveOnly?: boolean = false;
  organizerId?: number = null;
  categoryId?: number = null;
}
