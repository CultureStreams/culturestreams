import { Resource } from "./resource.model";

import { Category } from './category.model';

export class Organizer extends Resource {
    description?: string = null;
    category?: Category;
    tags?: String[] = [];
    slug?: string = null;
    website?: string = null;
    image?: string = null;
    datePublished?: Date = new Date();
    categoryId?: number = null;
}
