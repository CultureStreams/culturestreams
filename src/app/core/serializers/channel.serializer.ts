import { Category } from "./../models/category.model";

export class CategorySerializer {
  fromJSON(json: any): Category {
      let category = new Category();
      category.id = json.id;
      category.name = json.name;
      return category;
  }

  toJSON(category: Category): any {
    return {
      name: category.name,
    };
  }
}
