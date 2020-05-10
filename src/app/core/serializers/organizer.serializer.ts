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
      // description: event.description,
      // categoryId: event.category.id,
      // tags: event.tags,
      // slug: event.slug,
      // website: event.website,
      // donationLink: event.donationLink,
      // image: event.image,
    };
  }
}
