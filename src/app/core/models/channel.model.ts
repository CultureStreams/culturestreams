import { Resource } from './resource.model';

import { Category } from './category.model';
import { Organizer } from './organizer.model';

export class Channel extends Resource{
    // id: number = null;
    // name: string = null;
    link: string = null;
    organizer: Organizer;
    category: Category = new Category;
    freeOfCharge: boolean;
    availableLiveOnly: true;
    slug?: string;
    image?: string;
    // organizerId?: number = null;
    // categoryId?: number = null;
}
