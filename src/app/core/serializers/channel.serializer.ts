import { Category } from "./../models/category.model";

export class CategorySerializer {
  fromJSON(json: any): Category {
      let category = new Category();
      category.setId(json.id)
      category.setName(json.name)
      return category;
  }

  toJSON(category: Category): any {
    return {
      id: category.id,
      name: category.name,
    };
  }
}
