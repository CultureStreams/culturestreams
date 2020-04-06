import { Time } from '@angular/common';
import { Host } from '@angular/core';

export class OrgaEvent {
    id: number = 0;
    name: string = '';
    start: Date = new Date();
    end: Date = new Date();
    freeOfCharge: boolean = true;
    availableLiveOnly: boolean = false;
    link: string = '';
    description: string = '';
    image: string = '';
    datePublished: Date = new Date();
    organizer: number = 0;
    category: number;
    parsedDate: Date = new Date();
    tags: String[];
}
