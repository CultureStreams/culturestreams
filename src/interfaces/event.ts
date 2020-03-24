import { Time } from '@angular/common';
import { Host } from '@angular/core';

export class OrgaEvent {
    id: number = 0;
    name: string = '';
    start;
    end;
    freeOfCharge: boolean = true;
    availableLiveOnly: boolean = false;
    link: string = '';
    description: string = '';
    image: string = '';
    datePublished: Date = new Date();
    organizer: number;
    category: string = '';
}

