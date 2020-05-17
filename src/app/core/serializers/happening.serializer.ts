import { Happening } from "./../models/happening.model";
// import { Category } from "./../models/category.model";
// import { Organizer } from './../models/organizer.model';
// import { OrganizerSerializer } from "./organizer.serializer";

export class HappeningSerializer {
  fromJSON(json: any): Happening {
    let happening = new Happening();
    happening.id = json.id;
    happening.name = json.name;
    happening.start = new Date(json.start);
    happening.end = new Date(json.end);
    happening.link = json.link;
    happening.description = json.description;
    happening.organizer = json.organizer;
    happening.category = json.category;
    happening.tags = json.tags;
    happening.city = json.city;
    happening.location = json.location;
    happening.subtitle = json.subtitle;
    happening.slug = json.slug;
    happening.infoLink = json.infoLink;
    happening.donationLink = json.donationLink;
    happening.image = json.image;
    happening.freeOfCharge = json.freeOfCharge;
    happening.availableLiveOnly = json.availableLiveOnly;
    happening.datePublished = new Date(json.datePublished);
    return happening;
  }
  toJSON(event: Happening): any {
    return {
      name: event.name,
      start: event.start,
      end: event.end,
      link: event.link,
      description: event.description,
      organizerId: event.organizer.id,
      categoryId: event.category.id,
      tags: event.tags,
      city: event.city,
      location: event.location,
      subtitle: event.subtitle,
      slug: event.slug,
      infoLink: event.infoLink,
      donationLink: event.donationLink,
      image: event.image,
      freeOfCharge: event.freeOfCharge,
      availableLiveOnly: event.availableLiveOnly
    };
  }
}
