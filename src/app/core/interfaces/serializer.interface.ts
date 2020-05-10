import { Resource } from "./../models/resource.model";

export interface ISerializer {
  fromJSON(json: any): Resource;
  toJSON(resource: Resource): any;
}
