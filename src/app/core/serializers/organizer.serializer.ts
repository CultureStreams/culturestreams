import { Organizer } from "./../models/organizer.model";

export class OrganizerSerializer {
  fromJSON(json: any): Organizer {
      let organizer = new Organizer();
      organizer.id = json.id;
      organizer.name = json.name;
      return organizer;
  }

  toJSON(organizer: Organizer): any {
    return {
      id: organizer.id,
      name: organizer.name,
    };
  }
}
