export class Event {
    id: number = 0;
    name: string = '';
    slug: string = '';
    start: Date = new Date();
    end: Date = new Date();
    link: string = '';
    description: string = '';
    organizer: number = 0;
    category: number;
    infoLink: string = '';
    image: string = '';
    freeOfCharge: boolean = true;
    availableLiveOnly: boolean = false;
    datePublished: Date = new Date();
    tags: String[];
    parsedDate: Date = new Date();
}
