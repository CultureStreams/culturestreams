import { Time } from '@angular/common';
import { Host } from '@angular/core';

export class OrgaEvent {
    id: number = 0;
    title: string = '';
    startTime: number = 0;
    endTime: number = 0;
    date: Date = new Date();
    permanentAvailable: boolean = false;
    link: string = '';
    imageLink: string = '';
    shortDescription: string = '';
    description: string = '';
    category: string = '';
    subcategory: string = '';
    costs: number = 0;
    hostName: string = '';
    hostLocation: string = '';
}

