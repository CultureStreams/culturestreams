import { Resource } from './resource.model';

export class Category extends Resource {
  id: number = null;
  name: string;
  slug: string;
  icon: string
}
