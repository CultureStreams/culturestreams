import { Tag } from "./../models/tag.model";

export class TagSerializer {
  fromJSON(json: any): Tag {
      let tag = new Tag();
      tag.id = json.id;
      tag.name = json.name;
      return tag;
  }

  toJSON(tag: Tag): any {
    return {
      id: tag.id,
      name: tag.name,
    };
  }
}
