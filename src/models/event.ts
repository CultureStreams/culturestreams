export class OrgaEvent {
    id: number = 0;
    name: string = '';
    slug: string = '';
    start: Date = new Date();
    city: string = '';
    end: Date = new Date();
    repetition: number = 0;
    link: string = '';
    donationLink: string = '';
    description: string = '';
    organizer: number = 0;
    organizerName: string = '';
    artist: number[];
    category: number;
    infoLink: string = '';
    imageLink: string = '';
    location: String;
    freeOfCharge: boolean = true;
    availableLiveOnly: boolean = true;
    periodic: boolean = false;
    datePublished: Date = new Date();
    tags: String;
    parsedDate: Date = new Date();
}
