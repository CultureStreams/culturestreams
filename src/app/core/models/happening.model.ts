import { Resource } from './resource.model';

import { Category } from './category.model';
import { Organizer } from './organizer.model';

export class Happening extends Resource {
  start: Date = new Date();
  end: Date = new Date();
  link: URL;
  description: string = null;
  organizer: Organizer = new Organizer();
  category: Category = new Category();
  tags: String[] = [];
  subtitle?: string;
  city?: string;
  slug?: string;
  infoLink?: string;
  donationLink?: string;
  image?: string;
  freeOfCharge?: boolean;
  availableLiveOnly?: boolean;
  datePublished?: Date;
  parsedDate?: Date;
  organizerId?: number;
  categoryId?: number;
}
